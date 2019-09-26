module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  extends: 'airbnb',
  rules: {
    'no-tabs': 0,
    'react/jsx-one-expression-per-line': false,
    'react/jsx-indent': ['error', 2],
    'no-console': 'off',
  },
};
