const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        blue: colors.lightBlue[900],
        green: colors.green[900],
        'green-light': colors.green[700],
        red: colors.red[900],
        'red-light': colors.red[700]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
