import type { Metadata } from "next";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
import Script from "next/script";
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
      <body className="font-body">
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y8CDPC024H"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y8CDPC024H');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Air Fryer Convert",
              url: "https://airfryerconvert.com",
              description:
                "Three air fryer calculators: an oven-to-air-fryer converter, a running cost calculator, and a size finder.",
              publisher: {
                "@type": "Organization",
                name: "Air Fryer Convert",
                url: "https://airfryerconvert.com",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
