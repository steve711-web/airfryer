"use client";

import { useMemo, useState } from "react";
import {
  convertOvenToAirFryer,
  convertAirFryerToOven,
  minutesToHM,
} from "@/lib/convert";

type Direction = "ovenToAirFryer" | "airFryerToOven";
type Unit = "F" | "C";

export default function ConverterWidget() {
  const [direction, setDirection] = useState<Direction>("ovenToAirFryer");
  const [unit, setUnit] = useState<Unit>("F");
  const [tempF, setTempF] = useState(350);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(30);

  const totalMinutes = hours * 60 + minutes;

  const result = useMemo(() => {
    if (direction === "ovenToAirFryer") {
      return convertOvenToAirFryer(tempF, totalMinutes);
    }
    const r = convertAirFryerToOven(tempF, totalMinutes);
    return {
      airFryerTempF: r.ovenTempF,
      airFryerTempC: r.ovenTempC,
      airFryerTimeMinutes: r.ovenTimeMinutes,
    };
  }, [direction, tempF, totalMinutes]);

  const resultHM = minutesToHM(result.airFryerTimeMinutes);
  const displayTemp = unit === "F" ? result.airFryerTempF : result.airFryerTempC;
  const inputLabel = direction === "ovenToAirFryer" ? "Conventional Oven" : "Air Fryer";
  const outputLabel = direction === "ovenToAirFryer" ? "Air Fryer" : "Conventional Oven";

  const displayInputTemp = unit === "F" ? tempF : Math.round(((tempF - 32) * 5) / 9);

  function handleTempChange(value: number) {
    if (unit === "F") {
      setTempF(value);
    } else {
      setTempF(Math.round((value * 9) / 5 + 32));
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border border-steel/30 bg-panel shadow-2xl">
      {/* toggle strip */}
      <div className="flex items-center justify-between gap-4 border-b border-steel/30 px-6 py-4">
        <button
          onClick={() =>
            setDirection((d) => (d === "ovenToAirFryer" ? "airFryerToOven" : "ovenToAirFryer"))
          }
          className="flex items-center gap-2 rounded-full border border-steel/40 bg-panelSoft px-4 py-2 font-body text-sm text-cream transition-colors hover:border-ember/60"
        >
          <span>{inputLabel}</span>
          <span className="text-ember">→</span>
          <span>{outputLabel}</span>
          <span className="ml-1 text-cream/40">⇄</span>
        </button>

        <div className="flex overflow-hidden rounded-full border border-steel/40 text-xs">
          <button
            onClick={() => setUnit("F")}
            className={`px-3 py-1.5 font-readout transition-colors ${
              unit === "F" ? "bg-ember text-panel" : "text-cream/60 hover:text-cream"
            }`}
          >
            °F
          </button>
          <button
            onClick={() => setUnit("C")}
            className={`px-3 py-1.5 font-readout transition-colors ${
              unit === "C" ? "bg-ember text-panel" : "text-cream/60 hover:text-cream"
            }`}
          >
            °C
          </button>
        </div>
      </div>

      <div className="grid gap-0 sm:grid-cols-2">
        {/* left: dial-style inputs */}
        <div className="space-y-8 border-b border-steel/30 p-6 sm:border-b-0 sm:border-r sm:p-8">
          <div>
            <label className="mb-3 block font-body text-xs uppercase tracking-wide text-cream/50">
              {inputLabel} temperature
            </label>
            <div className="mb-2 font-readout text-3xl text-cream">
              {displayInputTemp}
              <span className="text-cream/40">°{unit}</span>
            </div>
            <input
              type="range"
              min={unit === "F" ? 150 : 65}
              max={unit === "F" ? 500 : 260}
              step={5}
              value={displayInputTemp}
              onChange={(e) => handleTempChange(Number(e.target.value))}
              className="w-full accent-ember"
              aria-label={`${inputLabel} temperature`}
            />
          </div>

          <div>
            <label className="mb-3 block font-body text-xs uppercase tracking-wide text-cream/50">
              {inputLabel} time
            </label>
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  type="number"
                  min={0}
                  max={12}
                  value={hours}
                  onChange={(e) => setHours(Math.max(0, Number(e.target.value)))}
                  className="w-full rounded-md border border-steel/40 bg-panelSoft px-3 py-2 font-readout text-lg text-cream"
                  aria-label="Hours"
                />
                <span className="mt-1 block text-center text-xs text-cream/40">hours</span>
              </div>
              <div className="flex-1">
                <input
                  type="number"
                  min={0}
                  max={59}
                  value={minutes}
                  onChange={(e) => setMinutes(Math.min(59, Math.max(0, Number(e.target.value))))}
                  className="w-full rounded-md border border-steel/40 bg-panelSoft px-3 py-2 font-readout text-lg text-cream"
                  aria-label="Minutes"
                />
                <span className="mt-1 block text-center text-xs text-cream/40">minutes</span>
              </div>
            </div>
          </div>
        </div>

        {/* right: LED-style readout */}
        <div className="flex flex-col justify-center gap-6 bg-[#141814] p-6 sm:p-8">
          <div>
            <div className="font-body text-xs uppercase tracking-wide text-cream/40">
              Recommended {outputLabel.toLowerCase()} temp
            </div>
            <div className="readout-glow font-readout text-5xl font-bold text-ember">
              {displayTemp}
              <span className="text-3xl text-ember/70">°{unit}</span>
            </div>
          </div>
          <div>
            <div className="font-body text-xs uppercase tracking-wide text-cream/40">
              Recommended {outputLabel.toLowerCase()} time
            </div>
            <div className="readout-glow font-readout text-5xl font-bold text-ember">
              {resultHM.hours > 0 ? `${resultHM.hours}h ` : ""}
              {resultHM.minutes}
              <span className="text-3xl text-ember/70">min</span>
            </div>
          </div>
          <p className="font-body text-xs leading-relaxed text-cream/40">
            Rule of thumb: air fryers cook hotter and faster than conventional ovens because the
            fan circulates heat directly around the food. Drop the temperature roughly 25°F
            (about 15°C) and check for doneness a few minutes early — every model runs slightly
            differently.
          </p>
        </div>
      </div>
    </div>
  );
}
