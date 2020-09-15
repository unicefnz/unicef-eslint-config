module.exports = {
  plugins: ['eslint-plugin-react'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    require.resolve('./base') // Base needs to be loaded after airbnb to properly configure typescript
  ],
  rules: {
    ...require('./rules/react')
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
