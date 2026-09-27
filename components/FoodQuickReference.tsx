"use client";

import { useState } from "react";
import { quickRefFoods } from "@/lib/foods";

const OFFSETS = ["lg:mt-0", "lg:mt-10", "lg:mt-4", "lg:mt-14"];

export default function FoodQuickReference() {
  const [openId, setOpenId] = useState<string | null>(quickRefFoods[0]?.id ?? null);

  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
      {quickRefFoods.map((food, index) => {
        const isOpen = openId === food.id;
        const offset = OFFSETS[index % OFFSETS.length];
        return (
          <div
            key={food.id}
            className={`mb-5 break-inside-avoid ${offset}`}
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : food.id)}
              className="w-full text-left"
            >
              <div
                className={`relative overflow-hidden rounded-2xl border bg-[linear-gradient(160deg,#1b2027_0%,#12151a_100%)] px-6 py-5 transition-all duration-300 ${
                  isOpen
                    ? "border-brass/60 shadow-[0_16px_34px_-18px_rgba(185,146,79,0.55)]"
                    : "border-steel/40 hover:border-signal/40"
                }`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/60 to-transparent"
                />
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-[-0.01em] text-cream">
                      {food.name}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cream/40">
                      {food.tempF}°F · {food.timeMinutes} min
                    </p>
                  </div>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-steel/50 text-cream/60 transition-transform duration-300 ${
                      isOpen ? "rotate-45 border-brass/60 text-brass" : ""
                    }`}
                  >
                    +
                  </span>
                </div>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-steel/30 pt-3 text-sm leading-relaxed text-cream/50">
                      {food.note}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}
