/** 
 * This module counts the number of occurrences
 * of a letter in a string that is repeated to
 * be a certain length.
 */

// Export the function.
module.exports = repeatedString;

/**
 * Counts the number of characters in a repeated string
 * of a given length.
 * @param {Object} opts An opts object.
 * @param {String} opts.string The string that is to be repeated.
 * @param {Number} opts.length The length of the repeated string.
 * @return {Number} The number of times a character is in
 * a repeated string of a given length.
 */
function repeatedString (opts) {

  // Retrieve the string and length from opts.
  let { string, length } = opts;

  // Variable for the character that is to be counted in the repeated string.
  const COUNTED_CHARACTER = 'a';

  // If the counted character doesn't exist in the string.
  if (string.indexOf(COUNTED_CHARACTER) < 0) {

    // Return zero (it will never appear in the repeated string).
    return 0;
  }

  // If the string is just the character we are counting.
  if (string === COUNTED_CHARACTER) {

    // Return the length because that is how many times the char will show up in the repeated string.
    return length;
  }

  // Set char count in base string equal to zero.
  let charCountInBaseString = 0;

  // For each character in the string.
  for (let char of string) {

    // If the current character is the character we are counting.
    if (char === COUNTED_CHARACTER) {

      // Increment char count.
      charCountInBaseString++;
    }
  }

  // If the string is repeated with no partial characters at the end.
  if (length % string.length === 0) {

    // Return the length divided by the repeated strings length times
    // the number of times the counted character appears in the repeated string.
    return (length / string.length) * charCountInBaseString;
  }

  // Set count equal to the length of the repeated string divided by the string's length rounded down 
  // multiplied by the number of characters we are counted in 1 of the strings.
  let count = Math.floor(length / string.length) * charCountInBaseString;

  // How many partial characters from the string will be at the end of the repeated string.
  let remandingCharacters = length % string.length;

  // Set i equal to 0.
  let i = 0;

  // While i is less than the remanding characters.
  while (i < remandingCharacters) {

    // If the character is the character we are counting.
    if (string.charAt(i) === COUNTED_CHARACTER) {

      // Increment the count.
      count++;
    }

    // Increment i.
    i++;
  }

  // Return count.
  return count;
}