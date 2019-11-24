/** 
 * This module reduces a string to the smallest
 * it can be removing two adjacent characters
 * that are the same. If the string is empty return
 * 'empty string'.
 */

// Export the function.
module.exports = superReducedString;

/**
 * Reduces a string be removing same character
 * adjacent pairs.
 * @param {String} string The string that is to be reduced.
 * @return {String} The reduced string.
 */
function superReducedString (string) {

  // For each character in the string.
  for (let char of string) {

    // Set string equal to replace the current character plus the current character with an empty string.
    string = string.replace((char + char), '');
  }

  // If there are no characters left.
  if (string.length === 0) {

    // Set string equal to 'Empty String'.
    string = 'Empty String';
  }

  // Return the result.
  return string;
}