/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/main-bg.jpg')",
        alt: "url('/main-bg-alt.jpg')"
      },
      dropShadow: {
        bright: '0 25px 25px rgba(255, 255, 255, 0.15)'
      },
      fontFamily: {
        oswald: '"Oswald", sans-serif'
      }
    }
  },
  plugins: []
}
