/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%': { backgroundColor: 'rgb(107 114 128)' },
          '100%': { backgroundColor: 'rgb(17 24 39)' },
        }
      },
    },
  },
  plugins: [],
};