/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chubbo: ["Chubbo", "sans-serif"],
        supreme: ["Supreme", "sans-serif"],
      },
    },
  },
  plugins: [],
};
