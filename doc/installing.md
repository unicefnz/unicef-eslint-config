# Installation
We use a little eslint hack to make it easy to get setup and running. Start
with installing eslint, typescript and the config:

```shell script
npm install --save-dev eslint typescript @unicefnz/eslint-config
```

> ### Watch out
> Although this config will lint JS code just fine, it references typescript and
> therefore depends on it. Make sure to install it yourself!


Next, setup your .eslintrc.js with something like this:
```js
// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@unicefnz/eslint-config/patch');

module.exports = {
  extends: [
    '@unicefnz'
  ],
  parserOptions: { tsconfigRootDir: __dirname }
}
```


## With React
Using react? Cool, so are we! All you need to do is extend a different file:

> **Do not** extend both configs, **only** use the react one

Example config:
```js
// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@unicefnz/eslint-config/patch');

module.exports = {
  extends: [
    '@unicefnz/eslint-config/react'
  ],
  parserOptions: { tsconfigRootDir: __dirname }
}
```

## Without Typescript
This config **should** work fine with plain JS (this repo is vanilla, too!) but
it's not designed specifically for it. If you're not using typescript, you can
drop the `parserOptions.tsconfigRootDir` from your project.

Make sure to read the [js gotcha](#watch-out).

```js
// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@unicefnz/eslint-config/patch');

module.exports = {
  extends: [
    '@unicefnz'
  ]
}
```
