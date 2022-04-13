const postcssSorting = require('./util/postcssSorting');

module.exports = {
  customSyntax: 'postcss-scss',
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'declaration-colon-newline-after': null,
    'font-family-name-quotes': 'always-where-recommended',
    'max-nesting-depth': 3,
    'order/order': [...postcssSorting.order],
    'order/properties-alphabetical-order': null,
    'order/properties-order': [...postcssSorting.propertiesOrder],
    'string-quotes': 'single',
  },
};
