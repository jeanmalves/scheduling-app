const aspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
  purge: ['index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    aspectRatio,
  ],
};
