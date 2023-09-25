/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":'#FF006F',
        "secondary": '#DC00C9',
        "background": "#2F4858",
      }
    },
  },
  plugins: [require("daisyui")],
}

