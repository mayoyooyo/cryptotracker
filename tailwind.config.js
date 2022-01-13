const { white } = require("tailwindcss/colors");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    text: "#ffffff",
    colors: {
      mayo1: "#D8B9C3",
      mayo2: "#827397",
      mayo3: "#4D4C7D",
      mayo4: "#363062",
      ...colors,
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
};
