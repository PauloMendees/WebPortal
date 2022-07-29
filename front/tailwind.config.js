/** @type {import('tailwindcss').Config} */
const colors = require("./src/styles/Theme/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screen: {
      sm: "360px",
      md: "420px",
      lg: "600px",
      xl: "1080px",
      "2xl": "1460px",
    },
    extend: {
      colors: colors,
    },
  },
  plugins: [],
}
