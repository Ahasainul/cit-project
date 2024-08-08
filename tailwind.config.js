/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navColour': '#F9F4F1',
        'subTextColour': '#4C7876 ',
        'hadTextColour': '#00413D ',
        'btnColour': '#E5745D ',
        'pColour': '#EF8100 ',
        'bgColour': '#F9F4F1 ',
   
      },
      fontFamily: {
        'intel': [ "Inter", 'sans-serif'],
        'vol': ["Vollkorn", 'serif']
      },
      maxWidth: {
        'container': '1600px',
      },
    },
  },
  plugins: [],
}

