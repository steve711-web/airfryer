import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import WattageCostWidget from "@/components/WattageCostWidget";

export const metadata: Metadata = {
  title: "Air Fryer Running Cost Calculator — Electricity Cost Per Use",
  description:
    "Work out exactly what your air fryer costs to run per use, per week, and per year based on its wattage and your electricity rate.",
};

const faqs = [
  {
    q: "How much electricity does an air fryer actually use?",
    a: "It depends on wattage and cook time, but most air fryers draw between 1,200 and 1,800 watts. A typical 20-minute cook in a 1,500W air fryer uses roughly 0.4-0.5 kWh — a few cents per use at average electricity rates, though it adds up over regular weekly use.",
  },
  {
    q: "Is an air fryer cheaper to run than a conventional oven?",
    a: "Usually yes. Ovens draw more power (often 2,000-5,000W) and take longer to preheat and cook, so the total energy used per meal is typically higher than an air fryer cooking the same food in less time at a similar or lower wattage.",
  },
  {
    q: "Where do I find my electricity rate per kWh?",
    a: "Check a recent electricity bill — it's usually listed as a rate per kWh (or per unit). If you can't find it, your utility provider's website or app typically has it, or you can search your provider's name plus \"rate per kWh\".",
  },
  {
    q: "Why does the calculator use less than the full wattage?",
    a: "Air fryers don't draw their full rated wattage for the entire cook time — they cycle on and off once they reach temperature, similar to an oven's thermostat. The calculator applies a realistic duty-cycle adjustment instead of assuming full power the whole time, which would overstate the actual cost.",
  },
];

export default function WattageCostPage() {
  return (
    <main className="min-h-screen bg-cream">
      <SiteHeader />

      <section className="mx-auto max-w-3xl px-6 pb-4 pt-14 text-center">
        <h1 className="font-display text-4xl font-medium tracking-tight text-panel sm:text-5xl">
          Air fryer running cost calculator
        </h1>
        <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-panel/70">
          Enter your air fryer's wattage, how long and how often you use it, and your electricity
          rate to see exactly what it costs to run — per use, per week, and per year.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <WattageCostWidget />
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="font-display text-2xl font-medium text-panel">
          How air fryer running costs are calculated
        </h2>
        <p className="mt-4 font-body leading-relaxed text-panel/80">
          The cost of running any appliance comes down to three numbers: how much power it draws
          (watts), how long it runs, and what you pay per unit of electricity (your rate per kWh).
          Multiplying wattage by hours used gives you watt-hours, which divided by 1,000 gives
          kilowatt-hours — the unit your electricity bill actually charges you for. The calculator
          above also accounts for the fact that air fryers cycle their heating element on and off
          rather than running at full power continuously, giving a more realistic cost than a
          simple wattage-times-time calculation.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <h2 className="font-display text-2xl font-medium text-panel">Common questions</h2>
        <div className="mt-6 divide-y divide-panel/10 border-t border-panel/10">
          {faqs.map((item) => (
            <div key={item.q} className="py-5">
              <h3 className="font-body text-base font-semibold text-panel">{item.q}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-panel/70">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
