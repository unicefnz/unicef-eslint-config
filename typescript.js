module.exports = {
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  rules: {
    ...require('./rules/base'),
    ...require('./rules/typescript')
  }
};
