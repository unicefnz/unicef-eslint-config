module.exports = {
  parser: '',
  plugins: [
    '@typescript-eslint/eslint-plugin'
  ],
  rules: require('./rules/base'),
  overrides: [
    {
      files: ['*.js'],
      extends: [
        'airbnb-base'
      ],
      rules: require('./rules/base')
    },
    {
      // Typescript & react
      files: ['*.tsx'],
      extends: [
        'airbnb-typescript'
      ]
    },
    {
      // Non react typescript
      files: ['*.ts'],
      extends: [
        'airbnb-typescript/base' // Only use base config on non-JSX
      ]
    },
    {
      // Declare an override that applies to TypeScript files only
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:import/typescript'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        // The "project" path is resolved relative to parserOptions.tsconfigRootDir.
        // Your local .eslintrc.js must specify that parserOptions.tsconfigRootDir=__dirname.
        project: './tsconfig.json',

        // Allow parsing of newer ECMAScript constructs used in TypeScript source code.  Although tsconfig.json
        // may allow only a small subset of ES2018 features, this liberal setting ensures that ESLint will correctly
        // parse whatever is encountered.
        ecmaVersion: 2018,

        sourceType: 'module'
      },
      rules: {
        ...require('./rules/base'),
        ...require('./rules/typescript')
      }
    }
  ]
};
