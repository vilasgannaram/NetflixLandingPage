/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '478px',
      md: '640px',
      lg: '1024px',
      xl: '1440px',
    },
    colors: {
      red: '#e50914',
    },
    extend: {},
  },
  plugins: [],
};
