import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leonidas Peligrineli - Senior Frontend Developer",
  description: "Pagina de portfolio e blog de Leonidas Peligrineli",
  openGraph: {
    title: "Leonidas Peligrineli - Senior Frontend Developer",
    description: "Pagina de portfolio e blog de Leonidas Peligrineli",
    url: "https://leopeli.dev",
    siteName: "Leonidas Peligrineli",
    images: [
      {
        url: "/images/imagem-og.png",
        width: 1200,
        height: 630,
        alt: "Leonidas Peligrineli - Senior Frontend Developer",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
