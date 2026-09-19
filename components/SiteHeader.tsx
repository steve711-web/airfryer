import Link from "next/link";

const tools = [
  { href: "/oven-to-air-fryer", label: "Oven Converter" },
  { href: "/air-fryer-wattage-cost", label: "Running Cost" },
  { href: "/air-fryer-size-calculator", label: "Size Finder" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-steel/20 bg-panel">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-display text-lg font-medium tracking-tight text-cream">
          airfryerconvert<span className="text-ember">.com</span>
        </Link>
        <nav className="hidden gap-6 sm:flex">
          {tools.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="font-body text-sm text-cream/70 transition-colors hover:text-ember"
            >
              {t.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
