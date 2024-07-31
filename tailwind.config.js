/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif']
      }
    }
  },
  plugins: [require('daisyui')],

  daisyui: {
    themes: ['emerald', 'dracula'],
    darkTheme: 'dracula'
  }
};
