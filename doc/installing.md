# Installing the ESLint plugin
These style choices have been implemented in an eslint plugin.
The plugins this guide uses varies depending on the type of code you're writing,
so you may need to install some extra peer dependencies.

Install ESLint and the config
```
npm install --save-dev eslint @unicefnz/eslint-config
```

Choose your mode:
- [Vanilla JS](#vanilla-js)
- [React](#react)
- [Typescript](#typescript)
- [React + Typescript](#react--typescript)

## Vanilla JS
This config works out of the box with Vanilla JS, just add the config to your extends:
```js
module.exports = {
  extends: '@unicefnz'
}
```

## React
React requires a few plugins to properly parse JSX
```
npm install --save-dev eslint-plugin-jsx-a11y \
                       eslint-plugin-import \
                       eslint-plugin-react \
                       eslint-plugin-react-hooks
```

Example config:
```js
module.exports = {
  extends: '@unicefnz/eslint-config/react'
}
```

## Typescript
Typescript requires a couple of extra plugins, and a little bit more configuration
```
npm install --save-dev @typescript-eslint/eslint-plugin eslint-plugin-import
```

Example config:
```js
module.exports = {
  extends: [
    '@unicefnz/eslint-config/typescript'
  ],
  parserOptions: {
    project: './tsconfig.json'
  }
}
```

## React + Typescript
Install the dependencies mentioned in both sections, and then extend both of their configs

Example config:
```js
module.exports = {
  extends: [
    '@unicefnz/eslint-config/react',
    '@unicefnz/eslint-config/typescript'
  ],
  parserOptions: {
    project: './tsconfig.json'
  }
}
```
