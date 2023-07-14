/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        "animar-cursor" : {
          "0%":{
            color: "rgb(124 58 237)",
          },
          "100%": {
            color: "rgba(0,0,0,0)",
          }
        },

      }, 
      animation : {
        "animate-animar-cursor": "animar-cursor .8s infinite"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

