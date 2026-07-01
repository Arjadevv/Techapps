/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
          industrial: '#FFC000',
          dark: '#000000',
          steel: '#1a1a1a',
          steelLight: '#2d2d2d'
      },
      fontFamily: {
          sans: ['Inter', 'sans-serif'],
          heading: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: [],
}
