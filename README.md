# upgrade-function [![Code Climate](https://codeclimate.com/github/ileri/upgrade-function/badges/gpa.svg)](https://codeclimate.com/github/ileri/upgrade-function) [![Build Status](https://travis-ci.org/ileri/upgrade-function.svg)](https://travis-ci.org/ileri/upgrade-function) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
> Upgrade Node.js-style async functions to use promises

## Install
```bash
$ npm install --save upgrade-function
```

## Usage
```js
var upgradeFunction = require('upgrade-function')

function functionUsingNodeStyleCallback(some, arg, callback) {
  if(some === 1) {
    callback({
      message: '42 - an error occured'
    }, null)
  } else {
    callback(null, {
      val: arg
    })
  }
}

var functionUsingPromise = upgradeFunction(functionUsingNodeStyleCallback)

functionUsingPromise(1, 42)
  .then((val) => console.log(val))
  .catch((err) => console.error(err))
// { message: '42 - an error occured' }

functionUsingPromise(0, 42)
  .then((val) => console.log(val))
  .catch((err) => console.error(err))
// { val: 42 }
```
