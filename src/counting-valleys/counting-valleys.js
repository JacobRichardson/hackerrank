/** 
 * This module counts the number of valleys a
 * hiker takes based on a string representing
 * all the steps he has taken and denoting if
 * they were uphill or downhill.
 */

// Export the function.
module.exports = countValleys;

/**
 * Counts the number of valleys in a hike string.
 * @param {String} string The string the represents the hike
 * where U stands for uphill and D stands for down hill.
 * @return {Number} The number of valleys in the hike.
 */
function countValleys (string) {

  // Set seal level equal to one.
  let seaLevel = 0;

  // Start with zero valleys.
  let valleyCount = 0;

  // Set in valley equal to false.
  let inValley = false;

  // Create a char array.
  const charArray = string.split('');

  // For each character in the string.
  charArray.forEach((char) => {

    // If the current character is a U.
    if (char === 'U') {

      // Increment sea level.
      seaLevel++;
    }
    // If the current character is a D.
    else if (char === 'D') {

      // Decrement sea level.
      seaLevel--;
    }

    // If sea level is negative and we are not already in a valley.
    if (seaLevel < 0 && !inValley) {

      // Set in valley equal to true.
      inValley = true;

      // Increment valley count.
      valleyCount++;
    }

    // If sea level is zero.
    if (seaLevel === 0) {

      // Set in valley equal to false.
      inValley = false;
    }
  });

  // Return the count.
  return valleyCount;
}