import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "L'ATELIER & TABLE — Modern Culinary Atelier & Handcrafted Recipes",
  description:
    "An Awwwards-level culinary experience and artisanal recipe collection. Cook something unforgettable with Michelin-inspired techniques, curated ingredients, and slow dining culture.",
  keywords: [
    "culinary atelier",
    "michelin recipes",
    "gourmet cooking",
    "artisanal dining",
    "editorial recipes",
    "modern gastronomy",
  ],
  openGraph: {
    title: "L'ATELIER & TABLE — Modern Culinary Atelier & Recipes",
    description: "Cook something unforgettable. An immersive culinary journey.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FDFBF7] text-[#17120F] selection:bg-[#EA580C] selection:text-[#FFF7ED]">
        {children}
      </body>
    </html>
  );
}
