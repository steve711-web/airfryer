import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SizeFinderWidget from "@/components/SizeFinderWidget";

export const metadata: Metadata = {
  title: "What Size Air Fryer Do I Need? — Air Fryer Size Calculator",
  description:
    "Find the right air fryer capacity for your household size and cooking style, in quarts and liters, with recommended models.",
};

const faqs = [
  {
    q: "What size air fryer do I need for a family of 4?",
    a: "For typical portions, a family of 4 usually needs a 5-6 quart air fryer. If you cook large portions, batch-cook, or meal-prep regularly, sizing up to 6-8 quarts avoids overcrowding the basket, which is the main cause of uneven, soggy results.",
  },
  {
    q: "Is it better to size up or down if I'm between two sizes?",
    a: "Size up. An air fryer that's slightly too large still cooks well with smaller batches — you just use less of the basket. One that's too small forces you to overcrowd food or cook in multiple batches, which takes longer and cooks less evenly.",
  },
  {
    q: "What's the difference between quarts and liters for air fryers?",
    a: "They're both measures of basket volume — 1 quart is about 0.95 liters. US listings almost always use quarts, UK and most other markets use liters, so the calculator shows both.",
  },
  {
    q: "Do bigger air fryers cost more to run?",
    a: "Larger air fryers do tend to have higher wattage, but they also often cook more food in one batch rather than requiring multiple cook cycles — so the actual cost per meal isn't necessarily higher. Use the running cost calculator to check a specific model's wattage.",
  },
];

export default function SizeCalculatorPage() {
  return (
    <main className="min-h-screen bg-cream">
      <SiteHeader />

      <section className="mx-auto max-w-3xl px-6 pb-4 pt-14 text-center">
        <h1 className="font-display text-4xl font-medium tracking-tight text-panel sm:text-5xl">
          What size air fryer do you need?
        </h1>
        <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-panel/70">
          Answer two questions about your household and cooking style to get a recommended
          capacity in quarts and liters — plus a link to see options that size.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <SizeFinderWidget />
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="font-display text-2xl font-medium text-panel">
          Why basket size matters more than people expect
        </h2>
        <p className="mt-4 font-body leading-relaxed text-panel/80">
          An air fryer cooks by circulating hot air around food, which only works properly when
          air can actually flow between pieces. An undersized basket forces food into a dense
          layer that steams instead of crisping, and often means splitting a meal into multiple
          batches — losing much of the time advantage air frying is supposed to offer. Sizing to
          household size and typical portion habits, rather than just picking the cheapest or
          smallest option, is what actually determines whether an air fryer gets used daily or
          ends up in a cupboard.
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
