import { Phone, Mail, MapPin, Droplets } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange rounded-lg flex items-center justify-center">
                <Droplets className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold">Telefon-Geselle</span>
            </div>
            <p className="text-sm leading-relaxed">
              Der digitale Telefonservice fürs Handwerk – spezialisiert
              auf Klempner & Sanitär. Damit kein Auftrag mehr verloren geht.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Produkt</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#solution" className="hover:text-white transition-colors">
                  So funktioniert&apos;s
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Preise
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Demo anfordern
                </a>
              </li>
              <li>
                <a
                  href="/tools/prompt-assistant"
                  className="hover:text-white transition-colors"
                >
                  Prompt-Hilfe (intern)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/impressum" className="hover:text-white transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="hover:text-white transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="/agb" className="hover:text-white transition-colors">
                  AGB
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange" />
                <a href="tel:+491721871555" className="hover:text-white transition-colors">
                  0172 1871555
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange" />
                <a
                  href="mailto:hallo@telefon-geselle.de"
                  className="hover:text-white transition-colors"
                >
                  hallo@telefon-geselle.de
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange shrink-0 mt-0.5" />
                <span>
                  Katharinenstraße 19A, 10711 Berlin
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Telefon-Geselle. Alle Rechte
            vorbehalten.
          </p>
          <p className="text-xs text-slate-500">
            Mit Handwerker-Know-how in Berlin entwickelt.
          </p>
        </div>
      </div>
    </footer>
  );
}
