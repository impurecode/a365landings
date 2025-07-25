/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      titillium: ["Titillium Web", "sans-serif"],
    },
    extend: {
      colors: {
        "blue-primary": "#0463C7",
        "grey-tertiary": "#EFF1F4",
        "grey-primary": "#526166",
        "grey-secondary": "#e5e7eb",
        error: "#D65C5E",
        "blue-quartary": "#015fc7",
        "violet-tertiary": "#675CE5",
        "blue-primary": "#006FE8",
        "dark-grey": "#414D58",
        "blue-secondary": "#2F6DE0",
        "ribbon-bg": "#9CBEFF",
        "blue-2": "#2454AD",
        "gray-1": "#EFF1F4",
        "ribbon-color": "#2454AD",
        "ribbon-bg-popular": "#24AD97",
        "ribbon-color-popular": "#FFFFFF",
        "ribbon-bg-oportunity": "#C6C1FC",
        "ribbon-color-oportunity": "#776CEF",
        "popular-bg": "#7BD0C2",
        "oportunity-bg": "#978FEF",
        "neutral-black": "#323334",
        "popular-bg-type": "#4F8DFF",
        "oportunity-bg-type": "#9CBEFF",
        "text-primary": "#1B2225",
        "text-tertiary": "#596E80",
        "yellow-1": "#FFBC82",
        "yellow-2": "#FFA14F",
      },
    },
  },
  plugins: [],
};
