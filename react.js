module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks'
  ],
  rules: {
    ...require('./rules/base'),
    ...require('./rules/react')
  }
};
