const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './dist/index.html',
  ],
  darkMode: 'class',
  theme: {
    debugScreens: {
    position: ['top', 'left'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      blue: colors.blue,
      yellow: colors.yellow,
      gray: colors.slate,
      turquoise: colors.cyan,
      green: colors.lime,
      red: colors.rose,
      },
      
    extend: {
      fontFamily: {
        headline: ['Oswald']
        },
        colors: {
          mainColor: '#212f49'
        },
        spacing: {
          13: '3.25rem',

        },
    },
  },

}
