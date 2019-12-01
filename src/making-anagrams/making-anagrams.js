/** 
 * This module calculates the minimum number of characters
 * that are needed to be removed in order to make two strings
 * anagrams.
 */

// Export the function.
module.exports = makingAnagrams;

/**
 * Calculates the minimum number of characters that need
 * to be removed to make two strings anagrams.
 * @param {Object} opts. The opts object.
 * @param {String} opts.string1 The first string.
 * @param {String} opts.string2 The second string.
 * @returns {Number} The number of characters that must
 * be deleted to make the strings anagrams.
 */
function makingAnagrams (opts) {

  // Retrieve values from opts.
  let { string1, string2 } = opts;

  // If the strings are equal.
  if (string1 === string2) {

    // Return zero.
    return 0;
  }

  // Set string1's character frequency equal to an empty object.
  const s1CharFrequency = frequencyMap(string1);

  // Set string2's character frequency equal to an empty object.
  const s2CharFrequency = frequencyMap(string2);

  // Receive the number of removes from calculates removes using the strings frequencies.
  const removes = calculateRemoves(s1CharFrequency, s2CharFrequency);

  // Return removes.
  return removes;
}

/**
 * Returns a frequency map of the string.
 * @param {String} string Returns a frequency of each
 * char in the string. 
 * @returns {Object} A frequency map of the string.
 */
function frequencyMap (string) {

  // Set frequency map equal to an empty object.
  const frequencyMap = {};

  // For each char in string 1.
  for (let char of string) {

    // If it is defined increment by 1 else set equal to 1.
    frequencyMap[char] ? frequencyMap[char]++ : frequencyMap[char] = 1;
  }

  // Return frequency map.
  return frequencyMap;
}

/**
 * Calculates the number of characters to remove from two strings
 * based on each string's character frequency map to make them anagrams.
 * @param {Object} frequency1 The frequency of each character in the first string.
 * @param {Object} frequency2 The frequency of each character in the second string.
 * @returns {Number} The number of characters that need to be removed.
 */
function calculateRemoves (frequency1, frequency2) {

  // Set the number of characters that need to be removed from s1 equal to zero.
  let s1Count = 0;

  // For each key in s1 frequency.
  Object.keys(frequency1).forEach(key => {

    // If the value on s1 frequency doesn't equal the value on s2 frequency 
    if (frequency1[key] !== frequency2[key]) {


      // If the character doesn't exist in s2.
      if (frequency2[key] === undefined) {

        // Add the current frequency to s1count. (ex: s1={a:3}, s2 doesn't have a, removed 3 a's).
        s1Count = s1Count + frequency1[key]
      }
      // The character is in both strings.
      else {

        // Add the difference of this particular frequency to s1 count. 
        // (ex: s1={a:3} and s2={a:2} need to remove 1 a). 
        s1Count = s1Count + Math.abs(frequency1[key] - frequency2[key]);
      }
    }
  });

  // Set the number of characters that need to be removed from s2 equal to zer.
  let s2Count = 0;

  // For each key in s2 frequency.
  Object.keys(frequency2).forEach(key => {

    // If the character doesn't equal in s1 
    // (we already account for all the chars) in s1 that exist in s2.
    if (frequency1[key] === undefined) {

      // Add the current frequency to s2 count. (ex: s2={b:2} s1 doesn't have b, remove 2 b's).
      s2Count = s2Count + frequency2[key];
    }
  });

  // Return s1 count plus s2 count.
  return s1Count + s2Count;
}