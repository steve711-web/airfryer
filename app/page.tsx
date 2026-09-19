import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

const tools = [
  {
    index: "01",
    href: "/oven-to-air-fryer",
    title: "Oven ↔ air fryer converter",
    desc: "Convert any conventional oven recipe to air fryer temperature and time — or go the other way.",
  },
  {
    index: "02",
    href: "/air-fryer-wattage-cost",
    title: "Running cost calculator",
    desc: "Enter your air fryer's wattage and your electricity rate to see what it actually costs to run.",
  },
  {
    index: "03",
    href: "/air-fryer-size-calculator",
    title: "Size finder",
    desc: "Answer a few questions about your household and get a recommended air fryer capacity.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <SiteHeader />

      {/* Asymmetric hero: headline left, readout panel right — not centered */}
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-16 sm:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-panel/15 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-ready" />
              <span className="font-readout text-[11px] uppercase tracking-widest text-panel/60">
                3 tools live
              </span>
            </div>
            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-panel sm:text-6xl lg:text-7xl">
              Air fryer math,
              <br />
              done for you.
            </h1>
            <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-panel/70">
              Convert oven recipes, check what your air fryer actually costs to run, and find the
              right size for your household. No blog post telling you to "just experiment."
            </p>
          </div>

          {/* Decorative readout panel — brings the appliance-display motif onto the homepage itself */}
          <div className="rounded-xl border border-panel/15 bg-panel p-8">
            <div className="font-readout text-7xl font-bold leading-none text-ember readout-glow sm:text-8xl">
              03
            </div>
            <div className="mt-3 font-body text-xs uppercase tracking-widest text-cream/40">
              Calculators · Zero guesswork
            </div>
          </div>
        </div>
      </section>

      {/* Tool panel: numbered switch-plate rows instead of even generic cards */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="divide-y divide-panel/10 border-y border-panel/10">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group grid items-center gap-4 py-8 transition-colors hover:bg-panel/[0.03] sm:grid-cols-[auto_1fr_auto] sm:gap-8 sm:px-2"
            >
              <span className="font-readout text-sm text-panel/30">{tool.index}</span>
              <div>
                <h2 className="font-display text-2xl font-medium text-panel group-hover:text-ember sm:text-3xl">
                  {tool.title}
                </h2>
                <p className="mt-2 max-w-xl font-body text-base leading-relaxed text-panel/60">
                  {tool.desc}
                </p>
              </div>
              <div className="flex items-center gap-3 sm:justify-end">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-ready/10 px-2.5 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-ready" />
                  <span className="font-readout text-[10px] uppercase tracking-widest text-ready">
                    Live
                  </span>
                </span>
                <span className="font-display text-2xl text-panel/20 transition-transform group-hover:translate-x-1 group-hover:text-ember">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
