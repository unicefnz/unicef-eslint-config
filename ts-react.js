module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  rules: {
    ...require('./rules/base'),
    ...require('./rules/typescript'),
    ...require('./rules/react')
  }
};
