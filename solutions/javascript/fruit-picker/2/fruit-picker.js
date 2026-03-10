/// <reference path="./global.d.ts" />
//
// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.

import { notify } from './notifier';
import { order } from './grocer';

/**
 * @return void
 */
export function onSuccess() {
  console.log(`notify called with ${notify({ message: 'SUCCESS' })}`)
}

/**
 * @return void
 */
export function onError() {
  console.log(`notify called with ${notify({ message: 'ERROR' })}`)
}

/**
 * @param {GrocerQuery} query
 * @param {FruitPickerSuccessCallback} onSuccessCallback
 * @param {FruitPickerErrorCallback} onErrorCallback
 * @return void
 */
export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  console.log(`notify called with ${order(query, onSuccessCallback, onErrorCallback)}`)
}

/**
 * @param {string} variety
 * @param {number} quantity
 * @return void
 */
export function postOrder(variety, quantity) {
  console.log(`order placed for ${orderFromGrocer({variety, quantity}, onSuccess, onError)}`)
}
