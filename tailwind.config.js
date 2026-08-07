/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#0a0e1b",
          elevated: "#0f1526",
          muted: "#141b2e",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      backgroundImage: {
        "grid-soft":
          "linear-gradient(to right, rgba(99, 102, 241, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.06) 1px, transparent 1px)",
        "glow-indigo":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(129, 140, 248, 0.25), transparent 55%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
      },
    },
  },
  plugins: [],
};
