# UNICEF NZ Javascript Style Guide

## Installing
Check out [Installing](/doc/installing.md) for detailed instructions installing the ESLint plugin
```shell script
npm install --save-dev eslint typescript @unicefnz/eslint-config
```

```js
// .eslintrc.js
// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@unicefnz/eslint-config/patch');

module.exports = {
  extends: [
    '@unicefnz'
  ],
  parserOptions: { tsconfigRootDir: __dirname }
}
```

## Style Choices
This guide extends [Airbnb's JS style](https://github.com/airbnb/javascript) with a few
opinionated tweaks to make your life easier.

- arrow-parens has been loosened so simple expressions don't require parentheses
- comma-dangle is disabled
- import/no-extraneous-dependencies is disabled, this can stop you importing devDeps and types, etc
- import/no-unresolved is disabled, this should be a build time error, not a linting issue
- max-len has been bumped up to 140 characters. You could put a tweet on every line!
- no-plusplus has been disabled. Only needed to avoid insane edge cases.
- prefer-template is disabled

**React**
- react/jsx-filename-extension is disabled
- react/jsx-props-no-spreading is disabled, sometimes this is required
- react/require-default-props is disabled, sometimes undefined is fine
- react/jsx-one-expression-per-line is disabled. Makes "Hello {name}" invalid, come on.
- react/static-property-placement is disabled with typescript
- jsx-a11y/accessible-emoji is disabled, because come on, no one can be bothered

**Typescript**
- consistent-return disabled, this should be enforced by the typescript compiler
- spaced-comment modified to allow /// comments

## Contributing
Have a look at [Contributing](/doc/contributing.md)
