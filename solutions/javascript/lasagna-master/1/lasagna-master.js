/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * Determines if you can already take it out or not.
 *
 * @param {number} remainingTime
 * @returns {string} the lasagna is ready or not.
 */
export function cookingStatus(remainingTime) {
  if (!(typeof remainingTime === 'number')) return 'You forgot to set the timer.';
  if (remainingTime != 0) return 'Not done, please wait.';
  return 'Lasagna is done.';
}

/**
 * Estimate how long the preparation will take lasagna.
 *
 * @param {string[]} layers
 * @param {number} preparationTimeMin
 * @returns {number} total preparation time.
 */
export function preparationTime(layers, preparationTimeMin = 2) {
  return layers.length * preparationTimeMin;
}

/**
 * Determinate the quantity of noodles and souce needed to make the meal.
 *
 * @param {string[]} layers
 * @returns {object} quantity of noodles and souce.
 */
export function quantities(layers) {
  const sauce = layers.filter((layer) => layer === 'sauce');
  const noodle = layers.filter((layer) => layer === 'noodles');
  return {
    noodles: noodle.length * 50,
    sauce: sauce.length * 0.2
  }
}

/**
 * Add secret ingredient from my friend's recipe.
 *
 * @param {string[]} friendsList
 * @param {string[]} myList
 */
export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList.at(-1));
  console.log(myList);
}

/**
 * Calculate the amounts for different numbers of portions.
 *
 * @param {object} recipe
 * @param {number} numberPortions
 */
export function scaleRecipe(recipe, numberPortions = 2) {
  const portions = numberPortions / 2;
  const scaled = {};

  for (const ingredient in recipe) {
    scaled[ingredient] = recipe[ingredient] * portions;
  }

  return scaled;
}
