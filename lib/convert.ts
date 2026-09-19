// Shared calculation engine for airfryerconvert.com
// All three tools (oven converter, wattage/cost, size calculator) pull from here.

export function fToC(f: number): number {
  return ((f - 32) * 5) / 9;
}

export function cToF(c: number): number {
  return (c * 9) / 5 + 32;
}

/**
 * Standard rule of thumb used across the niche (and matched to what
 * the ranking competitor's tool does): drop the oven temperature by
 * 25°F (about 14-20°C depending on scale rounding) and cut cook time
 * by roughly 20%. We round to the nearest 5°F / nearest minute so the
 * output reads like a real appliance dial rather than a raw float.
 */
export function convertOvenToAirFryer(ovenTempF: number, ovenTimeMinutes: number) {
  const airFryerTempF = Math.round((ovenTempF - 25) / 5) * 5;
  const airFryerTimeMinutes = Math.max(1, Math.round(ovenTimeMinutes * 0.8));

  return {
    airFryerTempF,
    airFryerTempC: Math.round(fToC(airFryerTempF)),
    airFryerTimeMinutes,
  };
}

/**
 * Reverse direction: air fryer setting back to conventional oven.
 * Confirmed real query pattern from autocomplete research
 * ("air fryer convert to oven") — not just the forward direction.
 */
export function convertAirFryerToOven(airFryerTempF: number, airFryerTimeMinutes: number) {
  const ovenTempF = Math.round((airFryerTempF + 25) / 5) * 5;
  const ovenTimeMinutes = Math.max(1, Math.round(airFryerTimeMinutes / 0.8));

  return {
    ovenTempF,
    ovenTempC: Math.round(fToC(ovenTempF)),
    ovenTimeMinutes,
  };
}

export function minutesToHM(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return { hours, minutes };
}
