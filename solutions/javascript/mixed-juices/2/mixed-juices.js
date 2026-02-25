// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let timeMixJuice;
  switch(name) {
    case 'Pure Strawberry Joy':
      timeMixJuice = 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      timeMixJuice = 1.5;
      break;
    case 'Tropical Island':
      timeMixJuice = 3;
      break;
    case 'All or Nothing':
      timeMixJuice = 5;
      break;
    default:
      timeMixJuice = 2.5;
      break;
  }

  return timeMixJuice;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  if (wedgesNeeded === 0) return 0;
  let totalLimes = 0;
  let indexLimes = 0;
  const totalBoxLimes = limes.length;
  while (totalBoxLimes != indexLimes) {
    switch(limes[indexLimes]) {
      case 'small':
        wedgesNeeded -= 6;
        break;
      case 'medium':
        wedgesNeeded -= 8;
        break;
      default:
        wedgesNeeded -= 10;
        break;
    }
    totalLimes++;
    if (wedgesNeeded <= 0) break;
    indexLimes++;
  }

  return totalLimes;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0 && orders.length > 0) {
     timeLeft -= timeToMixJuice(orders.shift());
  }
  return orders;
}
