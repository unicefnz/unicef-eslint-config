module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    ...require('./rules/base'),
    ...require('./rules/react')
  }
};
