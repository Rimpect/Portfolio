import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  // только домен: подпапку /Portfolio к путям ассетов добавит basePath
  metadataBase: new URL("https://rimpect.github.io/"),

  title: "Максим Воронов — Frontend-разработчик",
  description:
    "Резюме frontend-разработчика: React, TypeScript, вёрстка, доступность.",

  openGraph: {
    title: "Максим Воронов — Frontend-разработчик",
    description:
      "Резюме frontend-разработчика: React, TypeScript, вёрстка, доступность.",
    url: "https://rimpect.github.io/Portfolio/",
    siteName: "Portfolio",
    locale: "ru_RU",
    type: "website",
  },

  authors: [{ name: "Максим Воронов" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
