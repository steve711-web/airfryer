"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/nav";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-panel/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-semibold tracking-[-0.02em] text-panel">
            AirFryer
          </span>
          <span className="font-display text-xl font-semibold tracking-[-0.02em] text-signal">
            Convert
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-panel/10 bg-panel/[0.03] p-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium tracking-tight transition-colors ${
                  active ? "bg-panel text-cream" : "text-panel/60 hover:text-panel"
                }`}
              >
                {link.short}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/oven-to-air-fryer"
          className="rounded-full bg-signal px-4 py-2 text-sm font-semibold text-cream md:hidden"
        >
          Convert
        </Link>
      </div>

      <nav className="flex gap-4 overflow-x-auto border-t border-panel/10 px-6 py-2 md:hidden">
        {navLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap text-sm font-medium ${
                active ? "text-signal" : "text-panel/50"
              }`}
            >
              {link.short}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
