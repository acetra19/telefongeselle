"use client";

import { useState } from "react";
import { Phone, Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.alert(
      "Wähle jetzt +13613045917 und melde dich bei Sarah mit deinem Sanitär Problem"
    );
    setName("");
    setPhone("");
  }

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-gradient-to-br from-navy via-navy-dark to-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-orange font-semibold text-sm uppercase tracking-wider mb-3">
              Jetzt starten
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Nie wieder einen Sanitär-Notfall verpassen
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Hinterlassen Sie Ihren Namen und Ihre Nummer. Wir rufen Sie
              innerhalb von 24 Stunden an und zeigen Ihnen, wie Sarah Ihre
              Sanitär-Aufträge annimmt.
            </p>

            <ul className="space-y-3">
              {[
                "Unverbindlich und kostenlos",
                "Live-Demo mit echtem Sanitär-Szenario",
                "In 10 Minuten alles erklärt",
                "Sofort einsatzbereit für Ihren Betrieb",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Demo-Anruf anfordern
                </h3>
                <p className="text-sm text-slate-500">
                  Nach dem Absenden zeigen wir Ihnen direkt die Nummer für den
                  Demo-Anruf.
                </p>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Ihr Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="z.B. Jens Müller, Sanitär Müller GmbH"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition-shadow"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Telefonnummer
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0176 123 456 78"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition-shadow"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-bold py-4 rounded-xl transition-colors text-lg"
              >
                <Send className="w-5 h-5" />
                Jetzt Demo-Anruf starten
              </button>

              <p className="text-xs text-slate-500 text-center">
                Nach dem Klick erscheint ein Hinweis mit der Nummer von Sarah.
              </p>

              <p className="text-xs text-slate-400 text-center">
                Ihre Daten werden DSGVO-konform verarbeitet und nicht an Dritte
                weitergegeben.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
