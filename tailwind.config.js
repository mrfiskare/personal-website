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
    themes: [
      {
        emerald: {
          ...require('daisyui/src/theming/themes')['emerald'],
          accent: 'red',
          secondary: 'teal',
          'base-100': '#f9f9ff'
        }
      },
      {
        dracula: {
          ...require('daisyui/src/theming/themes')['dracula'],
          'base-100': '#353353'
        }
      }
    ],
    darkTheme: 'dracula'
  }
};
