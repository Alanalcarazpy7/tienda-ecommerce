/** @type {import('tailwindcss').Config} */
export default {
  purge:[
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  content: [],
  theme: {
    extend: {
      colors:{
        buttonColor:"#bf95f9",
        buttonColorSecond:"#463aa1",
        backgrounColor:"0D0D0D",
        colorTarget:"#272935",
        colorNav:"#181920",
        colorNavSecond:"#f0f6ff",
        colorPrimario:"#ff7ac6",
        colorSecundario:"#057aff",
        backgrounColor:"#272935"
      },
    },
  },
  plugins: [],
}

