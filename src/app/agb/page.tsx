import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "AGB | Telefon-Geselle",
  description: "Allgemeine Geschäftsbedingungen für Telefon-Geselle.",
};

export default function AgbPage() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen (AGB)">
      <p className="text-slate-600 not-prose">
        <strong>Stand:</strong> März 2026
      </p>
      <p className="text-slate-600 not-prose text-sm italic">
        Hinweis: Rechtlich verbindliche AGB sollten von einer Rechtsanwältin
        oder einem Rechtsanwalt geprüft werden. Die folgenden Regelungen dienen
        als strukturierte Grundlage.
      </p>

      <h2>§ 1 Geltungsbereich und Vertragspartner</h2>
      <p>
        (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
        Verträge zwischen der <strong>Kundenbetreuung FK</strong> (Inhaber:
        Florian Kühnast, Katharinenstraße 19A, 10711 Berlin) – nachfolgend
        „Anbieter“ – und dem Kunden über die Nutzung des Dienstes
        „Telefon-Geselle“ (KI-gestützter Telefon- und Lead-Service).
      </p>
      <p>
        (2) Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei
        denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.
      </p>

      <h2>§ 2 Vertragsgegenstand und Leistungsbeschreibung</h2>
      <p>
        (1) Der Anbieter stellt dem Kunden einen cloudbasierten Dienst zur
        Bereitstellung eines KI-gestützten Telefon- bzw. Anrufservices
        (einschließlich Qualifizierung von Anfragen und Benachrichtigung per
        z. B. WhatsApp) bereit, soweit im jeweiligen Leistungsvertrag oder
        Angebot beschrieben.
      </p>
      <p>
        (2) Ein bestimmter Erfolg (z. B. Anzahl gebuchter Termine oder
        Umsatz) wird nicht geschuldet. Der Dienst richtet sich nach dem
        technischen Stand und den vereinbarten Leistungsumfang.
      </p>
      <p>
        (3) Der Kunde ist für die technische Einrichtung (z. B. Rufumleitung)
        und die rechtliche Zulässigkeit der Nutzung im eigenen Betrieb
        selbst verantwortlich.
      </p>

      <h2>§ 3 Vertragsschluss</h2>
      <p>
        (1) Die Darstellung auf der Website www.telefon-geselle.de stellt
        kein rechtlich bindendes Angebot dar.
      </p>
      <p>
        (2) Ein Vertrag kommt durch Annahme einer Anmeldung oder eines
        Angebots durch den Anbieter in Textform zustande, sofern nichts anderes
        vereinbart ist.
      </p>

      <h2>§ 4 Preise und Zahlungsbedingungen</h2>
      <p>
        (1) Es gelten die auf der Website oder im individuellen Angebot
        genannten Preise als Endpreise. Der Anbieter ist Kleinunternehmer im
        Sinne von § 19 UStG; es wird keine Umsatzsteuer ausgewiesen.
      </p>
      <p>
        (2) Die Zahlung erfolgt nach den im Vertrag vereinbarten Modalitäten
        (z. B. monatliche Rechnung, Lastschrift oder Überweisung).
      </p>
      <p>
        (3) Bei Zahlungsverzug ist der Anbieter berechtigt, die Leistung nach
        angemessener Fristsetzung einzustellen.
      </p>

      <h2>§ 5 Laufzeit und Kündigung</h2>
      <p>
        (1) Die Laufzeit richtet nach der jeweiligen Vereinbarung (z. B.
        monatlich kündbar mit der vereinbarten Frist).
      </p>
      <p>
        (2) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund
        bleibt unberührt.
      </p>

      <h2>§ 6 Pflichten des Kunden</h2>
      <p>
        Der Kunde stellt sicher, dass alle Daten wahrheitsgemäß angegeben
        werden und die Nutzung des Dienstes den geltenden Gesetzen entspricht.
        Der Kunde ist verpflichtet, Zugangsdaten geheim zu halten und den
        Anbieter bei Missbrauch unverzüglich zu informieren.
      </p>

      <h2>§ 7 Haftung</h2>
      <p>
        (1) Der Anbieter haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit
        sowie bei Verletzung von Leben, Körper oder Gesundheit.
      </p>
      <p>
        (2) Bei leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung
        wesentlicher Vertragspflichten; die Haftung ist auf den
        vertragstypischen, vorhersehbaren Schaden begrenzt.
      </p>
      <p>
        (3) Eine Haftung für entgangenen Gewinn oder mittelbare Schäden
        erfolgt nur im gesetzlich zulässigen Umfang.
      </p>

      <h2>§ 8 Datenschutz</h2>
      <p>
        Es gilt unsere{" "}
        <a href="/datenschutz">Datenschutzerklärung</a>. Der Kunde wird
        darauf hingewiesen, dass im Rahmen des Dienstes personenbezogene Daten
        von Endkunden verarbeitet werden können; hierfür ist der Kunde
        ggf. selbst datenschutzrechtlich verantwortlich (Auftragsverarbeitung
        kann gesondert vereinbart werden).
      </p>

      <h2>§ 9 Änderungen der AGB</h2>
      <p>
        Änderungen dieser AGB werden dem Kunden mitgeteilt. Widerspricht der
        Kunde nicht innerhalb von sechs Wochen, gelten die geänderten AGB als
        angenommen, sofern der Kunde auf die Folgen eines Widerspruchs
        hingewiesen wurde.
      </p>

      <h2>§ 10 Schlussbestimmungen</h2>
      <p>
        (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss
        des UN-Kaufrechts.
      </p>
      <p>
        (2) Gerichtsstand für Kaufleute ist – soweit zulässig – Berlin.
      </p>
      <p>
        (3) Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit
        der übrigen Regelungen unberührt.
      </p>

      <h2>Anbieter</h2>
      <p>
        Kundenbetreuung FK · Florian Kühnast
        <br />
        Katharinenstraße 19A, 10711 Berlin
        <br />
        E-Mail:{" "}
        <a href="mailto:hi@telefon-geselle.de">hi@telefon-geselle.de</a>
      </p>
    </LegalLayout>
  );
}
