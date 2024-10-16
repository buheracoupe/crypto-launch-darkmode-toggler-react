/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Quicksand": ["Quicksand", "serif"]  
      }
    },
  },
  plugins: [],
  darkMode: "class"
}