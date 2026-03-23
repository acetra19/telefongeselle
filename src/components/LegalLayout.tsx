import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type LegalLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-orange transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zur Startseite
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8">
          {title}
        </h1>
        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-navy prose-a:no-underline hover:prose-a:underline">
          {children}
        </div>
      </main>
    </div>
  );
}
