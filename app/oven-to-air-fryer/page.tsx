import ConverterWidget from "@/components/ConverterWidget";
import FoodQuickReference from "@/components/FoodQuickReference";

export default function OvenToAirFryerPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.25em] text-panel/40">Conversion Engine</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-[-0.02em] text-panel lg:text-5xl">
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
    </main>
  );
}
