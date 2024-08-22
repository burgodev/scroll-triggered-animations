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
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
        "3xl": "4rem",
        "4xl": "5rem",
        "5xl": "6.25rem",
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
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out forwards",
        slideInFromLeft: "slideInFromLeft 1s ease-in-out forwards",
        slideInFromRight: "slideInFromRight 1s ease-in-out forwards",
        scaleUp: "scaleUp 1s ease-in-out forwards",
      },
      width: {
        "svg-xs": "80px",
        "svg-sm": "120px",
        "svg-md": "180px",
        "svg-lg": "240px",
        "svg-xl": "300px",
      },
      height: {
        "svg-xs": "40px",
        "svg-sm": "60px",
        "svg-md": "60px",
        "svg-lg": "60px",
        "svg-xl": "60px",
      },
    },
  },
  plugins: [],
};
export default config;
