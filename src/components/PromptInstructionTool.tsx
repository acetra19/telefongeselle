"use client";

import { useState } from "react";
import {
  FileText,
  MessageSquareQuote,
  Sparkles,
  Loader2,
  Copy,
  Check,
} from "lucide-react";

type ExtractResult = {
  instructions: string[];
  fromTranscripts: string[];
  fromReviews: string[];
  avoid: string[];
  notes: string;
};

export default function PromptInstructionTool() {
  const [transcripts, setTranscripts] = useState("");
  const [reviews, setReviews] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ExtractResult | null>(null);
  const [copied, setCopied] = useState(false);

  async function runExtract() {
    setError(null);
    setResult(null);
    setLoading(true);
    try {
      const res = await fetch("/api/prompt-extract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transcripts, reviews }),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.error === "missing_api_key") {
          setError(
            "API-Schlüssel fehlt: OPENAI_API_KEY in den Umgebungsvariablen setzen (z. B. Railway → Variables)."
          );
          return;
        }
        if (data.error === "empty_input") {
          setError("Bitte mindestens Transkripte oder Reviews einfügen.");
          return;
        }
        setError(data.detail || data.message || "Extraktion fehlgeschlagen.");
        return;
      }

      setResult(data as ExtractResult);
    } catch {
      setError("Netzwerkfehler. Bitte erneut versuchen.");
    } finally {
      setLoading(false);
    }
  }

  function copyAll() {
    if (!result) return;
    const blocks = [
      "## Unified instructions (global prompt)",
      ...result.instructions.map((s) => `- ${s}`),
      "",
      "## From transcripts",
      ...result.fromTranscripts.map((s) => `- ${s}`),
      "",
      "## From reviews",
      ...result.fromReviews.map((s) => `- ${s}`),
      "",
      "## Avoid",
      ...result.avoid.map((s) => `- ${s}`),
      "",
      result.notes ? `## Notes\n${result.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    void navigator.clipboard.writeText(blocks);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          Füge unten beliebig viele <strong>transkribierte Gespräche</strong> und
          separate <strong>Kunden-Reviews</strong> ein. Das Tool extrahiert daraus
          <strong> konkrete Anweisungen</strong> – die Vorschläge erscheinen
          auf <strong>Englisch</strong>, damit du sie direkt in einen englischen
          globalen System-Prompt übernehmen kannst (die KI spricht weiterhin
          deutsch mit Anrufern).
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <label className="block">
            <span className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2">
              <FileText className="w-4 h-4 text-navy" />
              Transkripte (Anrufe)
            </span>
            <textarea
              value={transcripts}
              onChange={(e) => setTranscripts(e.target.value)}
              rows={14}
              placeholder="Gesprächsverläufe einfügen – mehrere Anrufe durch Leerzeilen oder --- trennen..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy font-mono"
            />
          </label>

          <label className="block">
            <span className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2">
              <MessageSquareQuote className="w-4 h-4 text-orange" />
              Kunden-Reviews
            </span>
            <textarea
              value={reviews}
              onChange={(e) => setReviews(e.target.value)}
              rows={14}
              placeholder="Google, eMail, WhatsApp-Feedback – roh oder kopiert..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy font-mono"
            />
          </label>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <button
            type="button"
            onClick={() => void runExtract()}
            disabled={loading || (!transcripts.trim() && !reviews.trim())}
            className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark disabled:opacity-50 text-white font-bold px-6 py-3 rounded-xl transition-colors"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Extrahieren…
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Anweisungen extrahieren
              </>
            )}
          </button>
          {error && (
            <p className="text-sm text-red-600 max-w-xl">{error}</p>
          )}
        </div>
      </div>

      {result && (
        <div className="bg-navy/5 rounded-2xl border border-navy/20 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Vorschlag für deinen globalen Prompt
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Generated suggestions in English
              </p>
            </div>
            <button
              type="button"
              onClick={copyAll}
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy border border-navy/30 hover:bg-white px-4 py-2 rounded-lg"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? "Kopiert" : "Alles kopieren"}
            </button>
          </div>

          <Section title="Unified instructions" items={result.instructions} />
          <Section
            title="From transcripts"
            items={result.fromTranscripts}
          />
          <Section title="From reviews" items={result.fromReviews} />
          <Section title="Avoid" items={result.avoid} accent />

          {result.notes ? (
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-950">
              <strong className="block mb-1">Notes</strong>
              {result.notes}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

function Section({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[];
  accent?: boolean;
}) {
  if (!items.length) return null;
  return (
    <div className="mb-6 last:mb-0">
      <h3
        className={`text-sm font-bold uppercase tracking-wide mb-2 ${
          accent ? "text-red-700" : "text-slate-700"
        }`}
      >
        {title}
      </h3>
      <ul className="list-disc pl-5 space-y-1.5 text-slate-800 text-sm">
        {items.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  );
}
