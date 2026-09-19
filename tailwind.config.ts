import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        panel: "#181D24",      // cool control-panel charcoal (was warm/green-tinted)
        panelSoft: "#242B34",  // raised panel surface
        steel: "#3A424C",      // cool steel grey borders/dividers
        cream: "#EEF1F4",      // cool off-white surface (was warm cream)
        signal: "#3D8BFF",     // LED-blue accent (was ember orange)
        ready: "#4A9C7A",      // ready/success green, cooled slightly to match
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        readout: ["var(--font-readout)"],
      },
    },
  },
  plugins: [],
};

export default config;
