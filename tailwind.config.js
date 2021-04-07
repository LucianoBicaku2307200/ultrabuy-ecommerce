// tailwind.config.js

const { colors } = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      C1: {
        default: "black",
        B: "#575757",
        C: "#A9A9A9",
        D: "#D1D1D1",
        E: "#EBEBEB",
        F: "#F5F5F5",
      },
      C2: {
        default: "#6A983C",
        B: "#46760A",
        C: "#92C064",
        D: "#C8DEB3",
      },
      C3: {
        default: "#D0A866",
        B: "#B28A48",
        C: "#ECD2A6",
        D: "#FAEDD8",
      },
      C4: {
        default: "#E5704B",
        B: "#C7522D",
        C: "#EB8D70",
        D: "#F7C6B7",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
