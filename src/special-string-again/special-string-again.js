/** 
 * This module calculates the number of special sub strings
 * are in a string. A special string is a string where all the 
 * characters are the same or all characters expect the 
 * middle character are the same.
 */

// Export the function.
module.exports = specialString;



/**
 * Calculates the number of special sub strings in a string.
 * @param {String} string The string.
 * @returns {Number} The number of special substrings in a string.
 */
function specialString (string) {

  // If the length of the string is 1.
  if (string.length === 1) {

    // Return 1.
    return 1;
  }

  // Set count equal to the string's length. (each  char is a special string).
  let count = string.length;

  // Set loop equal to 2.
  let loop = 2;

  // Create a char array.
  const charArray = string.split('');

  // Variable for a sub string and the character to compare.
  let substring, testChar;

  // Set should increment to true.
  let shouldIncrement = true;

  // While loop is equal to strings length.
  while (loop <= string.length) {

    // For each char in the char array.
    for (let i = 0; i < charArray.length; i++) {

      // Set sub string equal to starting and index and going loop characters.
      substring = string.substr(i, loop);

      // If the substring is isn't as long as loop.
      if (substring.length !== loop) {

        // Move on.
        continue;
      }

      // Set the test char to the first char in the sub string.
      testChar = charArray[i];

      // For each character in the sub string.
      for (let j = 0; j < substring.length; j++) {

        // If the current char doesn't equal test char.
        if (substring.charAt(j) !== testChar) {

          // If loop is even (the substring length is even).
          if (loop % 2 === 0) {

            shouldIncrement = false;

            // Break out of this loop.
            break;
          }
          // Loop is odd (sub string length is odd) and we are not on the middle character.
          else if (j !== (Math.ceil(substring.length / 2)) - 1) {

            // Set shouldIncrement to false.
            shouldIncrement = false;

            // Break out of this loop.
            break;
          }
        }
        // Characters match.
        else {

          // Set should increment to true.
          shouldIncrement = true;
        }
      }

      // If should increment is true.
      if (shouldIncrement) {


        // Increment count.
        count++;
      }
    }

    // Increment loop.
    loop++;
  }

  // Return count.
  return count;
}