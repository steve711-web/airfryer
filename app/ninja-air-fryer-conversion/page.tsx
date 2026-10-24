import type { Metadata } from "next";
import Link from "next/link";
import ConverterWidget from "@/components/ConverterWidget";
import TopAirFryers from "@/components/TopAirFryers";

export const metadata: Metadata = {
  title: "Ninja Air Fryer Conversion & Settings Guide — Every Model",
  description:
    "Convert any oven recipe to Ninja air fryer settings. Covers Ninja Air Fryer, Foodi, Dual/Double Stack, Crispi, Flip, Glass, and French Door models — temperature and time, free.",
};

const ninjaModels = [
  {
    name: "Ninja Air Fryer (single basket)",
    note: "The standard single-basket line. Use the Air Fry setting and apply the same conversion as any air fryer: oven temp minus 25°F, time cut by 20%.",
  },
  {
    name: "Ninja Foodi (multi-function)",
    note: "Has a dedicated Air Crisp function separate from pressure-cook and bake. Only the Air Crisp setting needs the oven-conversion math below — other functions follow Ninja's own cook charts.",
  },
  {
    name: "Ninja Dual / Double Stack",
    note: "Two independently controlled baskets or zones. Each zone converts the same way on its own — set both zones using the calculator if you're cooking two different foods at once.",
  },
  {
    name: "Ninja Crispi",
    note: "Ninja's compact countertop crisper. Smaller capacity means food cooks closer to the heating element, so start checking a few minutes before the converted time.",
  },
  {
    name: "Ninja Flip",
    note: "Flips between an air fryer basket and a flat grill/bake surface. Use the standard conversion for the basket (Air Fry) side.",
  },
  {
    name: "Ninja Glass Air Fryer",
    note: "Same internal air-frying mechanism as the standard line, in a glass-bodied basket. Conversion math is identical — the glass body doesn't change cook temperature or time.",
  },
  {
    name: "Ninja French Door Air Fryer",
    note: "Oven-style French-door design with an Air Fry setting. Larger cavity than a basket model, so food can sit further from the element — check doneness a little before the converted time.",
  },
  {
    name: "Ninja Toaster Oven Air Fryer",
    note: "Combines toaster-oven and air-fry functions. Use the Air Fry setting for the conversion below; toast and bake settings aren't affected.",
  },
];

const faqs = [
  {
    question: "What temperature do I use for a Ninja air fryer?",
    answer:
      "Take your oven recipe's temperature, subtract 25°F (about 15°C), and set the Ninja's Air Fry or Air Crisp function to that number. Use the calculator above to convert your exact recipe instantly.",
  },
  {
    question: "How do I convert oven recipes for a Ninja Foodi?",
    answer:
      "Only the Air Crisp function needs this conversion — lower the oven temperature by 25°F and cut the time by about 20%. Ninja's pressure-cook and bake functions on the Foodi use their own separate cook times, not oven conversions.",
  },
  {
    question: "Is a Ninja Crispi different from other Ninja air fryers to convert for?",
    answer:
      "The conversion math is the same, but because the Crispi is more compact, food sits closer to the heating element. Start checking for doneness a few minutes before the converted time lands, especially on thicker cuts.",
  },
  {
    question: "Do Ninja Dual and Double Stack models need different settings per zone?",
    answer:
      "Each zone heats independently, so convert each food's oven setting separately and enter it into its own zone — you can cook two different recipes at two different converted temperatures at the same time.",
  },
  {
    question: "Does a Ninja air fryer use more electricity than other brands?",
    answer:
      "Not meaningfully. Most Ninja air fryer models draw 1,400-1,800 watts, in line with other major brands. Use the running cost calculator to check your specific model's exact cost per use.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function NinjaAirFryerConversionPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 sm:py-16 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.25em] text-panel/40">Brand Guide</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-panel sm:text-4xl lg:text-5xl">
          Ninja Air Fryer Conversion &amp; Settings Guide
        </h1>
        <p className="mt-4 text-base leading-relaxed text-panel/60">
          Every Ninja air fryer model uses the same core conversion rule as any air fryer. Drag
          the dial below to your oven recipe&apos;s setting, then check the notes for your
          specific Ninja model underneath.
        </p>
      </header>

      <section className="mt-12">
        <ConverterWidget />
        <p className="mt-4 text-sm text-panel/50">
          Works for every Ninja model&apos;s Air Fry or Air Crisp setting. Need Fahrenheit or
          Celsius, or the full printable chart?{" "}
          <Link href="/oven-to-air-fryer" className="font-semibold text-signal hover:underline">
            Use the full oven-to-air-fryer converter →
          </Link>
        </p>
      </section>

      <section className="mt-20">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-panel">
          Settings by Ninja Model
        </h2>
        <p className="mt-2 max-w-xl text-sm text-panel/50">
          The conversion math is the same across the lineup — these notes cover what&apos;s
          different about each model&apos;s shape and timing.
        </p>
        <div className="mt-8 divide-y divide-panel/10 border-y border-panel/10">
          {ninjaModels.map((model) => (
            <div key={model.name} className="py-6">
              <h3 className="font-display text-lg font-semibold text-panel">{model.name}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-panel/60">{model.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 max-w-3xl">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-panel">
          Check running cost or find the right size
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-panel/60">
          Ninja air fryers typically draw 1,400-1,800 watts.{" "}
          <Link
            href="/air-fryer-wattage-cost"
            className="font-semibold text-signal hover:underline"
          >
            Calculate your exact running cost →
          </Link>{" "}
          or, if you&apos;re deciding between a single-basket, Dual, or Foodi model,{" "}
          <Link
            href="/air-fryer-size-calculator"
            className="font-semibold text-signal hover:underline"
          >
            find the right capacity for your household →
          </Link>
        </p>
      </section>

      <section className="mt-20">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-panel">
          Top 5 Air Fryers
        </h2>
        <p className="mt-2 max-w-xl text-sm text-panel/50">
          Picked from independent lab reviews, not sponsored placement — includes two Ninja
          models.
        </p>
        <div className="mt-8">
          <TopAirFryers />
        </div>
        <p className="mt-4 text-xs text-panel/30">
          As an Amazon Associate, this site may earn from qualifying purchases.
        </p>
      </section>

      <section className="mt-20 max-w-3xl">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-panel">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 divide-y divide-panel/10">
          {faqs.map((faq) => (
            <div key={faq.question} className="py-5">
              <h3 className="font-display text-base font-semibold text-panel">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-panel/60">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
