import { PhoneOff, TrendingDown, AlertTriangle, Clock, Droplets } from "lucide-react";

export default function ProblemSection() {
  return (
    <section id="problem" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-orange font-semibold text-sm uppercase tracking-wider mb-3">
            Das echte Problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Wasser wartet nicht – Ihre Kunden auch nicht
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sie liegen unterm Waschbecken, die Hände voller Dichtungspaste – und
            das Telefon klingelt. Ein Rohrbruch-Notfall. Was passiert, wenn Sie
            nicht rangehen?
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProblemCard
            icon={<PhoneOff className="w-7 h-7" />}
            stat="80%"
            text="der Kunden mit Wasserschaden rufen bei Nichterreichen sofort den nächsten Klempner an."
          />
          <ProblemCard
            icon={<Droplets className="w-7 h-7" />}
            stat="6 Min."
            text="dauert es im Schnitt, bis ein Rohrbruch-Notfall bei der Konkurrenz landet."
          />
          <ProblemCard
            icon={<AlertTriangle className="w-7 h-7" />}
            stat="∅ 1.800€"
            text="ist ein typischer Sanitär-Notauftrag wert. Verpasst heißt: Das Geld hat ein anderer."
          />
          <ProblemCard
            icon={<TrendingDown className="w-7 h-7" />}
            stat="3-5"
            text="lukrative Aufträge verlieren Klempner in Berlin pro Woche durch verpasste Anrufe."
          />
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-200 rounded-2xl p-6 sm:p-8 text-center">
          <p className="text-lg sm:text-xl font-bold text-slate-900">
            &ldquo;Ich kann doch nicht ans Telefon, wenn ich gerade den
            Absperrhahn zudrehe und der Keller unter Wasser steht.&rdquo;
          </p>
          <p className="text-slate-600 mt-2">
            – Das hören wir von jedem Klempner. Genau dafür gibt es den
            Telefon-Gesellen.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProblemCard({
  icon,
  stat,
  text,
}: {
  icon: React.ReactNode;
  stat: string;
  text: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-orange/40 hover:shadow-lg transition-all">
      <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <p className="text-3xl font-extrabold text-slate-900 mb-2">{stat}</p>
      <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}
