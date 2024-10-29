/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // colors: {}
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

