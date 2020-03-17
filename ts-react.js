module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/typescript'
  ],
  rules: {
    ...require('./rules/base'),
    ...require('./rules/typescript'),
    ...require('./rules/react'),
    ...require('./rules/ts-react')
  }
};
