import Link from "next/link";
import { navLinks } from "@/lib/nav";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-panel/10 bg-panel text-cream/60">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-baseline gap-2">
              <span className="font-display text-lg font-semibold tracking-[-0.02em] text-cream">
                AirFryer
              </span>
              <span className="font-display text-lg font-semibold tracking-[-0.02em] text-signal">
                Convert
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/40">
              Free tools for converting oven recipes to air fryer settings, estimating running
              cost, and finding the right air fryer size for your household.
            </p>
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-cream/30">Tools</span>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-cream/60 hover:text-cream">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/" className="text-sm text-cream/60 hover:text-cream">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-cream/30">
              Good To Know
            </span>
            <p className="mt-4 text-sm leading-relaxed text-cream/40">
              Conversion figures are estimates based on common air fryer behavior. Actual results
              vary by appliance wattage, basket size, and food density — always check for
              doneness before serving.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-cream/40">
              As an Amazon Associate, this site may earn from qualifying purchases made through
              product links, at no extra cost to you.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/30 md:flex-row md:items-center md:justify-between">
          <span>© {year} AirFryerConvert.com. All rights reserved.</span>
          <span>Not affiliated with any air fryer manufacturer.</span>
        </div>
      </div>
    </footer>
  );
}
