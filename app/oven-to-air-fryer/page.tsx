import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import ConverterWidget from "@/components/ConverterWidget";

export const metadata: Metadata = {
  title: "Air Fryer Converter — Oven to Air Fryer Temperature & Time",
  description:
    "Convert any conventional oven recipe to air fryer settings, or go the other way from air fryer back to oven. Instant temperature and time conversion.",
};

const faqs = [
  {
    q: "How do I convert oven temperature to air fryer temperature?",
    a: "Drop the oven temperature by about 25°F (roughly 15°C) and reduce the cook time by around 20%. Air fryers are smaller and circulate hot air directly around the food, so they cook faster and more evenly than a conventional oven at the same setting.",
  },
  {
    q: "Can I convert an air fryer recipe back to a regular oven?",
    a: "Yes — use the swap button above to flip the direction. Add roughly 25°F (about 15°C) to the air fryer temperature and increase the time by about 20% to get a comparable conventional oven setting.",
  },
  {
    q: "Does this work the same in the UK (Celsius, fan ovens)?",
    a: "Switch the unit toggle to °C. If your oven is a fan/convection oven rather than conventional, it already behaves closer to an air fryer, so you may only need a small temperature drop rather than the full adjustment.",
  },
  {
    q: "Why does my food still need more or less time than the calculator says?",
    a: "Air fryer baskets vary by brand and size, and how full you pack the basket changes airflow. Treat the result as a starting point and check a few minutes before the suggested time, especially the first time you cook a new recipe in your specific model.",
  },
];

export default function OvenToAirFryerPage() {
  return (
    <main className="min-h-screen bg-cream">
      <SiteHeader />

      <section className="mx-auto max-w-3xl px-6 pb-4 pt-14 text-center">
        <h1 className="font-display text-5xl font-medium tracking-tight text-panel sm:text-6xl">
          Oven to air fryer converter
        </h1>
        <p className="mx-auto mt-4 max-w-xl font-body text-lg leading-relaxed text-panel/70">
          Enter your conventional oven temperature and time, and get the equivalent air fryer
          setting instantly. Works in reverse too — flip the switch to convert an air fryer
          recipe back to a regular oven.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <ConverterWidget />
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="font-display text-3xl font-medium text-panel">
          Why air fryer settings are different from oven settings
        </h2>
        <p className="mt-4 font-body leading-relaxed text-panel/80">
          An air fryer is a compact convection oven with a much smaller cooking chamber and a
          more powerful fan. That combination means hot air reaches the food faster and from
          more directions than in a full-size oven, so the same temperature cooks food quicker.
          Manufacturers generally recommend lowering the temperature by around 25°F and cutting
          the time by roughly a fifth when adapting a conventional recipe — the calculator above
          applies that adjustment automatically so you don't have to do the math by hand.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <h2 className="font-display text-3xl font-medium text-panel">Common questions</h2>
        <div className="mt-6 divide-y divide-panel/10 border-t border-panel/10">
          {faqs.map((item) => (
            <div key={item.q} className="py-5">
              <h3 className="font-body text-lg font-semibold text-panel">{item.q}</h3>
              <p className="mt-2 font-body text-base leading-relaxed text-panel/70">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
