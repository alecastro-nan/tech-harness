import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#15181f",
        "surface-variant": "#1e2129",
        "surface-container-lowest": "#071007",
        "surface-container-low": "#141e14",
        "surface-container": "#182218",
        "surface-container-high": "#222d22",
        "surface-container-highest": "#2d372c",
        "surface-bright": "#313c30",
        "on-surface": "#dae6d5",
        "on-surface-variant": "#b9ccb5",
        outline: "#849581",
        "outline-variant": "#3b4b3a",
        primary: "#edffe8",
        "primary-container": "#00ff66",
        "primary-fixed": "#6bff83",
        "primary-fixed-dim": "#00e55b",
        secondary: "#d3fbff",
        "secondary-container": "#00eefc",
        "secondary-fixed": "#7df4ff",
        "secondary-fixed-dim": "#00dbe9",
        tertiary: "#fafaf9",
        "tertiary-container": "#dddddd",
        background: "#000000",
        "on-background": "#dae6d5",
      },
      spacing: {
        base: "4px",
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "48px",
        xl: "80px",
        gutter: "24px",
        "margin-mobile": "16px",
        "margin-desktop": "64px",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        headline: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-lg": [
          "72px",
          { lineHeight: "80px", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "headline-lg": [
          "48px",
          { lineHeight: "56px", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "headline-lg-mobile": [
          "32px",
          { lineHeight: "40px", fontWeight: "600" },
        ],
        "headline-md": ["32px", { lineHeight: "40px", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-caps": [
          "12px",
          { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "700" },
        ],
        "metric-xl": ["64px", { lineHeight: "64px", fontWeight: "700" }],
      },
      boxShadow: {
        "neon-primary": "0 0 12px rgba(0, 255, 102, 0.3)",
        "neon-primary-strong": "0 0 16px rgba(0, 255, 102, 0.5)",
        "neon-secondary": "0 0 12px rgba(0, 238, 252, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
