/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        ink: {
          950: "#080B12",
          900: "#0D1117",
          800: "#161B27",
          700: "#1E2535",
          600: "#2A3348",
        },
        acid: {
          400: "#C8FF57",
          500: "#AAED2E",
          600: "#8FD118",
        },
        frost: {
          400: "#60CFFF",
          500: "#38BAFF",
        },
      },
    },
  },
  plugins: [],
};

