import type { Metadata } from "next";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const readout = Space_Mono({
  subsets: ["latin"],
  variable: "--font-readout",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Air Fryer Convert — Oven, Wattage & Size Calculators",
  description:
    "Convert any oven recipe to air fryer settings instantly, check your air fryer's running cost, and find the right size for your household.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${readout.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
