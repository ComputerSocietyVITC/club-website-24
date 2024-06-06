/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        'montserrat': ['Montserrat']
      },
      colors: {
        b_col1: '#123838',
        b_col2: '#0C2B38',
        b_col3: '#6CEDFF',
        b_col4: '#055A98',

      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),
],
}