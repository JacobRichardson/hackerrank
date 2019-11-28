/** 
 * This module calculates the highest amount of money
 * a customer can spend in the shop without going over
 * budget and returns that number. If they can't buy
 * at least 1 keyboard and 1 usb drive negative one is
 * returned.
 */

// Export the function.
module.exports = electronicsShop;

/**
 * Returns the most amount of money that can be spend in budget.
 * @param {Object} opts The opts object.
 * @param {Array<Number>} keyboards The prices of the keyboards.
 * @param {Array<Number>} drives The prices of the drives.
 * @param {Number} budget The person's budget.
 * @return {Number} The highest possible amount she can spend
 * in her budget or -1 if she can't buy at least 1 keyboard and drive.
 */
function electronicsShop (opts) {

  // Retrieve values from opts.
  let { keyboards, drives, budget } = opts

  // Set highest equal to zer.
  let highest = 0;

  // Variable for sums.
  let sum;

  // For each keyboard.
  for (let keyboard of keyboards) {

    // For each drive.
    for (let drive of drives) {

      // Set sum equal to the keyboard's price added to the drive's price.
      sum = keyboard + drive;

      // If sum is less than or equal to the budget and sum is less than the current highest.
      if (sum <= budget && sum > highest) {

        // Set highest equal to sum.
        highest = sum;
      }
    }
  }

  // If equals zero.
  if (highest === 0) {

    // Return negative 1 because no pair was found under budget.
    return -1;
  }

  // Highest does not equal zero.
  else {

    // Return highest.
    return highest;
  }

}