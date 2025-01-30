import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Neue Montreal", "sans-serif"],
      },
      colors: {
        "custom-mix": "color-mix(in srgb, currentColor, transparent 50%)",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1vw",
        md: "1.25vw",
        lg: "1.5vw",
        xl: "2.5vw",
        "2xl": "3vw",
        "3xl": "3.5vw",
        "4xl": "4vw",
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.85)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        scaleDown: {
          "0%": { transform: "scale(1.15)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out forwards",
        scaleUp: "scaleUp 1s ease-in-out forwards",
        scaleDown: "scaleDown 1s ease-in-out forwards",
      },
      width: {
        "svg-xxs": "60px",
        "svg-xs": "72px",
        "svg-sm": "120px",
        "svg-md": "180px",
        "svg-lg": "240px",
        "svg-xl": "300px",
      },
      height: {
        "svg-xxs": "60px",
        "svg-xs": "72px",
        "svg-sm": "120px",
        "svg-md": "180px",
        "svg-lg": "240px",
        "svg-xl": "300px",
      },
    },
  },
  plugins: [],
};
export default config;
