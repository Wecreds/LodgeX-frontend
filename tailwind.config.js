/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "rich-black": "#011627",
        "rich-white": "#F4F4F9",
        "primary-color": "#124559",
        "secondary-color": "#598392",
      },
      boxShadow: {
        "top": "0px -25px 50px -12px rgba(0, 0, 0, 0.25)"
    },
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },

  plugins: [],
}}
