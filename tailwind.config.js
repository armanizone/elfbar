/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '12px',
      },
      fontFamily: {
        'body': ['"Rubik", sans-serif'],
        'head': ['"Raleway", sans-serif']
      }
    },
  },
  plugins: [],
}