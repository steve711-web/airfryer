export interface NavLink {
  href: string;
  label: string;
  short: string;
}

export const navLinks: NavLink[] = [
  { href: "/oven-to-air-fryer", label: "Oven → Air Fryer", short: "Converter" },
  { href: "/air-fryer-wattage-cost", label: "Running Cost", short: "Cost" },
  { href: "/air-fryer-size-calculator", label: "Size Finder", short: "Size" },
];
