/** 
 * This module calculates is a string is a valid
 * string according to sherlock homes. His rules are
 * as follows. The string is valid if all characters
 * appear the same number of times or sherlock is able
 * to remove just 1 character from the string and all
 * the number of appearances are the same.
 */

// Export the function.
module.exports = sherlockValidString;

/**
 * Tests a string to see if a string is a valid sherlock holmes string.
 * @param {String} string. The string that is to be tested.
 * @returns {Boolean} Whether or not the string is valid.
 */
function sherlockValidString (string) {

  // Set char frequency to an empty object.
  const charFrequency = {};

  // For each char in the string.
  for (let char of string) {

    // If it is defined increment by 1 else set equal to 1.
    charFrequency[char] ? charFrequency[char]++ : charFrequency[char] = 1;
  }

  // Set frequency to an empty object.
  const frequency = {};

  // For each key on the char frequency hash map.
  Object.keys(charFrequency).forEach((key) => {

    // If the frequency is defined increment it else set it equal 1 one.
    frequency[charFrequency[key]] ? frequency[charFrequency[key]]++ : frequency[charFrequency[key]] = 1;
  });

  // If there is only 1 key on frequency.
  if (Object.keys(frequency).length === 1) {

    // Return true.
    return true;
  }

  // If the are more than 2 frequencies on the frequency object.
  if (Object.keys(frequency).length > 2) {

    // Return false.
    return false;
  }

  // For each key in frequency.
  for (let key of (Object.keys(frequency))) {

    // If the frequency is 1.
    if (frequency[key] === 1) {

      // If the keys differ by 1 (ex: 4 and 3 remove 1 char from 4 and now all 3s).
      if (Math.abs(parseInt(Object.keys(frequency)[0]) - parseInt(Object.keys(frequency)[1])) === 1) {

        // Return true.
        return true;
      }

      // If the key is 1 (ex: frequency 1 appears 1 time we can just remove the single char).
      if (key === '1') {

        // Return true.
        return true;
      }
    }
  }

  // Return false because it isn't possible.
  return false;
}