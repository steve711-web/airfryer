"use client";

import { useMemo, useState } from "react";
import { recommendAirFryerSize, type CookingStyle } from "@/lib/convert";

const STYLES: { value: CookingStyle; label: string; desc: string }[] = [
  { value: "light", label: "Light", desc: "Snacks, sides, small portions" },
  { value: "typical", label: "Typical", desc: "Regular main meals" },
  { value: "heavy", label: "Heavy", desc: "Big portions, meal-prep, batch cooking" },
];

export default function SizeFinderWidget() {
  const [householdSize, setHouseholdSize] = useState(3);
  const [style, setStyle] = useState<CookingStyle>("typical");

  const result = useMemo(
    () => recommendAirFryerSize(householdSize, style),
    [householdSize, style]
  );

  // Plain (untagged) Amazon link for now — no Associates ID yet, so no
  // compensation and no FTC disclosure needed. Once approved, append
  // "&tag=YOURTAG-20" to this URL and add an affiliate disclosure line
  // near the link (required once compensation exists).
  const amazonSearchUrl = `https://www.amazon.com/s?k=${result.recommendedQuarts}+quart+air+fryer`;

  return (
    <div className="overflow-hidden rounded-xl border border-steel/30 bg-panel shadow-2xl">
      <div className="grid gap-0 sm:grid-cols-2">
        {/* left: inputs */}
        <div className="space-y-8 border-b border-steel/30 p-6 sm:border-b-0 sm:border-r sm:p-8">
          <div>
            <label className="mb-3 block font-body text-xs uppercase tracking-wide text-cream/50">
              Household size
            </label>
            <div className="mb-2 font-readout text-3xl text-cream">
              {householdSize} <span className="text-cream/40 text-lg">people</span>
            </div>
            <input
              type="range"
              min={1}
              max={8}
              step={1}
              value={householdSize}
              onChange={(e) => setHouseholdSize(Number(e.target.value))}
              className="w-full accent-ember"
              aria-label="Household size"
            />
          </div>

          <div>
            <label className="mb-3 block font-body text-xs uppercase tracking-wide text-cream/50">
              Cooking style
            </label>
            <div className="space-y-2">
              {STYLES.map((s) => (
                <button
                  key={s.value}
                  onClick={() => setStyle(s.value)}
                  className={`w-full rounded-md border px-4 py-3 text-left transition-colors ${
                    style === s.value
                      ? "border-ember bg-panelSoft"
                      : "border-steel/40 hover:border-ember/50"
                  }`}
                >
                  <div className="font-body text-sm font-semibold text-cream">{s.label}</div>
                  <div className="font-body text-xs text-cream/50">{s.desc}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* right: LED readout + Amazon link */}
        <div className="flex flex-col justify-center gap-6 bg-[#141814] p-6 sm:p-8">
          <div>
            <div className="font-body text-xs uppercase tracking-wide text-cream/40">
              Recommended capacity
            </div>
            <div className="readout-glow font-readout text-5xl font-bold text-ember">
              {result.recommendedQuarts}
              <span className="text-2xl text-ember/70"> qt</span>
            </div>
            <div className="font-readout text-lg text-cream/50">
              ({result.recommendedLiters} L)
            </div>
          </div>

          <a
            href={amazonSearchUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-ready px-5 py-3 font-body text-sm font-semibold text-panel transition-opacity hover:opacity-90"
          >
            See {result.recommendedQuarts}-quart air fryers on Amazon →
          </a>

          <p className="font-body text-xs leading-relaxed text-cream/40">
            Based on roughly {result.rawQuarts} qt of raw capacity for your household and cooking
            style, rounded up to the nearest common retail size. Larger baskets cook more evenly
            when not overcrowded, so it's usually better to round up than down.
          </p>
        </div>
      </div>
    </div>
  );
}
