const defaultTheme = require('tailwindcss/defaultTheme')
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
        charlotte: '#98d6e5',
        sunglow: '#ffce31',
        'gold-tips': '#e8ad21',
        malibu: '#67b5e4',
        vulcan: '#35393e',
        grey: '#7a7979',
        'burnt-sienna': '#ed5f38',
        azure: '#f8ffff',
        'alice-blue': '#e4f4ff',
        arsenic: '#394149',
        'maya-blue': '#4ab5f8',
        'light-cyan': '#d1f4ff',
        'dodger-blue': '#0a96ed',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      boxShadow: {
        sm: '0 4px 4px 0 rgba(0 0 0 / 0.25)',
        xl: '0 0 14px 0 rgba(0 0 0 / 0.25)',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        display: ['Fredoka One', ...defaultTheme.fontFamily.sans],
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
