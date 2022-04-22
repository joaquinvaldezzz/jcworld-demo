const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html', './src/**/*.vue'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
      },
    },
    extend: {
      colors: {
        'jungle-green': '#2db97a',
        sunglow: '#ffce31',
        vulcan: '#35393e',
        grey: '#7a7979',
        'burnt-sienna': '#ed5f38',
        azure: '#f8ffff',
        'maya-blue': '#4ab5f8',
      },
      boxShadow: {
        sm: '0 4px 4px 0 rgba(0 0 0 / 0.25)',
        xl: '0 0 14px 0px rgba(0 0 0 / 0.25)',
      },
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        '.active-link': {
          borderBottomWidth: theme('borderWidth.4'),
          borderColor: theme('colors.jungle-green'),
        },
      })
    }),
  ],
}
