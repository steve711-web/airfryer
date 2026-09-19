import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Air Fryer Size Calculator — Coming Soon",
  description: "Find the right air fryer capacity for your household size.",
};

export default function SizeCalculatorPage() {
  return (
    <main className="min-h-screen bg-cream">
      <SiteHeader />
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-display text-3xl font-medium text-panel">
          Size finder — coming soon
        </h1>
        <p className="mt-4 font-body text-panel/70">
          This tool will recommend an air fryer capacity based on household size and how you cook.
          It will link out to recommended models by size once the Amazon Associates tag is live.
          In the meantime, try the{" "}
          <a href="/oven-to-air-fryer" className="text-ember underline">
            oven to air fryer converter
          </a>
          .
        </p>
      </section>
    </main>
  );
}
