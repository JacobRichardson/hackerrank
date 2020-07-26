/** 
 * This module implements a solution to the reverse array Hackerrank problem.
 * 
 * https://www.hackerrank.com/challenges/arrays-ds/problem
 */

// Export the reverse array function.
module.exports = reverseArray;

/**
 * Reverses an array.
 * @param {Array<Number>} arr The array of integers.
 * @returns {Array<Number>} The reversed array.
 */
function reverseArray (arr) {

  // Create the result array.
  const result = [];

  // For each element in the array starting at the last element.
  for (let i = arr.length - 1; i >= 0; i--) {

    // Add the element to the end of the array.
    result.push(arr[i]);
  }

  // Return the result string.
  return result;

}