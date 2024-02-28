/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-red": "#E84242",
        "card-bg": "#F1F1F1"
      }
    },

  },
  plugins: [],
}