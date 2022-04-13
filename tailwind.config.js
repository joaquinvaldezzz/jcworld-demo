const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html', './src/**/*.js'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    extend: {
      colors: {
        'jungle-green': '#2db97a',
        sunglow: '#ffce31',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.active-link': {
          borderBottomWidth: theme('borderWidth.4'),
          borderColor: theme('colors.jungle-green'),
        },
      })
    }),
  ],
}
