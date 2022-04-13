module.exports = {
  plugins: {
    autoprefixer: {},
    '@fullhuman/postcss-purgecss': process.env.NODE_ENV === 'production' && {
      content: ['./index.html', './src/**/*.js'],
      defaultExtractor: (content) => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]+/g) || []
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]+/g) || []
        return broadMatches.concat(innerMatches)
      },
    },
    'postcss-import': {},
    'postcss-sort-media-queries': {},
    tailwindcss: {},
  },
}
