import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

const tools = [
  {
    href: "/oven-to-air-fryer",
    title: "Oven ↔ air fryer converter",
    status: "live",
    desc: "Convert any conventional oven recipe to air fryer temperature and time — or go the other way.",
  },
  {
    href: "/air-fryer-wattage-cost",
    title: "Running cost calculator",
    status: "coming soon",
    desc: "Enter your air fryer's wattage and your electricity rate to see what it actually costs to run.",
  },
  {
    href: "/air-fryer-size-calculator",
    title: "Size finder",
    status: "coming soon",
    desc: "Answer a few questions about your household and get a recommended air fryer capacity.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <SiteHeader />

      <section className="mx-auto max-w-3xl px-6 pb-10 pt-16 text-center">
        <h1 className="font-display text-4xl font-medium tracking-tight text-panel sm:text-5xl">
          Three air fryer calculators.
          <br />
          One place, no guesswork.
        </h1>
        <p className="mx-auto mt-5 max-w-xl font-body text-base leading-relaxed text-panel/70">
          Convert oven recipes, check what your air fryer actually costs to run, and find the
          right size for your household — each one an instant, working calculator, not another
          blog post telling you to "just experiment."
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="grid gap-4 sm:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex flex-col justify-between rounded-xl border border-panel/15 bg-panel p-5 transition-colors hover:border-ember/60"
            >
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className={`rounded-full px-2 py-0.5 font-body text-[10px] uppercase tracking-wide ${
                      tool.status === "live"
                        ? "bg-ready/20 text-ready"
                        : "bg-cream/10 text-cream/50"
                    }`}
                  >
                    {tool.status}
                  </span>
                </div>
                <h2 className="font-display text-lg font-medium text-cream group-hover:text-ember">
                  {tool.title}
                </h2>
                <p className="mt-2 font-body text-sm leading-relaxed text-cream/60">
                  {tool.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
