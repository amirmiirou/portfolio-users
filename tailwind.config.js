/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode:'class',
  
  theme: {
  //screens:{},
  //colors:{},
  //fontFamily:{},
    extend: {
width:{"7.5":"120rem"},
height:{"120":"26rem"}

},
  },
  plugins: [],
}
