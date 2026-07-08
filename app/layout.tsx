import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import DeryaNavbar from "@/components/DeryaNavbar";
import DeryaFooter from "@/components/DeryaFooter";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Praxis Derya – Hausarztpraxis für Allgemeinmedizin in Köln",
  description:
    "Praxis Derya in Köln: hausärztliche Versorgung, Vorsorge, Impfungen, Diagnostik und individuelle Gesundheitsleistungen für die ganze Familie – Karolingerring 18, 50678 Köln.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${lora.variable} ${sourceSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LenisProvider>
          <DeryaNavbar />
          <main className="flex-1">{children}</main>
          <DeryaFooter />
        </LenisProvider>
      </body>
    </html>
  );
}
