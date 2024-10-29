/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "rich-black": "#011627",
        "seashell": "#f7ebe8",
        "primary-color": "#124559",
        "secondary-color": "#598392",
      }
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
}

