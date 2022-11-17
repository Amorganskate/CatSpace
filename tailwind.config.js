/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chubbo: ["Chubbo", "sans-serif"],
        supreme: ["Supreme", "sans-serif"],
      },
      colors: {
        yellow: "#FFC700",
        "light-blue": "#C6F1FF",
        purple: "#C7B9FF",
      },
    },
  },
  plugins: [],
};
