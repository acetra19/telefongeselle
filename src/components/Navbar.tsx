"use client";

import { useState } from "react";
import { Phone, Menu, X, Droplets } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-navy rounded-lg flex items-center justify-center">
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-navy">
              Telefon-Geselle
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#problem"
              className="text-sm font-medium text-slate-600 hover:text-navy transition-colors"
            >
              Das Problem
            </a>
            <a
              href="#solution"
              className="text-sm font-medium text-slate-600 hover:text-navy transition-colors"
            >
              So funktioniert&apos;s
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-slate-600 hover:text-navy transition-colors"
            >
              Preise
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              Demo anfordern
            </a>
          </div>

          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü öffnen"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3">
          <a
            href="#problem"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium text-slate-600 hover:text-navy py-2"
          >
            Das Problem
          </a>
          <a
            href="#solution"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium text-slate-600 hover:text-navy py-2"
          >
            So funktioniert&apos;s
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium text-slate-600 hover:text-navy py-2"
          >
            Preise
          </a>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center bg-orange hover:bg-orange-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Demo anfordern
          </a>
        </div>
      )}
    </nav>
  );
}
