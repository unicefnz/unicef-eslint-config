# UNICEF NZ Code Style Guide
This guide is implemented using eslint rules. It's developed with a react + typescript app,
but will support any combination (or neither) of the two

## Installing
Depending on the type of code you'll be writing, you must install some extra peer dependencies

Start with installing the ESLint config:
`npm install --save-dev @unicefnz/eslint-config`

### Vanilla JS
Vanilla JS doesn't need any plugins!

Example config:
```js
module.exports = {
  extends: '@unicefnz'
}
```

### React
React requires the full airbnb config as well as a few plugins.
`npm install --save-dev eslint-plugin-jsx-a11y \
                        eslint-plugin-import \
                        eslint-plugin-react \
                        eslint-plugin-react-hooks`

Example config:
```js
module.exports = {
  extends: '@unicefnz/eslint-config/react'
}
```

### Typescript
Typescript requires a couple of extra peer deps 
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

### React + Typescript
Peer deps from React + Typescript, and extend *both* their configs
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
