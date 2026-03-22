import { Phone, ArrowRight, Shield, Clock, Zap, Droplets } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-br from-navy via-navy-dark to-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-orange-light text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Droplets className="w-4 h-4" />
              Für Klempner & Sanitärbetriebe – gemacht fürs Handwerk
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Rohrbruch um 7 Uhr, Sie unterm Waschbecken.{" "}
              <span className="text-orange">Wir gehen für Sie ran.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl">
              Ihr digitaler Telefon-Geselle nimmt Sanitär-Notrufe an, qualifiziert
              Aufträge und bucht Termine – <strong className="text-white">24/7</strong>,
              während Sie beim Kunden die Leitung reparieren.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-orange/25"
              >
                <Phone className="w-5 h-5" />
                Jetzt Demo-Anruf anfordern
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                DSGVO-konform
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                In 2 Minuten eingerichtet
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-orange-light" />
                Keine Vertragsbindung
              </span>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative w-80 h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2.5rem] border border-slate-700 shadow-2xl p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-sm font-medium">
                    Sarah ist aktiv
                  </span>
                </div>

                <div className="space-y-4 flex-1">
                  <PhoneMockMessage
                    from="Sanitär-Notruf"
                    text="Fr. Weber – Wasserrohrbruch in Kreuzberg, Keller läuft voll!"
                    time="07:12"
                    accent
                  />
                  <PhoneMockMessage
                    from="WhatsApp an Sie"
                    text="🔧 Neuer Auftrag: Weber, Bergmannstr. 8, 10961 Berlin – Rohrbruch Keller, Notfall"
                    time="07:13"
                  />
                  <PhoneMockMessage
                    from="Termin gebucht"
                    text="✅ Heute 09:00 Uhr – Fr. Weber bestätigt"
                    time="07:14"
                  />
                </div>

                <div className="mt-auto pt-4 border-t border-slate-700 text-center">
                  <p className="text-slate-500 text-xs">
                    5 Sanitär-Aufträge bearbeitet heute
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockMessage({
  from,
  text,
  time,
  accent,
}: {
  from: string;
  text: string;
  time: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`p-3 rounded-xl ${
        accent
          ? "bg-orange/20 border border-orange/30"
          : "bg-slate-700/50 border border-slate-600/30"
      }`}
    >
      <div className="flex items-center justify-between mb-1">
        <span
          className={`text-xs font-semibold ${
            accent ? "text-orange" : "text-slate-400"
          }`}
        >
          {from}
        </span>
        <span className="text-xs text-slate-500">{time}</span>
      </div>
      <p className="text-sm text-white leading-snug">{text}</p>
    </div>
  );
}
