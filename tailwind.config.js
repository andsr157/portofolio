/** @type {import('tailwindcss').Config} */

// const { colors: defaultColors } = require("tailwindcss/defaultTheme")
// const colors = {
//   ...defaultColors,
//   ...{
//     "new-gray": "#6d6d6d",
//   },
// }

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],

  theme: {
    extend: {
      fontFamily: {
        NeueHaas: [
          "Neue Haas Grotesk Display Pro",
          "Arial",
          "Helvetica",
          "sans-serif",
          { "font-weight": 500 },
        ],
      },
    },
    // colors: colors,
  },
  plugins: [],
}
