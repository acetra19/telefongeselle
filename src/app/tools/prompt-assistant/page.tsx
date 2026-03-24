import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PromptInstructionTool from "@/components/PromptInstructionTool";

export const metadata: Metadata = {
  title: "Prompt-Hilfe | Telefon-Geselle",
  description:
    "Transkripte und Reviews einfügen – konkrete Anweisungen für den globalen KI-Prompt extrahieren.",
  robots: { index: false, follow: false },
};

export default function PromptAssistantPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-orange transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zur Startseite
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
          Prompt-Hilfe
        </h1>
        <p className="text-slate-600 mb-10 max-w-2xl">
          Internes Werkzeug: Aus echten Gesprächen und Reviews werden
          umsetzbare Regeln für einen einzigen globalen System-Prompt erzeugt.
        </p>

        <PromptInstructionTool />
      </main>
    </div>
  );
}
