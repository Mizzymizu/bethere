/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        'color1': '#344e41',
        'color2': '#3a5a40',
        'logo-color': '#588157',
        'font-color': 'a3b18a',
        'backg-color': '#dad7cd', 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}