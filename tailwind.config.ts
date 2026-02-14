import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: "#11021d",
          900: "#1a0533",
          800: "#2d1054",
          700: "#3d1670",
          600: "#6412A6",
          500: "#7c2fc4",
          400: "#9b5cd6",
          300: "#b98ae6",
          200: "#d4b5f0",
          100: "#eedcfa",
          50: "#f8f0fd",
        },
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
