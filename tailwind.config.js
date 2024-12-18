/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sansSerif: ["Raleway", "sans-serif"],
        cursive: ["Euphoria Script", "cursive"],
      },
    },
  },
  plugins: [],
};
