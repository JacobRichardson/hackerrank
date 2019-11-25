/** 
 * This module calculates the maximum hourglass
 * sum in a 2D array. an hour glass shape
 * is the following shape replacing any
 * numbers:
 * 1 2 3
 *   4
 * 5 6 7
 */

// Export the function.
module.exports = maxHourglassSum;

console.log(maxHourglassSum([
  [-1, 1, -1, 0, 0, 0],
  [0, -1, 0, 0, 0, 0],
  [-1, -1, -1, 0, 0, 0],
  [0, -9, 2, -4, -4, 0],
  [-7, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0]
]))

/**
 * Calculates the highest hourglass sum in 
 * a 2D array.
 * @param {Array<Array>} grid A 2D array.
 * @return {Number} The highest hourglass sum.
 */
function maxHourglassSum (grid) {

  // Variable for the highest sum, and the current sum.
  let highest, sum;

  // Set j equal to 1.
  let j = 1;

  // For each row in grid.
  for (let i = 0; i < grid.length; i++) {

    // As long as there is 1 more element in the row.
    while (j < grid[i].length - 1) {

      // As long as there are 2 more rows left.
      if (grid.length - i >= 3) {

        // Set sum equal to the sum of the hourglass shape.
        sum =
          grid[i][j - 1] + grid[i][j] + grid[i][j + 1] +
          grid[i + 1][j] +
          grid[i + 2][j - 1] + grid[i + 2][j] + grid[i + 2][j + 1];

        // If highest is undefined and highest does not equal zero.
        if (!highest && highest !== 0) {

          // Set highest to the current sum.
          highest = sum;
        }
        // Highest is defined and the current sum is greater than highest.
        else if (sum > highest) {

          // Set highest equal to the current sum.
          highest = sum;
        }
      }

      // Increment j.
      j++;
    }

    // Reset j equal to 1.
    j = 1;
  }

  // Return highest.
  return highest;
}