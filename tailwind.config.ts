import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        panel: "#1F2421",      // control-panel charcoal
        panelSoft: "#2B322D",  // raised panel surface
        steel: "#3A3F3B",      // steel grey borders/dividers
        cream: "#F5F2ED",      // off-white readable surface
        ember: "#FF6B35",      // heating-element accent
        ready: "#4A7C59",      // ready/success green
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
