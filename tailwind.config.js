/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors : {
        brand : '#FF0000', //색 변수 지정
      }
    },
  },
  plugins: [],
}

