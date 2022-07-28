/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '16px',
      },
      fontFamily: {
        'body': ['"Rubik", sans-serif'],
        'head': ['"Raleway", sans-serif'],
        'hero': ['"Secular one", sans-serif'],
        'mont': ['"Montserrat", sans-serif']
      }
    },
  },
  plugins: [], 
}
