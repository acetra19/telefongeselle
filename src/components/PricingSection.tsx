import { Check, ArrowRight, Sparkles } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-orange font-semibold text-sm uppercase tracking-wider mb-3">
            Transparente Preise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Günstiger als ein einziger verpasster Rohrbruch-Notfall
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Keine versteckten Kosten. Keine Vertragsbindung. Kündigen Sie
            jederzeit zum Monatsende.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <PricingCard
            name="Starter"
            price="199"
            description="Für Ein-Mann-Betriebe"
            features={[
              "Bis zu 50 Anrufe / Monat",
              "Professionelle Begrüßung",
              "WhatsApp-Benachrichtigung",
              "Sanitär-Auftragserfassung",
              "E-Mail-Support",
            ]}
          />
          <PricingCard
            name="Meister"
            price="399"
            description="Für wachsende Handwerksbetriebe"
            popular
            features={[
              "Bis zu 150 Anrufe / Monat",
              "Alles aus Starter",
              "Notfall-Priorisierung",
              "Terminbuchung & Kalender",
              "Prioritäts-Support",
              "Individuelle Begrüßung",
            ]}
          />
          <PricingCard
            name="Betrieb"
            price="699"
            description="Für Betriebe mit Monteuren"
            features={[
              "Unbegrenzte Anrufe",
              "Alles aus Meister",
              "Monteur-Routing nach PLZ",
              "Notdienst-Schichtplanung",
              "CRM-Integration",
              "Dedizierter Ansprechpartner",
            ]}
          />
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Endpreise (Kleinunternehmer § 19 UStG, keine Umsatzsteuer) ·
            Monatlich kündbar · 14 Tage kostenlos
            testen
          </p>
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  name,
  price,
  description,
  features,
  popular,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl p-6 sm:p-8 border-2 ${
        popular
          ? "border-orange bg-gradient-to-b from-orange/5 to-white shadow-xl scale-[1.02]"
          : "border-slate-200 bg-white hover:border-slate-300"
      } transition-all`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          Beliebteste Wahl
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900">{name}</h3>
        <p className="text-sm text-slate-500 mb-4">{description}</p>
        <div className="flex items-end gap-1">
          <span className="text-4xl font-extrabold text-slate-900">
            {price}€
          </span>
          <span className="text-slate-500 mb-1">/ Monat</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check
              className={`w-5 h-5 shrink-0 mt-0.5 ${
                popular ? "text-orange" : "text-green-500"
              }`}
            />
            <span className="text-slate-700">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-colors ${
          popular
            ? "bg-orange hover:bg-orange-dark text-white"
            : "bg-slate-100 hover:bg-slate-200 text-slate-900"
        }`}
      >
        14 Tage kostenlos testen
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
