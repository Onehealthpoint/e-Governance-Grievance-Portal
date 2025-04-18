const colors = require('tailwindcss/colors')

module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
      extend: {
        colors: {
          // Add ONLY your custom colors here
          nepRed: '#D42C2C',
          nepBlue: '#006EAF'
        }
      }
    }
  }