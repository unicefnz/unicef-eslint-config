module.exports = {
  // Allow simple bracketless fns
  'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],

  // Style preference
  'comma-dangle': ['error', 'never'],

  'import/no-extraneous-dependencies': 0,
  'import/no-unresolved': 0,

  // You could fit a tweet in this!
  'max-len': ['error', 140, 2, {
    ignoreUrls: true,
    ignoreComments: false,
    ignoreRegExpLiterals: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
  }],

  // Modifying a prop's props should definitely be allowed, this causes wayyyy to many errors
  // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js#L195
  'no-param-reassign': ['error', {
    props: false
  }],

  // Why is this even a rule
  'no-plusplus': 0,

  // This should be the author's decision
  'prefer-template': 0,

  // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js#L501
  'spaced-comment': ['error', 'always', {
    line: {
      exceptions: ['-', '+'],
      markers: ['=', '!', '/'], // space here to support sprockets directives
    },
    block: {
      exceptions: ['-', '+'],
      // Support @__PURE__ comments, used by webpack tooling
      markers: ['=', '!', ':', '::', '@__PURE__'], // space here to support sprockets directives and flow comment types
      balanced: true,
    }
  }]
};
