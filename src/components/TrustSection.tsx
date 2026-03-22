import {
  ShieldCheck,
  Server,
  Droplets,
  Star,
  Quote,
} from "lucide-react";

export default function TrustSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-navy font-semibold text-sm uppercase tracking-wider mb-3">
            Vertrauen & Sicherheit
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Ihre Kundendaten – so dicht wie Ihre Leitungen
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Im Handwerk zählt Vertrauen. Kunden lassen Sie in ihre Wohnung.
            Wir nehmen Datenschutz genauso ernst wie Sie die Dichtung am
            Eckventil.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          <TrustBadge
            icon={<ShieldCheck className="w-8 h-8" />}
            title="DSGVO-konform"
            description="Vollständig konform mit der europäischen Datenschutzgrundverordnung. Kundenadressen und Telefonnummern werden verschlüsselt verarbeitet."
          />
          <TrustBadge
            icon={<Server className="w-8 h-8" />}
            title="Server-Standort EU"
            description="Unsere Server stehen in Helsinki und Frankfurt. Keine Kundendaten verlassen die EU – garantiert."
          />
          <TrustBadge
            icon={<Droplets className="w-8 h-8" />}
            title="Fürs Handwerk gebaut – Fokus Sanitär"
            description="Von Sanitärprofis und Handwerkern mitentwickelt. Sarah kennt den Unterschied zwischen Rohrbruch und tropfendem Hahn – und spricht die Sprache Ihrer Kunden."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <TestimonialCard
            quote="Freitag Abend, ich bin beim Notdienst an einer Heizung – und Sarah nimmt parallel drei Anrufe an. Zwei davon waren Rohrbrüche. Ohne den Telefon-Gesellen wären das 4.000€ bei der Konkurrenz gelandet."
            name="Jens M."
            role="Klempnermeister, Berlin-Neukölln"
            stars={5}
          />
          <TestimonialCard
            quote="Meine Kunden denken, ich hätte eine Bürokraft eingestellt. Die KI fragt sogar, ob der Haupthahn schon zu ist. Seitdem kommen die Notaufträge direkt auf mein WhatsApp – perfekt sortiert."
            name="Petra R."
            role="Sanitärbetrieb, Berlin-Charlottenburg"
            stars={5}
          />
        </div>
      </div>
    </section>
  );
}

function TrustBadge({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center hover:shadow-lg transition-shadow">
      <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  stars,
}: {
  quote: string;
  name: string;
  role: string;
  stars: number;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
      <Quote className="w-8 h-8 text-orange/30 mb-4" />
      <div className="flex gap-1 mb-3">
        {Array.from({ length: stars }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 text-yellow-400 fill-yellow-400"
          />
        ))}
      </div>
      <p className="text-slate-700 leading-relaxed mb-4 italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <p className="font-bold text-slate-900">{name}</p>
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </div>
  );
}
