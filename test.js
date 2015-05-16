'use strict'

/*!
 * imports.
 */

var fs = require('fs')
var resolve = require('path').resolve
var test = require('tape-catch')

/*!
 * readfile helper.
 */

function readfile (f, e) {
  return function (cb) { fs.readFile(f, e, cb) }
}

/*!
 * fixture.
 */

var path = resolve(__dirname, 'package.json')

/*!
 * imports (local).
 */

var promiseBack = require('./')

/*!
 * tests.
 */

test('promiseBack(fn)(cb)', function (t) {
  var read = readfile(path, 'utf8')

  promiseBack(read)(function (err, str) {
    t.error(err, 'callback')
    t.end()
  })
})

test('promiseBack(fn)()', function (t) {
  var read = readfile(path, 'utf8')

  promiseBack(read)().then(function (str) {
    t.assert(str, 'promise')
    t.end()
  })
})
