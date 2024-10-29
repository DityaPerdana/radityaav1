/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",  'node_modules/preline/dist/*.js',],
  theme: {
    fontFamily: {
      'poppins': ['Poppins']
    },
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
  ],
}