// Do not use this file directly!
// Use one of the configs that extends this (typescript, vanilla, etc), as they import the airbnb config

module.exports = {
  rules: {
    'comma-dangle': 0,
    'react/jsx-filename-extension': 0,
    'prefer-template': 0,
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
    'max-len': ['error', 140, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }]
  }
};
