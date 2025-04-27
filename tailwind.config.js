import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/react/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Color scheme
      colors: {
        primary: {
          DEFAULT: "#0066FF",
          50: "#E6F0FF",
          100: "#CCE0FF",
        },
      },
      // Grid-templates
      gridTemplateColumns: {
        "auto-fill-min": "repeat(auto-fill, minmax(250px, 1fr))",
        "auto-fit-min": "repeat(auto-fit, minmax(250px, 1fr))",
      },
      // Animations
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
    darkMode: "class",
  },
  plugins: [heroui()],
};
