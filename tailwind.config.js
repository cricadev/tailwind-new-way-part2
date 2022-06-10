 const colors = require('tailwindcss/colors')

module.exports = {
  presets:[
    require('./company_styles')
  ],
  content: [
    './dist/index.html',
  ],
  darkMode: 'class',
  theme: {
    debugScreens: {
    position: ['top', 'left'],
    },
    container: {
      center: true,
      padding: {
      DEFAULT: '0.5rem',
      sm: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl' : '4rem',
      },
      },      
    extend: {

    },
  },
  plugins: [ require('tailwindcss-debug-screens'),
],
}
