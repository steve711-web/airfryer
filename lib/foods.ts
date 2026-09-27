export interface QuickRefFood {
  id: string;
  name: string;
  tempF: number;
  timeMinutes: string;
  note: string;
}

export const quickRefFoods: QuickRefFood[] = [
  {
    id: "chicken-breast",
    name: "Chicken Breast",
    tempF: 375,
    timeMinutes: "18-22",
    note: "Flip halfway, pull at 165°F internal.",
  },
  {
    id: "chicken-wings",
    name: "Chicken Wings",
    tempF: 380,
    timeMinutes: "22-25",
    note: "Shake basket every 8 minutes for even crisp.",
  },
  {
    id: "fries-fresh",
    name: "Fresh-Cut Fries",
    tempF: 375,
    timeMinutes: "15-20",
    note: "Soak and dry first, toss in a teaspoon of oil.",
  },
  {
    id: "fries-frozen",
    name: "Frozen Fries",
    tempF: 400,
    timeMinutes: "12-16",
    note: "No oil needed, shake basket at the midpoint.",
  },
  {
    id: "broccoli",
    name: "Broccoli",
    tempF: 375,
    timeMinutes: "8-10",
    note: "Light oil coat, watch for burnt tips near the end.",
  },
  {
    id: "brussels-sprouts",
    name: "Brussels Sprouts",
    tempF: 380,
    timeMinutes: "14-16",
    note: "Halve first, shake once for browned edges.",
  },
  {
    id: "salmon-fillet",
    name: "Salmon Fillet",
    tempF: 380,
    timeMinutes: "9-12",
    note: "Skin-side down, no flip needed.",
  },
  {
    id: "bacon",
    name: "Bacon",
    tempF: 350,
    timeMinutes: "8-10",
    note: "Single layer, drain the basket tray partway through.",
  },
];
