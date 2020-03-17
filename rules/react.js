module.exports = {
  'react/jsx-filename-extension': 0,
  'react/jsx-props-no-spreading': 0,
  'react/require-default-props': 0,
  'react/jsx-one-expression-per-line': 0,
  'jsx-a11y/anchor-is-valid': ['error', {
    components: ['Link'],
    specialLink: ['to'],
    aspects: ['invalidHref', 'preferButton'] // We remove the href tag here because Next.js often requires anchors without href
  }],
  'jsx-a11y/accessible-emoji': 0
};
