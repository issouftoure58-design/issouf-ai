import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Issouf.ai — Expert IA Conversationnelle | Assistants Telephone, WhatsApp & Chat",
  description:
    "Je deploie des assistants IA (telephone, WhatsApp, chat) qui remplacent un standardiste 24/7 — avec le dashboard et l'integration sur-mesure. Demo live disponible.",
  keywords: [
    "IA conversationnelle",
    "assistant telephone IA",
    "chatbot WhatsApp",
    "OpenAI Realtime API",
    "Twilio",
    "developpeur IA freelance",
  ],
  openGraph: {
    title: "Issouf.ai — Expert IA Conversationnelle",
    description:
      "Assistants IA telephone, WhatsApp & chat en production. Demo live : appelez pour parler avec l'IA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-inter)] grain`}
      >
        {children}
      </body>
    </html>
  );
}
