import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Air Fryer Running Cost Calculator — Coming Soon",
  description: "Work out how much your air fryer costs to run based on its wattage and your electricity rate.",
};

export default function WattageCostPage() {
  return (
    <main className="min-h-screen bg-cream">
      <SiteHeader />
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-display text-3xl font-medium text-panel">
          Running cost calculator — coming soon
        </h1>
        <p className="mt-4 font-body text-panel/70">
          This tool will calculate your air fryer's running cost from its wattage, cook time, and
          your local electricity rate. In the meantime, try the{" "}
          <a href="/oven-to-air-fryer" className="text-ember underline">
            oven to air fryer converter
          </a>
          .
        </p>
      </section>
    </main>
  );
}
