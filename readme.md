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

###### expose dual interface async function

```js
var read = require('fs').readFile
var path = require('path')
var filepath = path.resolve(__dirname, 'package.json')
var encoding = 'utf8'
var readable = promiseBack(read.bind(null, filepath, encoding))
```

> NOTE: if you already have a function that takes a callback as it's only parameter, you can just pass it to `promiseBack`. Modules that expose such an interface can be passed directly to `promiseBack` without a wrapper; You may also use `Function.prototype.bind` to achieve the same.

###### use callback interface

```js
readable(function (_, str) {
  console.log(JSON.parse(pkg).description)
})
//=> Augment a thunk such that it returns a promise if applied without a callback.
```

###### use promise interface

```js
readable()
.then(JSON.parse)
.then(selectn('description'))
.then(console.log)
.catch(console.error)
//=> Augment a thunk such that it returns a promise if applied without a callback.
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
