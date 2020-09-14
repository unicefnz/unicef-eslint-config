module.exports = {
  plugins: ['eslint-plugin-react'],
  extends: [
    'airbnb',
    'airbnb/hooks'
  ],
  rules: require('./rules/react'),
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      // Typescript & react
      files: ['*.tsx'],
      extends: [
        'airbnb-typescript'
      ]
    }
  ]
};
