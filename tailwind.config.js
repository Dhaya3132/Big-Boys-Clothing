/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:
      {
      'dancing-script':['Caveat'],
      'poppins':['Poppins'],
      },
      colors:{
   
        'color-grey':'#e9ecef',

      }
    },

  },
  plugins: [],
}