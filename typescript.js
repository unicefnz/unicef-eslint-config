module.exports = {
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/typescript'
  ],
  rules: {
    ...require('./rules/base'),
    ...require('./rules/typescript')
  }
};
