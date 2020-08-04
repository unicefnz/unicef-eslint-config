module.exports = {
  // This should be handled by the compiler, not linter
  'consistent-return': 0,

  // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js#L501
  'spaced-comment': ['error', 'always', {
    line: {
      exceptions: ['-', '+'],
      markers: ['=', '!', '/'], // space here to support sprockets directives
    },
    block: {
      exceptions: ['-', '+'],
      // Add @__ to support @__PURE__ comments, used by webpack tooling
      markers: ['=', '!', ':', '::', '@__'], // space here to support sprockets directives and flow comment types
      balanced: true,
    }
  }],
};
