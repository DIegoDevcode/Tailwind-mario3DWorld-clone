/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  './pages/**/*.{html,js}',
  './components/**/*.{html,js}',
],
  
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wave-pattern': 'url(../img/wave-white.png)',
        'wave-pattern-dots': 'url(../img/pattern-white-dots.png)',
      }),
      screens:{
        'xsm': '320px'
      }
    },
  },
  plugins: [],
}

