/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        principal: "#484b6a",
        "border-color": "#e4e5f1",
        "bg-color": "#fff",
        btnBackground: "#25273c",
        "border-color-dark": "#cacde8",
        ["bg-color-dark"]: "#161722",
      }
    },
  },
  plugins: [],
}
