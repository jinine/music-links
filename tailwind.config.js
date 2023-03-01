module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./scenes/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-green": "#8AAA79",
        shadow: "#837569",
        "lavender-gray": "#B7B6C2",
        olive: "#657153",
        "light-gray": "#D1D5DE",
        primary: "#d2ddd2",
        secondary: "#f4f5f0",
        tertiery: "#e56841",
        "minor-1": "#49393B",
        "minor-2": "#4B644A",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        firasans: ["fira-sans", "sans-serif"],
        soehne: ["soehne", "sans-serif"],
        ndot: ["Ndot"],
      },
    },
  },
  variants: {},
  plugins: [],
};
