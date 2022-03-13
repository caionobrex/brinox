module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-lighter': '#e60000',
        'primary': '#ac0000',
        'primary-dark': '#660000'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}