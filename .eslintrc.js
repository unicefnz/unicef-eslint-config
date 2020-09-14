module.exports = {
  parserOptions: {
    reportUnusedDisableDirectives: true
  },
  extends: './index',
  env: {
    node: true,
    es6: true
  },

  // Yes, I understand it's ironic that I'm overriding the rules in their own repo, however it makes
  // more sense to me to assume a es6 context, and override as needed
  rules: {
    'global-require': 'off'
  }
};
