module.exports = {
  'comma-dangle': 0,
  'prefer-template': 0,
  'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
  'max-len': ['error', 140, 2, {
    ignoreUrls: true,
    ignoreComments: false,
    ignoreRegExpLiterals: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
  }],
  'import/no-extraneous-dependencies': 0,
  'import/no-unresolved': 0
};
