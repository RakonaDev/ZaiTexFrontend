/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'black-light': '#181935',
        'azul-zai': '#1962EC',
        'azul-oscuro': '#181935',
        'blanco-comentario': '#D9D9D9',
      },
      spacing: {
        '120': '120rem'
      }
    },
  },
  plugins: [],
}

