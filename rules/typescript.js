module.exports = {
  'consistent-return': 0,
  // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js#L501
  'spaced-comment': ['error', 'always', {
    line: {
      exceptions: ['-', '+'],
      markers: ['=', '!', '/'], // space here to support sprockets directives
    },
    block: {
      exceptions: ['-', '+'],
      markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
      balanced: true,
    }
  }],
};