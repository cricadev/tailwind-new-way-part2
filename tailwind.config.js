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
   
      
    extend: {

    },
  },
  plugins: [ require('tailwindcss-debug-screens'),
],
}
