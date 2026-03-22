import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Telefon-Geselle | KI-Telefonservice für Klempner, Sanitär & Handwerk",
  description:
    "Verpassen Sie nie wieder einen Kundenanruf. Der Telefon-Geselle nimmt Anrufe an, qualifiziert Aufträge und bucht Termine – 24/7. Spezialisiert auf Klempner & Sanitär, gemacht fürs Handwerk.",
  keywords: [
    "Klempner Telefonservice",
    "Sanitär Anrufbeantworter",
    "Handwerker Telefonservice",
    "Telefon-Geselle",
    "Klempner Berlin",
    "Sanitär Notdienst",
    "verpasste Anrufe Handwerker",
    "Rohrbruch Notdienst",
    "KI Telefonservice Handwerk",
    "Handwerker verpasste Anrufe Berlin",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
