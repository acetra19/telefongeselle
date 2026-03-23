import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Datenschutz | Telefon-Geselle",
  description: "Datenschutzerklärung für Telefon-Geselle.",
};

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <p className="text-slate-600 not-prose text-sm">
        <strong>Stand:</strong> März 2026
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlich für die Datenverarbeitung im Sinne der DSGVO ist:
      </p>
      <p>
        <strong>Kundenbetreuung FK</strong>
        <br />
        Florian Kühnast
        <br />
        Katharinenstraße 19A
        <br />
        10711 Berlin
        <br />
        Deutschland
        <br />
        E-Mail:{" "}
        <a href="mailto:hallo@telefon-geselle.de">hallo@telefon-geselle.de</a>
      </p>

      <h2>2. Allgemeine Hinweise</h2>
      <p>
        Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Personenbezogene
        Daten werden nur im Rahmen der gesetzlichen Vorschriften verarbeitet.
      </p>

      <h2>3. Hosting und Server-Logs</h2>
      <p>
        Beim Aufruf dieser Website werden durch den Hosting-Anbieter technisch
        erforderliche Daten (z. B. IP-Adresse, Zeitpunkt, angeforderte Datei)
        verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
        (Betrieb und Sicherheit der Website).
      </p>

      <h2>4. Kontaktformular</h2>
      <p>
        Wenn Sie uns per Formular kontaktieren, verarbeiten wir die von Ihnen
        angegebenen Daten zur Bearbeitung der Anfrage. Rechtsgrundlage ist
        Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. lit. f DSGVO.
      </p>

      <h2>5. Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
        Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch
        gegen die Verarbeitung. Außerdem haben Sie das Recht, sich bei einer
        Aufsichtsbehörde zu beschweren.
      </p>

      <h2>6. Änderungen</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich
        die verarbeiteten Daten oder die Rechtslage ändern.
      </p>
    </LegalLayout>
  );
}
