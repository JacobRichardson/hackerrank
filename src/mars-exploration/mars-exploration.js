/** 
 * Determine the number of characters that have been corrupted
 * in a transmission of a repeating SOS string.
 */

// Export the function.
module.exports = marsExploration;


/**
 * Determines how many characters were corrupted in transmission
 * in a repeating 'SOS' string.
 * @param {String} s. The transmission of repeating 'SOS'
 * @return {Number} The prisoner that needs to be warned.
 */
function marsExploration (s) {

  // The string that is going to be repeated.
  const repeatingString = 'SOS';

  // Set count equal to zero.
  let count = 0;

  // Set corrupted char count equal to zero.
  let corruptedCharCount = 0;

  // For each character in the transmission string.
  for (let char of s) {

    // If the current char just match the char in the repeating string.
    if (char !== repeatingString.charAt(count)) {

      // Increment corrupted char count.
      corruptedCharCount++;
    }

    // If count equals 2.
    if (count === 2) {

      // Set count equal to zero.
      count = 0;
    }
    // Count does not equal 2.
    else {

      // Increment count.
      count++;
    }

  }

  // Return corrupted char count.
  return corruptedCharCount;

}


console.log(marsExploration('SOSWOS'));