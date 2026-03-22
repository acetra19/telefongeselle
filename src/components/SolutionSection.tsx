import {
  PhoneForwarded,
  Bot,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function SolutionSection() {
  return (
    <section id="solution" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-navy font-semibold text-sm uppercase tracking-wider mb-3">
            So funktioniert&apos;s
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            In 3 Schritten kein Sanitär-Auftrag mehr verpasst
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Keine komplizierte Technik, kein IT-Studium nötig. Rufumleitung
            einrichten und loslegen – so einfach wie Haupthahn zudrehen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          <StepCard
            step={1}
            icon={<PhoneForwarded className="w-7 h-7" />}
            title="Rufumleitung einrichten"
            description="In nur 2 Minuten leiten Sie Anrufe an den Telefon-Gesellen weiter – vom Handy oder Festnetz. Klappt auch mit der alten Büronummer."
          />
          <StepCard
            step={2}
            icon={<Bot className="w-7 h-7" />}
            title='Die KI "Sarah" nimmt ab'
            description="Sarah meldet sich mit Ihrem Firmennamen, fragt nach dem Sanitär-Problem, dem Ort und wie dringend es ist."
          />
          <StepCard
            step={3}
            icon={<MessageSquare className="w-7 h-7" />}
            title="WhatsApp mit allen Details"
            description="Sie bekommen sofort eine Nachricht: Name, Adresse, Art des Schadens, Dringlichkeit – fertig zum Losfahren."
          />
        </div>

        <div className="hidden md:flex justify-center mb-14">
          <div className="flex items-center gap-4 text-slate-400">
            <span className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center text-sm font-bold">
              1
            </span>
            <ArrowRight className="w-5 h-5" />
            <span className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center text-sm font-bold">
              2
            </span>
            <ArrowRight className="w-5 h-5" />
            <span className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center text-sm font-bold">
              3
            </span>
            <ArrowRight className="w-5 h-5" />
            <span className="bg-green-100 text-green-700 font-bold px-4 py-2 rounded-full text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Auftrag gesichert!
            </span>
          </div>
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-10 text-white">
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Was &ldquo;Sarah&rdquo; für Ihren Sanitärbetrieb erledigt:
              </h3>
              <ul className="space-y-3">
                {[
                  "Professionelle Begrüßung mit Ihrem Firmennamen",
                  "Erfasst Art des Schadens (Rohrbruch, Verstopfung, Leck...)",
                  "Fragt nach Adresse und Zugang zur Wohnung",
                  "Bewertet die Dringlichkeit (Notfall vs. Routineauftrag)",
                  "Schlägt Termine basierend auf Ihrem Kalender vor",
                  "Schickt Ihnen sofort alle Daten per WhatsApp",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-sm text-slate-300 mb-2">
                Beispiel WhatsApp-Nachricht:
              </p>
              <div className="bg-white/10 rounded-lg p-4 space-y-2 text-sm">
                <p>
                  <strong className="text-orange">🔧 Neuer Sanitär-Auftrag</strong>
                </p>
                <p>
                  <strong>Kunde:</strong> Andrea Weber
                </p>
                <p>
                  <strong>Tel:</strong> 0176 234 567 89
                </p>
                <p>
                  <strong>Adresse:</strong> Bergmannstr. 8, 10961 Berlin
                </p>
                <p>
                  <strong>Problem:</strong> Wasserrohrbruch im Keller, Wasser steht 5cm
                </p>
                <p>
                  <strong>Zugang:</strong> Hausmeister lässt rein, Klingel &ldquo;Weber&rdquo; 3. OG
                </p>
                <p>
                  <strong>Dringlichkeit:</strong>{" "}
                  <span className="text-red-400">🔴 Notfall</span>
                </p>
                <p>
                  <strong>Termin:</strong> Heute 09:00 Uhr bestätigt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  icon,
  title,
  description,
}: {
  step: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="relative bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-navy/30 hover:shadow-lg transition-all group">
      <div className="absolute -top-4 -left-2 w-10 h-10 bg-orange text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
        {step}
      </div>
      <div className="w-14 h-14 bg-navy/10 text-navy rounded-xl flex items-center justify-center mb-4 group-hover:bg-navy group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}
