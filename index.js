'use strict'

/*!
 * imports.
 */

var promisify = require('bluebird').promisify

/*!
 * exports.
 */

module.exports = promiseback

/**
 * Augment a thunk such that it returns a promise if applied without a callback.
 *
 * @param {Function} fn
 * Thunk.
 *
 * @return {Function}
 * Returns a function that when applied with a callback, returns `undefined`, otherwise, returns a `Promise`.
 */

function promiseback (fn) {
  return function (cb) {
    return (typeof cb === 'function') ? fn(cb) : promisify(fn)()
  }
}
