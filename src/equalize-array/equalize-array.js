/** 
 * Implements a solution to the equalize array Hackerrank Problem.
 * 
 * https://www.hackerrank.com/challenges/equality-in-a-array/problem
 * 
 */

// Export the equalize array function.
module.exports = equalizeArray;


function equalizeArray (arr) {

  // Create an element frequency hash map.
  const frequencies = {};

  // For each element of the array.
  for (let num of arr) {

    // If that number already exists on frequencies.
    if (frequencies[num]) {

      // Increment the count.
      frequencies[num]++;

    }
    // This number does not exist on the frequencies hash map.
    else {

      // Set the frequency of that number to be 1.
      frequencies[num] = 1;
    }
  }

  // Set highest equal to zero.
  let highest = 0;

  // For each key on the frequencies hash map.
  for (let key of Object.keys(frequencies)) {

    // If the current key is greater than highest.
    if (frequencies[key] > highest) {

      // Set highest equal to the frequency of that element.
      highest = frequencies[key];
    }
  }

  /** 
   *  Set result equal to the length of the array subtracting the
   *  number of times the most common element appears. This leaves
   *  us with amount of elements that have to be deleted
   */
  const result = arr.length - highest;

  // Return result;
  return result;
}