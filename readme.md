# promise-back
> Augment a thunk such that it returns a promise if applied without a callback.

[![Build Status](http://img.shields.io/travis/wilmoore/promise-back.js.svg)](https://travis-ci.org/wilmoore/promise-back.js) [![Code Climate](https://codeclimate.com/github/wilmoore/promise-back.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/promise-back.js) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```shell
npm install promise-back --save
```

>  You can also use Duo, Bower or [download the files manually](https://github.com/wilmoore/promise-back.js/releases).

###### npm stats

[![npm](https://img.shields.io/npm/v/promise-back.svg)](https://www.npmjs.org/package/promise-back) [![NPM downloads](http://img.shields.io/npm/dm/promise-back.svg)](https://www.npmjs.org/package/promise-back) [![Dependency Status](https://gemnasium.com/wilmoore/promise-back.js.svg)](https://gemnasium.com/wilmoore/promise-back.js)

## API Example

###### require

```js
var promiseBack = require('promise-back')
```

###### create a thunk

```js
var fs = require('fs')
var resolve = require('path').resolve

function readfile (f, e) {
  return function (cb) { fs.readFile(f, e, cb) }
}

var read = readfile(resolve(__dirname, 'package.json'), 'utf8')
```

###### resolve via callback

```js
promiseBack(read)(function (_, str) {
  assert(str.length)
})
```

###### resolve via promise

```js
var promise = promiseBack(read)()

promise.then(function (str) {
  assert(str.length)
})
```

## API

### `promiseBack(fn)`

###### arguments

 - `fn: (Function)` Thunk.

###### returns

 - `(Function)` Returns a function that when applied with a callback, returns `undefined`, otherwise, returns a `Promise`.

## Contributing

> SEE: [contributing.md](contributing.md)

## Licenses

[![GitHub license](https://img.shields.io/github/license/wilmoore/promise-back.js.svg)](https://github.com/wilmoore/promise-back.js/blob/master/license)
