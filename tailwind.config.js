/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter"],
        circular: ["Circular STD"],
      },

      colors: {
        primary: "#5D50C6",
        primary_hover: "#4A3CBA",
        secondary: "#F85E9F",
        orange: "#FF5722",
        grey: "#191825",
        body: "#F8F8F8",
      },
    },
  },
  plugins: [],
};
