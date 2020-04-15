/** 
 * Implements a solution to the game of thrones 1 hackerrank problem.
 * https://www.hackerrank.com/challenges/game-of-thrones/problem
 * 
 * Determines whether or not a string can be made into a palindrome.
 */

// Export the function.
module.exports = gameOfThrones;

/**
 * Determines if a string can be made into a palindrome.
 * @param {String} s The given string.
 * @returns
 */
function gameOfThrones (s) {

  console.log('GAME OF THRONES!!!');

  // Create the char frequency object.
  const charFrequency = {};

  // For each character in s.
  for (let char of s) {

    // If this character is already defined on the hash map.
    if (charFrequency[char] !== undefined) {

      // Increment the count.
      charFrequency[char]++;
    }
    // This character doesn't already exist on the hash map.
    else {

      // Set it equal to one.
      charFrequency[char] = 1;
    }
  }

  // Set odd count equal to zero.
  let oddCount = 0;

  // For each key in char frequency.
  for (let key of Object.keys(charFrequency)) {

    // If the frequency of that character is not even.
    if (charFrequency[key] % 2 !== 0) {

      // Increment odd count.
      oddCount++;

      // If odd count is greater than one.
      if (oddCount > 1) {

        // Return false.
        return false;
      }
    }
  }

  // Return true.
  return true;
}