import { NextResponse } from "next/server";

type Body = {
  globalPrompt?: string;
  transcripts?: string;
  reviews?: string;
};

const SYSTEM = `You are a prompt engineer for a German B2B phone AI ("Sarah") for plumbers/sanitary trades.

You receive three inputs:
1) CURRENT GLOBAL PROMPT — the live English system prompt (may be empty).
2) CALL TRANSCRIPTS — evidence from real calls (may be empty).
3) CUSTOMER REVIEWS — evidence from customers (may be empty).

Your task: output ONLY genuinely NEW, concrete instructions that should be ADDED or CHANGED, and they must be STRICTLY grounded in the transcripts or reviews. Use the current global prompt as the baseline to avoid duplication.

Hard rules:
- Do NOT suggest anything that is already covered by the current global prompt (same intent, even if different wording). Put those cases into "skippedAsAlreadyInPrompt" with a one-line English explanation (e.g. "Skipped: asking for address — already in global prompt under 'collect caller address'").
- Every item in "instructions", "fromTranscripts", "fromReviews", and "avoid" must be traceable to a specific pattern, gap, or quote implied by transcripts OR reviews. If there is no such evidence, use empty arrays.
- Do not invent generic phone-AI tips unless the evidence clearly implies a gap the global prompt does not address.
- "avoid" is only for behaviors/phrases to forbid that are evidenced by a bad outcome or complaint in transcripts/reviews.

Output MUST be valid JSON only, no markdown fences.
Language of ALL string values: English (for an English system prompt; the AI may still speak German to callers).

JSON schema:
{
  "instructions": string[],              // unified NEW items only, max 25
  "fromTranscripts": string[],           // subset justified by transcripts
  "fromReviews": string[],               // subset justified by reviews
  "avoid": string[],                     // evidenced avoid list
  "skippedAsAlreadyInPrompt": string[],  // what you considered but did NOT add because already in global prompt
  "notes": string                        // optional: conflicts, thin evidence, assumptions
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

  const globalPrompt = (body.globalPrompt ?? "").trim();
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

  const userContent = `## Current global prompt (baseline — do not duplicate)\n\n${globalPrompt || "(empty — no baseline; still only suggest from transcripts/reviews)"}\n\n## Call transcripts (evidence)\n\n${transcripts || "(empty)"}\n\n## Customer reviews (evidence)\n\n${reviews || "(empty)"}`;

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
        temperature: 0.25,
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
      skippedAsAlreadyInPrompt?: string[];
      notes?: string;
    };

    return NextResponse.json({
      instructions: parsed.instructions ?? [],
      fromTranscripts: parsed.fromTranscripts ?? [],
      fromReviews: parsed.fromReviews ?? [],
      avoid: parsed.avoid ?? [],
      skippedAsAlreadyInPrompt: parsed.skippedAsAlreadyInPrompt ?? [],
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
