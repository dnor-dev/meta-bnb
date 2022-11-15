/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1240px',
      xl: '1440px',
    },
    extend: {},
    colors: {},
  },
  plugins: [require('tw-elements/dist/plugin')],
};
