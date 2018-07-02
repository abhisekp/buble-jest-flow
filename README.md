# buble-jest-flow

[![Build Status](https://travis-ci.org/abhisekp/buble-jest-flow.svg?branch=master)](https://travis-ci.org/abhisekp/buble-jest-flow) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/buble-jest-flow)

Custom jest transformer to remove flow type annotations using buble

# Install

```sh
# yarn add buble-jest-flow
npm install --save-dev buble-jest-flow # npm i -D buble-jest-flow
```

# API

```js
process(src, options);
```

# Usage

```json
// package.json

{
  "jest": {
    "transform": {
      "^.+\\.jsx?$": "buble-jest-flow"
    }
  }
}
```

OR

```js
// jest.config.js

module.exports = {
  transform: {
    '^.+\\.jsx?$': 'buble-jest-flow',
  },
};
```

# License

[**MIT**](https://abhisekp.mit-license.org/) © [**Abhisek Pattnaik**](https://github.com/abhisekp)
