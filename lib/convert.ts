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

/**
 * Running cost calculator.
 * costPerUse = watts / 1000 * hoursPerUse * ratePerKwh
 * Note: air fryers rarely draw full rated wattage the entire cycle
 * (preheat spikes, cycling once at temp), so we apply a 0.85 duty-cycle
 * factor as a conservative real-world adjustment rather than the naive
 * full-wattage-for-full-time calculation, which tends to overstate cost.
 */
const DUTY_CYCLE_FACTOR = 0.85;

export function calculateRunningCost(
  watts: number,
  minutesPerUse: number,
  usesPerWeek: number,
  ratePerKwh: number
) {
  const hoursPerUse = minutesPerUse / 60;
  const kwhPerUse = (watts / 1000) * hoursPerUse * DUTY_CYCLE_FACTOR;

  const costPerUse = kwhPerUse * ratePerKwh;
  const costPerWeek = costPerUse * usesPerWeek;
  const costPerMonth = costPerWeek * (30 / 7);
  const costPerYear = costPerWeek * 52;

  return {
    kwhPerUse: Math.round(kwhPerUse * 1000) / 1000,
    costPerUse: Math.round(costPerUse * 100) / 100,
    costPerWeek: Math.round(costPerWeek * 100) / 100,
    costPerMonth: Math.round(costPerMonth * 100) / 100,
    costPerYear: Math.round(costPerYear * 100) / 100,
  };
}

/**
 * Size / capacity recommendation.
 * Rule of thumb used across appliance guides: roughly 1-1.5 quarts of
 * capacity per person for typical portions, with a step up for people
 * who batch-cook, meal-prep, or regularly cook for guests.
 */
export type CookingStyle = "light" | "typical" | "heavy";

const STYLE_QUARTS_PER_PERSON: Record<CookingStyle, number> = {
  light: 1.0,
  typical: 1.4,
  heavy: 1.9,
};

export function recommendAirFryerSize(householdSize: number, style: CookingStyle) {
  const rawQuarts = householdSize * STYLE_QUARTS_PER_PERSON[style];

  // Round up to the nearest common retail size band so the
  // recommendation matches what people actually shop for.
  const bands = [2, 3, 4, 5, 6, 8, 10, 12];
  const recommendedQuarts = bands.find((b) => b >= rawQuarts) ?? bands[bands.length - 1];

  return {
    rawQuarts: Math.round(rawQuarts * 10) / 10,
    recommendedQuarts,
    recommendedLiters: Math.round(recommendedQuarts * 0.946 * 10) / 10,
  };
}
