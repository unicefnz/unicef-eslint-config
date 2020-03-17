# UNICEF NZ Javascript Style Guide

Check out [Installing](/doc/installing.md) for instructions installing the ESLint plugin

## Style Choices
This guide extends [Airbnb's JS style](https://github.com/airbnb/javascript) with a few
opinionated tweaks to make your life easier.

- comma-dangle is disabled
- prefer-template is disabled
- arrow-parens has been loosened so simple expressions don't require parentheses
- max-len has been bumped up to 140 characters. You could put a tweet on every line!
- import/no-extraneous-dependencies is disabled, this can stop you importing devDeps and types, etc
- import/no-unresolved is disabled, this should be a build time error, not a linting issue

**React**
- react/jsx-filename-extension is disabled
- react/jsx-props-no-spreading is disabled, sometimes this is required
- react/require-default-props is disabled, sometimes undefined is fine
- react/jsx-one-expression-per-line is disabled. Makes "Hello {name}" invalid, come on.
- react/static-property-placement is disabled with typescript
- jsx-a11y/anchor-is-valid has removed href requirement, to support Next
- jsx-a11y/accessible-emoji is disabled, because come on, no one can be bothered

**Typescript**
- spaced-comment modified to allow /// comments

## Contributing
Have a look at [Contributing](/doc/contributing.md)
