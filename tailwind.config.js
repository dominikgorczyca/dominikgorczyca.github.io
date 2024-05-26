/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#272727",
        gray: "#696773",
        contrast: "#009fb7",
        accent: "#fed766",
      }
    },
  },
  plugins: [],
}