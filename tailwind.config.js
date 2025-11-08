/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steel: {
          50: '#F4F7FB',
          100: '#E8EEF6',
          200: '#CCDBEB',
          300: '#9FBEDA',
          400: '#6C9CC4',
          500: '#5389B7',
          600: '#376592',
          700: '#2D5277',
          800: '#294663',
          900: '#263C54',
          950: '#192738'
        }
      }
    },
  },
  plugins: [],
}
