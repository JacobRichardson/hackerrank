/** 
 * Determine the longest string of alternating characters
 * (two letters repeating over and over ex: abab...) from
 * a given string by removing characters from the string.
 * If a character is removed, all instance of the same
 * character must be removed.
 */

// Export the function.
module.exports = twoCharacters;


/**
 * Determines the longest 2 repeating character string
 * that can be created from the given string.
 * @param {String} s. The given string.
 * @return {Number} The longest 2 repeating character string
 * that can be created.
 */
function twoCharacters (s) {

  // If the length of s is less than 1.
  if (s.length < 1) {

    // Return zero.
    return 0;
  }

  // Create a character frequency hash
  const charFrequency = {};

  // For each character.
  for (let char of s) {

    // If undefined, set that char equal to one; else, increment the count of that char by 1.
    charFrequency[char] = charFrequency[char] === undefined ? charFrequency[char] = 1 : charFrequency[char] + 1
  }

  // Set longest repeating string length equal to zero.
  let longestRepeatingStringLength = 0;

  // Create an array of unique characters.
  const uniqueCharacters = Object.keys(charFrequency);

  // For each unique character.
  for (let charOne of uniqueCharacters) {

    // For each unique character.
    for (let charTwo of uniqueCharacters) {

      // Set removed char string equal to a copy of the original string.
      let removedCharString = s;

      // If the characters are the same.
      if (charOne === charTwo) {

        // Continue to the next character.
        continue;
      }

      // For each char in unique characters.
      for (let char of uniqueCharacters) {

        // If the character is not character one of character two.
        if (char !== charOne && char !== charTwo) {

          // Remove all instances of that character.
          removedCharString = removeAll(removedCharString, char);
        }
      }

      /** 
       * At this point, the removed char string should only
       * have 2 different characters left in the string.
       */

      // If the string is a repeating string and the length of this string is longer than the current longest string.
      if (isTwoCharRepeating(removedCharString) && removedCharString.length > longestRepeatingStringLength) {

        // Set longest repeating string this string's length.
        longestRepeatingStringLength = removedCharString.length;
      }
    }
  }

  // Return the longest repeated string length that was found.
  return longestRepeatingStringLength;
}

/**
 * Removes all instances of a substring from a string.
 * @param {String} string The original string.
 * @param {String} substring The sub string that is to be removed.
 * @returns {String} The string with every instance of that substring removed.
 */
function removeAll (string, substring) {

  // Create the regex.
  const regex = new RegExp(substring, "g");

  // Remove all instances of that char from the string.
  return string.replace(regex, '');
}

/**
 * Determines wether a string is two character repeating or now. This means
 * there are only 2 unique characters in the string and they alternate. Ex:
 * 'ABA' 'CDCDCD'
 * @param {String} string The original string.
 * @returns {Boolean} Wether or not the string is two character repeating.
 */
function isTwoCharRepeating (string) {

  // For each character in the removed char string.
  for (let i = 0; i < string.length; i++) {

    // If i is even and the current character does not equal the first character.
    if (i % 2 == 0 && string.charAt(i) !== string.charAt(0)) {

      //Return false.
      return false;
    }

    // If i is odd and the current character doesn't equal the character at position 1.
    if (i % 2 == 1 && string.charAt(i) !== string.charAt(1)) {

      // Return false.
      return false;
    }
  }

  // Return true.
  return true;
}