'use strict'

/*!
 * imports.
 */

var file = require('fs')
var path = require('path')
var selectn = require('selectn')

/*!
 * imports (local).
 */

var promiseBack = require('./')

/*!
 * setup.
 */

var filepath = path.resolve(__dirname, 'package.json')
var encoding = 'utf8'

/*!
 * wrap.
 */

var read = promiseBack(file.readFile.bind(null, filepath, encoding))

/*!
 * promise.
 */

read()
.then(JSON.parse)
.then(selectn('name'))
.then(console.log)
// promise-back

/*!
 * callback.
 */

read(function (_, pkg) {
  console.log(JSON.parse(pkg).description)
})
// Augment a thunk such that it returns a promise if applied without a callback.
