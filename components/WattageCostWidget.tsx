"use client";

import { useMemo, useState } from "react";
import { calculateRunningCost } from "@/lib/convert";

const COMMON_WATTAGES = [
  { label: "Compact (2-3 qt)", watts: 1200 },
  { label: "Standard (4-6 qt)", watts: 1500 },
  { label: "Large (7-10 qt)", watts: 1700 },
  { label: "XL / oven-style (10+ qt)", watts: 1800 },
];

export default function WattageCostWidget() {
  const [watts, setWatts] = useState(1500);
  const [minutesPerUse, setMinutesPerUse] = useState(20);
  const [usesPerWeek, setUsesPerWeek] = useState(5);
  const [rate, setRate] = useState(0.15);

  const result = useMemo(
    () => calculateRunningCost(watts, minutesPerUse, usesPerWeek, rate),
    [watts, minutesPerUse, usesPerWeek, rate]
  );

  return (
    <div className="overflow-hidden rounded-xl border border-steel/30 bg-panel shadow-2xl">
      <div className="border-b border-steel/30 px-6 py-4">
        <div className="flex flex-wrap gap-2">
          {COMMON_WATTAGES.map((w) => (
            <button
              key={w.label}
              onClick={() => setWatts(w.watts)}
              className={`rounded-full border px-3 py-1.5 font-body text-xs transition-colors ${
                watts === w.watts
                  ? "border-signal bg-signal text-panel"
                  : "border-steel/40 text-cream/60 hover:border-signal/60 hover:text-cream"
              }`}
            >
              {w.label} · {w.watts}W
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-0 sm:grid-cols-2">
        {/* left: inputs */}
        <div className="space-y-6 border-b border-steel/30 p-6 sm:border-b-0 sm:border-r sm:p-8">
          <div>
            <label className="mb-2 block font-body text-xs uppercase tracking-wide text-cream/50">
              Wattage
            </label>
            <div className="mb-1 font-readout text-2xl text-cream">
              {watts}
              <span className="text-cream/40"> W</span>
            </div>
            <input
              type="range"
              min={800}
              max={2200}
              step={50}
              value={watts}
              onChange={(e) => setWatts(Number(e.target.value))}
              className="w-full accent-signal"
              aria-label="Wattage"
            />
          </div>

          <div>
            <label className="mb-2 block font-body text-xs uppercase tracking-wide text-cream/50">
              Minutes per use
            </label>
            <div className="mb-1 font-readout text-2xl text-cream">{minutesPerUse} min</div>
            <input
              type="range"
              min={5}
              max={60}
              step={1}
              value={minutesPerUse}
              onChange={(e) => setMinutesPerUse(Number(e.target.value))}
              className="w-full accent-signal"
              aria-label="Minutes per use"
            />
          </div>

          <div>
            <label className="mb-2 block font-body text-xs uppercase tracking-wide text-cream/50">
              Uses per week
            </label>
            <div className="mb-1 font-readout text-2xl text-cream">{usesPerWeek}</div>
            <input
              type="range"
              min={1}
              max={21}
              step={1}
              value={usesPerWeek}
              onChange={(e) => setUsesPerWeek(Number(e.target.value))}
              className="w-full accent-signal"
              aria-label="Uses per week"
            />
          </div>

          <div>
            <label className="mb-2 block font-body text-xs uppercase tracking-wide text-cream/50">
              Electricity rate
            </label>
            <div className="flex items-center gap-2">
              <span className="font-readout text-lg text-cream/60">$</span>
              <input
                type="number"
                min={0}
                step={0.01}
                value={rate}
                onChange={(e) => setRate(Math.max(0, Number(e.target.value)))}
                className="w-28 rounded-md border border-steel/40 bg-panelSoft px-3 py-2 font-readout text-lg text-cream"
                aria-label="Electricity rate per kWh"
              />
              <span className="font-body text-sm text-cream/40">per kWh</span>
            </div>
          </div>
        </div>

        {/* right: LED readout */}
        <div className="flex flex-col justify-center gap-5 bg-[#141814] p-6 sm:p-8">
          <div>
            <div className="font-body text-xs uppercase tracking-wide text-cream/40">
              Cost per use
            </div>
            <div className="readout-glow font-readout text-4xl font-bold text-signal">
              ${result.costPerUse.toFixed(2)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="font-body text-xs uppercase tracking-wide text-cream/40">
                Per week
              </div>
              <div className="readout-glow font-readout text-2xl font-bold text-signal">
                ${result.costPerWeek.toFixed(2)}
              </div>
            </div>
            <div>
              <div className="font-body text-xs uppercase tracking-wide text-cream/40">
                Per month
              </div>
              <div className="readout-glow font-readout text-2xl font-bold text-signal">
                ${result.costPerMonth.toFixed(2)}
              </div>
            </div>
          </div>
          <div>
            <div className="font-body text-xs uppercase tracking-wide text-cream/40">
              Per year
            </div>
            <div className="readout-glow font-readout text-3xl font-bold text-signal">
              ${result.costPerYear.toFixed(2)}
            </div>
          </div>
          <p className="font-body text-xs leading-relaxed text-cream/40">
            Based on {result.kwhPerUse} kWh per use, factoring in that air fryers cycle on and off
            rather than drawing full power the entire time. Check your utility bill for your exact
            rate per kWh.
          </p>
        </div>
      </div>
    </div>
  );
}
