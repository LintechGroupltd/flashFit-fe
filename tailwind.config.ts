import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1750px",
    },
    extend: {
      colors: {},

      spacing: {
        "window-capped-width": "var(--window-capped-width)",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Sora", "serif"],
    },
  },
  plugins: [],
};
export default config;
