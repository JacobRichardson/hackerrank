/** 
 * This module calculates how many apples and oranges
 * fell on someones house. The house is between two numbers
 * and the trees are located at one position. The apple tree
 * is to the left and the orange tree is to the right. Negative
 * values for apples and oranges means they fell to the left and
 * positive values mean they fell to the right.
 */

// Export the function.
module.exports = appleOrange;

/**
 * Counts the number of apples and oranges that fall on the house.
 * @param {Object} opts The opts object.
 * @param {Number} opts.houseStart The starting location of the house.
 * @param {Number} opts.houseEnd The ending location of the house.
 * @param {Number} opts.appleTree The location of the apple tree.apple
 * @param {Number} opts.orangeTree The location of the orange tree.
 * @param {Array<Number>} opts.apples An array of the distances the apples fall from their tree.
 * @param {Array<Number>} opts.oranges An array of the distances the oranges fall from their tree.
 * 
 */
function appleOrange (opts) {

  // Retrieve values from opts.
  let { houseStart, houseEnd, appleTree, orangeTree, apples, oranges } = opts;

  // Set apple count equal to zero.
  let appleCount = 0;

  // Set orange count equal to zero.
  let orangeCount = 0;

  // For each apple.
  for (let apple of apples) {

    // If the apple falls on the house.
    if ((appleTree + apple) >= houseStart && (appleTree + apple) <= houseEnd) {

      // Increment apple count.
      appleCount++;
    }
  }

  // For each orange.
  for (let orange of oranges) {

    // If the apple falls on the house.
    if ((orangeTree + orange) >= houseStart && (orangeTree + orange) <= houseEnd) {

      // Increment apple count.
      orangeCount++;
    }
  }

  // Create the result object with both counts.
  const result = {
    appleCount,
    orangeCount
  }

  // Return result.
  return result;
}