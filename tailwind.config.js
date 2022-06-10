/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './dist/**/*.{html,js}',
  './components/**/*.{html,js}',],

  darkMode: 'class',
  theme: {
    debugScreens: {
    position: ['top', 'left'],
    },
    
    extend: {
      fontFamily: {
        headline: ['Oswald']
        },
        colors: {
          mainColor: '#212f49'
        },
          
    },
  },
  plugins: [ require('tailwindcss-debug-screens'),
],
}
