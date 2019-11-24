/** 
 * This module determines the number of pairs of
 * socks that can be made from a given array of
 * sock colors. Each number in the array represents
 * a color.
 */

// Export the function.
module.exports = sockMerchant;

/**
 * Returns the number of pairs of socks that can be made.
 * @param {Array<Number>} socks An array of numbers that
 * represent different colors of socks.
 * @return {Number} The number of pairs that can be made
 * with the given sock colors.
 */
function sockMerchant (socks) {

  // Set num pairs equal to zero.
  let numPairs = 0;

  // Create an already seen array.
  let alreadySeen = [];

  // For each color in socks.
  for (let color of socks) {

    // If the index of the current color does not equal -1 (The color has already been seen).
    if (alreadySeen.indexOf(color) !== -1) {

      // Remove the already seen color from the already seen array (a pair was found for it).
      alreadySeen.splice(alreadySeen.indexOf(color), 1);

      // Increment the number of pairs.
      numPairs++;
    }
    // The color hasn't already been seen.
    else {

      // Add the color into the already seen array.
      alreadySeen.push(color);
    }
  }

  // Return the number of pairs of socks that can be made.
  return numPairs;
}