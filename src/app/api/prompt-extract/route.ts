import { NextResponse } from "next/server";

type Body = {
  transcripts?: string;
  reviews?: string;
};

const SYSTEM = `You are a prompt engineer for a German B2B phone AI ("Sarah") for plumbers/sanitary trades.
Given CALL TRANSCRIPTS and CUSTOMER REVIEWS (may be in German or English), extract ONLY concrete, actionable instructions that belong in ONE global system prompt.

Rules:
- Output MUST be valid JSON only, no markdown fences.
- Language of ALL string values in the JSON (instructions, fromTranscripts, fromReviews, avoid, notes): English only. These strings will be pasted into an English system prompt; the AI may still speak German to callers.
- Be specific: imperative formulations suitable to paste into a system prompt ("Always ask...", "Never say...", "If the caller mentions X, then Y").
- Merge duplicates; resolve contradictions by preferring safer/more polite behavior and noting the trade-off in "notes".
- If input is empty or useless, return empty arrays and a short "notes" explanation.

JSON schema:
{
  "instructions": string[],           // unified list, max 25 items, each one line
  "fromTranscripts": string[],      // subset traceable to transcripts
  "fromReviews": string[],          // subset traceable to reviews
  "avoid": string[],                // phrases/behaviors to forbid
  "notes": string                   // optional: conflicts, assumptions, gaps
}`;

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json(
      { error: "invalid_json" },
      { status: 400 }
    );
  }

  const transcripts = (body.transcripts ?? "").trim();
  const reviews = (body.reviews ?? "").trim();

  if (!transcripts && !reviews) {
    return NextResponse.json(
      { error: "empty_input" },
      { status: 400 }
    );
  }

  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    return NextResponse.json(
      {
        error: "missing_api_key",
        message:
          "OPENAI_API_KEY is not configured. Add it in Railway / .env for live extraction.",
      },
      { status: 503 }
    );
  }

  const userContent = `## Transkripte (Anrufe)\n\n${transcripts || "(leer)"}\n\n## Kunden-Reviews\n\n${reviews || "(leer)"}`;

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
        temperature: 0.3,
        messages: [
          { role: "system", content: SYSTEM },
          { role: "user", content: userContent },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return NextResponse.json(
        { error: "openai_error", detail: errText.slice(0, 500) },
        { status: 502 }
      );
    }

    const data = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const raw = data.choices?.[0]?.message?.content;
    if (!raw) {
      return NextResponse.json(
        { error: "openai_empty" },
        { status: 502 }
      );
    }

    const parsed = JSON.parse(raw) as {
      instructions?: string[];
      fromTranscripts?: string[];
      fromReviews?: string[];
      avoid?: string[];
      notes?: string;
    };

    return NextResponse.json({
      instructions: parsed.instructions ?? [],
      fromTranscripts: parsed.fromTranscripts ?? [],
      fromReviews: parsed.fromReviews ?? [],
      avoid: parsed.avoid ?? [],
      notes: parsed.notes ?? "",
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "unknown";
    return NextResponse.json(
      { error: "server_error", detail: message },
      { status: 500 }
    );
  }
}
