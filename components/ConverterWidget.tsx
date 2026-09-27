"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { convertAirFryerToOven, convertOvenToAirFryer, fToC } from "@/lib/convert";

type Direction = "ovenToAir" | "airToOven";
type Unit = "F" | "C";

const TEMP_MIN = 200;
const TEMP_MAX = 500;
const TIME_MIN = 5;
const TIME_MAX = 90;

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function angleFromValue(value: number): number {
  const ratio = (value - TEMP_MIN) / (TEMP_MAX - TEMP_MIN);
  return -135 + ratio * 270;
}

function valueFromAngle(angle: number): number {
  const normalized = clamp(angle, -135, 135);
  const ratio = (normalized + 135) / 270;
  return Math.round(TEMP_MIN + ratio * (TEMP_MAX - TEMP_MIN));
}

export default function ConverterWidget() {
  const [direction, setDirection] = useState<Direction>("ovenToAir");
  const [unit, setUnit] = useState<Unit>("F");
  const [tempF, setTempF] = useState(375);
  const [timeMinutes, setTimeMinutes] = useState(25);

  const dialRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const draggingDial = useRef(false);
  const draggingTrack = useRef(false);

  const result = useMemo(() => {
    const raw =
      direction === "ovenToAir"
        ? convertOvenToAirFryer(tempF, timeMinutes)
        : convertAirFryerToOven(tempF, timeMinutes);
    return "airFryerTempF" in raw
      ? {
          temperatureF: raw.airFryerTempF,
          temperatureC: raw.airFryerTempC,
          timeMinutes: raw.airFryerTimeMinutes,
        }
      : {
          temperatureF: raw.ovenTempF,
          temperatureC: raw.ovenTempC,
          timeMinutes: raw.ovenTimeMinutes,
        };
  }, [direction, tempF, timeMinutes]);

  const displayInputTemp = unit === "F" ? tempF : Math.round(fToC(tempF));

  const updateDialFromPointer = useCallback((clientX: number, clientY: number) => {
    const el = dialRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;
    const rad = Math.atan2(dx, -dy);
    const deg = (rad * 180) / Math.PI;
    setTempF(valueFromAngle(deg));
  }, []);

  const updateTrackFromPointer = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = clamp((clientX - rect.left) / rect.width, 0, 1);
    setTimeMinutes(Math.round(TIME_MIN + ratio * (TIME_MAX - TIME_MIN)));
  }, []);

  const dialPointerDown = (e: React.PointerEvent) => {
    draggingDial.current = true;
    (e.target as Element).setPointerCapture(e.pointerId);
    updateDialFromPointer(e.clientX, e.clientY);
  };
  const dialPointerMove = (e: React.PointerEvent) => {
    if (!draggingDial.current) return;
    updateDialFromPointer(e.clientX, e.clientY);
  };
  const dialPointerUp = () => {
    draggingDial.current = false;
  };

  const trackPointerDown = (e: React.PointerEvent) => {
    draggingTrack.current = true;
    (e.target as Element).setPointerCapture(e.pointerId);
    updateTrackFromPointer(e.clientX);
  };
  const trackPointerMove = (e: React.PointerEvent) => {
    if (!draggingTrack.current) return;
    updateTrackFromPointer(e.clientX);
  };
  const trackPointerUp = () => {
    draggingTrack.current = false;
  };

  const dialAngle = angleFromValue(tempF);
  const trackRatio = (timeMinutes - TIME_MIN) / (TIME_MAX - TIME_MIN);

  const resultTempPrimary = unit === "F" ? result.temperatureF : result.temperatureC;
  const resultTempUnit = unit === "F" ? "°F" : "°C";

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
      <div className="rounded-[28px] border border-steel/40 bg-panelSoft/60 p-7 lg:p-9">
        <div className="flex items-center justify-between gap-4">
          <div className="flex rounded-full border border-steel/50 bg-panel/60 p-1">
            <button
              type="button"
              onClick={() => setDirection("ovenToAir")}
              className={`rounded-full px-4 py-1.5 text-sm font-medium tracking-tight transition-colors ${
                direction === "ovenToAir" ? "bg-signal text-panel" : "text-cream/60"
              }`}
            >
              Oven → Air Fryer
            </button>
            <button
              type="button"
              onClick={() => setDirection("airToOven")}
              className={`rounded-full px-4 py-1.5 text-sm font-medium tracking-tight transition-colors ${
                direction === "airToOven" ? "bg-signal text-panel" : "text-cream/60"
              }`}
            >
              Air Fryer → Oven
            </button>
          </div>
          <div className="flex overflow-hidden rounded-full border border-steel/50">
            <button
              type="button"
              onClick={() => setUnit("F")}
              className={`px-3 py-1.5 text-xs font-semibold ${
                unit === "F" ? "bg-brass text-panel" : "bg-transparent text-cream/60"
              }`}
            >
              °F
            </button>
            <button
              type="button"
              onClick={() => setUnit("C")}
              className={`px-3 py-1.5 text-xs font-semibold ${
                unit === "C" ? "bg-brass text-panel" : "bg-transparent text-cream/60"
              }`}
            >
              °C
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center">
          <div
            ref={dialRef}
            onPointerDown={dialPointerDown}
            onPointerMove={dialPointerMove}
            onPointerUp={dialPointerUp}
            onPointerLeave={dialPointerUp}
            className="relative h-56 w-56 cursor-grab touch-none select-none rounded-full bg-[radial-gradient(circle_at_30%_30%,#2c333d,#11151b)] shadow-[inset_0_2px_10px_rgba(0,0,0,0.6),0_18px_30px_-14px_rgba(0,0,0,0.8)] active:cursor-grabbing"
          >
            <svg viewBox="0 0 240 240" className="absolute inset-0 h-full w-full">
              <circle
                cx="120"
                cy="120"
                r="104"
                fill="none"
                stroke="#3A424C"
                strokeWidth="4"
                strokeDasharray="490 653"
                strokeDashoffset="-82"
                strokeLinecap="round"
                transform="rotate(-90 120 120)"
              />
              <circle
                cx="120"
                cy="120"
                r="104"
                fill="none"
                stroke="#3D8BFF"
                strokeWidth="4"
                strokeDasharray={`${((dialAngle + 135) / 270) * 490} 653`}
                strokeDashoffset="-82"
                strokeLinecap="round"
                transform="rotate(-90 120 120)"
              />
            </svg>
            <div
              className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-signal shadow-[0_0_12px_rgba(61,139,255,0.9)]"
              style={{
                transform: `translate(-50%, -50%) rotate(${dialAngle}deg) translateY(-84px)`,
              }}
            />
            <div className="absolute inset-8 flex flex-col items-center justify-center rounded-full bg-panel/80">
              <span className="font-readout text-4xl font-bold tracking-[-0.03em] text-cream">
                {displayInputTemp}
              </span>
              <span className="mt-1 text-xs uppercase tracking-[0.2em] text-cream/40">
                {unit === "F" ? "°F set" : "°C set"}
              </span>
            </div>
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-cream/40">
            Drag the ring to set temperature
          </p>
        </div>

        <div className="mt-10">
          <div className="flex items-baseline justify-between">
            <span className="text-xs uppercase tracking-[0.2em] text-cream/40">Cook Time</span>
            <span className="font-readout text-lg font-bold text-cream">{timeMinutes} min</span>
          </div>
          <div
            ref={trackRef}
            onPointerDown={trackPointerDown}
            onPointerMove={trackPointerMove}
            onPointerUp={trackPointerUp}
            onPointerLeave={trackPointerUp}
            className="relative mt-4 h-11 touch-none select-none rounded-2xl bg-panel/70 shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]"
          >
            <div
              className="absolute inset-y-0 left-0 rounded-2xl bg-gradient-to-r from-brass/70 to-signal/80"
              style={{ width: `${trackRatio * 100}%` }}
            />
            <div
              className="absolute top-1/2 h-8 w-8 -translate-y-1/2 rounded-full border-2 border-panel bg-cream shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
              style={{ left: `calc(${trackRatio * 100}% - 16px)` }}
            />
          </div>
          <div className="mt-2 flex justify-between text-[11px] text-cream/30">
            <span>{TIME_MIN} min</span>
            <span>{TIME_MAX} min</span>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[28px] border border-black/40 bg-[linear-gradient(155deg,#15181d_0%,#0c0e11_65%)] p-7 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.9)] lg:p-9">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-signal/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-brass/10 blur-3xl"
        />

        <div className="relative flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.25em] text-cream/40">
            {direction === "ovenToAir" ? "Air Fryer Settings" : "Conventional Oven Settings"}
          </span>
          <span className="h-2 w-2 rounded-full bg-ready shadow-[0_0_10px_rgba(74,156,122,0.9)]" />
        </div>

        <div className="relative mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
            <span className="text-[11px] uppercase tracking-[0.2em] text-cream/40">
              Temperature
            </span>
            <div
              key={resultTempPrimary}
              className="mt-2 flex items-baseline gap-1 font-readout font-black tracking-[-0.04em] text-cream animate-valuePop"
            >
              <span className="text-5xl lg:text-6xl">{resultTempPrimary}</span>
              <span className="text-2xl text-signal">{resultTempUnit}</span>
            </div>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
            <span className="text-[11px] uppercase tracking-[0.2em] text-cream/40">
              Cook Time
            </span>
            <div
              key={result.timeMinutes}
              className="mt-2 flex items-baseline gap-1 font-readout font-black tracking-[-0.04em] text-cream animate-valuePop"
            >
              <span className="text-5xl lg:text-6xl">{result.timeMinutes}</span>
              <span className="text-2xl text-brass">min</span>
            </div>
          </div>
        </div>

        <div className="relative mt-6 flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4">
          <span className="text-[11px] uppercase tracking-[0.2em] text-cream/40">
            From
          </span>
          <span className="font-readout text-base font-semibold text-cream/70">
            {unit === "F" ? tempF : Math.round(fToC(tempF))}
            {unit === "F" ? "°F" : "°C"} · {timeMinutes} min
          </span>
          <span className="ml-auto text-signal">→</span>
        </div>

        <p className="relative mt-6 text-sm leading-relaxed text-cream/40">
          {direction === "ovenToAir"
            ? "Air fryers circulate heat directly around the food, so both the temperature and time drop from a standard oven bake."
            : "Reversing the conversion adds back the time and heat an enclosed oven cavity needs to reach the same result."}
        </p>
      </div>
    </div>
  );
}
