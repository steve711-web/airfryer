import type { Metadata } from "next";
import ConverterWidget from "@/components/ConverterWidget";
import FoodQuickReference from "@/components/FoodQuickReference";
import ConversionChartTable from "@/components/ConversionChartTable";
import TopAirFryers from "@/components/TopAirFryers";

export const metadata: Metadata = {
  title: "Oven to Air Fryer Conversion Calculator | Free Temp & Time Chart",
  description:
    "Free oven to air fryer conversion calculator. Convert any oven recipe to air fryer temperature and time instantly, in °F or °C, plus a printable chart and Ninja air fryer settings.",
};

const faqs = [
  {
    question: "What does 375°F in an oven equate to in an air fryer?",
    answer:
      "375°F in a conventional oven converts to roughly 350°F in an air fryer, with cooking time reduced by about 20%. Use the calculator above for an exact figure based on your specific time as well.",
  },
  {
    question: "How do I convert oven temperature to air fryer temperature in Celsius?",
    answer:
      "The same rule applies in Celsius: lower the oven temperature by about 15°C and cut the cooking time by roughly 20%. Switch the calculator above to °C to see exact converted figures without doing the math yourself.",
  },
  {
    question: "Is this oven to air fryer conversion calculator free to use?",
    answer:
      "Yes, the calculator, the food quick-reference guide, and the printable conversion chart on this page are all free with no sign-up required.",
  },
  {
    question: "How do I convert oven settings for a Ninja air fryer?",
    answer:
      "Ninja Foodi and Ninja air fryer ovens with a dedicated Air Fry or Air Crisp setting use the same conversion as any other air fryer: lower the temperature by 25°F (about 15°C) and cut the time by 20%, then check a few minutes early since Ninja models tend to cook slightly faster.",
  },
  {
    question: "Is there a printable oven to air fryer conversion chart?",
    answer:
      "Yes — a free printable PDF chart covering common oven temperatures from 300°F to 450°F, in both Fahrenheit and Celsius, is available to download below the calculator.",
  },
  {
    question: "Does an air fryer cook faster than a conventional oven?",
    answer:
      "Yes. Air fryers circulate hot air directly around food in a small chamber, so they preheat faster and cook faster than a conventional oven, typically saving 20-30% on cooking time for the same result.",
  },
  {
    question: "How much should I reduce cooking time for an air fryer?",
    answer:
      "As a general rule, reduce cooking time by about 20% compared to a conventional oven recipe. Start checking for doneness a few minutes before the converted time, since actual results vary by air fryer wattage and basket size.",
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

export default function OvenToAirFryerPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 sm:py-16 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.25em] text-panel/40">Conversion Engine</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-panel sm:text-4xl lg:text-5xl">
          Oven to Air Fryer Converter
        </h1>
        <p className="mt-4 text-base leading-relaxed text-panel/60">
          Drag the dial to your oven setting and the panel on the right updates instantly with
          the matching air fryer temperature and time.
        </p>
      </header>

      <section className="mt-12">
        <ConverterWidget />
      </section>

      <section className="mt-20">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-panel">
          Quick Reference: Common Foods
        </h2>
        <p className="mt-2 max-w-xl text-sm text-panel/50">
          Tap any item to open its exact settings and a tip for getting it right the first time.
        </p>
        <div className="mt-8">
          <FoodQuickReference />
        </div>
      </section>

      <section className="mt-20">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-panel">
          Free Oven to Air Fryer Conversion Chart
        </h2>
        <p className="mt-2 max-w-xl text-sm text-panel/50">
          A quick-glance chart for common oven temperatures, in both Fahrenheit and Celsius.
        </p>
        <div className="mt-6">
          <ConversionChartTable />
        </div>
        <a
          href="/oven-to-air-fryer-conversion-chart.pdf"
          download
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-signal hover:underline"
        >
          Download the free printable chart (PDF) →
        </a>
      </section>

      <section className="mt-20">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-panel">
          Top 5 Air Fryers
        </h2>
        <p className="mt-2 max-w-xl text-sm text-panel/50">
          Picked from independent lab reviews, not sponsored placement — covers a range of
          budgets and household sizes.
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
