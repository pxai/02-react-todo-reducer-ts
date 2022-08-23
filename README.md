# React TODO app with reducer
Simple TODO app using functional components and basic reducer hook

[![Build Status](https://app.travis-ci.com/pxai/02-react-todo-reducer-ts.svg?branch=master)](https://app.travis-ci.com/pxai/02-react-todo-reducer-ts)
# Add TS support
```shell
yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

# Adding support for test for TypeScript
The project is created with create-react-app.
After that we need to:

```shell
yarn add jest ts-jest babel-jest
```

babel.config.js file:
```JavaScript
module.exports = {presets: ['@babel/preset-env']}
```

jest.config.js
```JavaScript
module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  }
};
```