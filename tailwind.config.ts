import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        panel: "#181D24",
        panelSoft: "#242B34",
        steel: "#3A424C",
        cream: "#EEF1F4",
        signal: "#3D8BFF",
        ready: "#4A9C7A",
        ember: "#C7823F",
        slateDeep: "#11151B",
        gunmetal: "#20262E",
        brass: "#B9924F",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        readout: ["var(--font-readout)"],
      },
      keyframes: {
        valuePop: {
          "0%": { transform: "translateY(6px) scale(0.97)", opacity: "0" },
          "60%": { transform: "translateY(-1px) scale(1.01)", opacity: "1" },
          "100%": { transform: "translateY(0) scale(1)", opacity: "1" },
        },
      },
      animation: {
        valuePop: "valuePop 420ms cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
