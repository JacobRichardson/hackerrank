/** 
 * This module counts the number of words
 * in a camel case string.
 */

// Export the function.
module.exports = camelCase;

/**
 * Counts the number of words in a camel case string.
 * @param {String} string The string that is in camel case.
 * @return {Number} The number of words in the string.
 */
function camelCase (string) {

  // Set count equal to one.
  let count = 1;

  // Create a char array.
  const charArray = string.split('');

  // For each character in the string.
  charArray.forEach((char, index) => {

    // If the ASCII value of the character is an uppercase letter.
    if (string.charCodeAt(index) >= 65 && string.charCodeAt(index) <= 90) {

      // Increment the count.
      count++;
    }
  });

  // Return the count.
  return count;
}