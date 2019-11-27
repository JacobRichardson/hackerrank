/** 
 * This module preforms a caesar cipher on a string which means
 * it takes in a number which determines how far to shift the
 * alphabet in order to map encode the characters.
 */

// Export the function.
module.exports = cesarCipher;

/**
 * Preforms a cesar cipher on a string.
 * @param {Object} opts. The opts object.
 * @param {Array} opts.string The string that is to be encoded.
 * @param {Number} opts.shift The amount to shift the alphabet by.
 * @return {Array} The resulting array after preforming the specified
 * number of left rotations.
 */
function cesarCipher (opts) {

  // Retrieve string and shift from opts.
  let { string, shift } = opts;

  // If shift is 0, 26 or -26.
  if (shift === 0 || shift === 26 || shift === -26) {

    // Return the string.
    return string;
  }
  // If the shift is less than -26.
  else if (shift < -26) {

    // Set shift equal to the remainder of diving 26 into the positive shift.
    shift = (shift * -1) % 26
  }
  // If the shift is less than zero but greater than -26.
  else if (shift < 0) {

    // A negative shift is the same as 26 added to the shift (the inverse ex: -1 = 25).
    shift = 26 + shift;

  }
  // If the shift is greater than 26.
  else if (shift > 26) {

    // Set shift equal to the remainder of diving 26 into the shift.
    shift = shift % 26;
  }

  // Set result to an empty string.
  let result = '';

  // Create a character array.
  let charArray = string.split('');

  // Variable for the char code.
  let charCode;

  // For each character in the string.
  charArray.forEach((char, index) => {

    // Set the char code equal to the current char we are working on.
    charCode = string.charCodeAt(index);

    // If the char code is a capital alphabet character.
    if (charCode >= 65 && charCode <= 90) {

      // If adding the shift to the char code causes it to be greater than 90.
      if ((charCode + shift) > 90) {

        // Set char code equal to the char code plus the shift minus 90 and add that to 64.
        charCode = 64 + ((charCode + shift) - 90);
      }
      // No overflow by adding shift.
      else {

        // Set char code equal to what it was before adding on the shift.
        charCode = charCode + shift;
      }
    }
    // If the char code is a lowercase alphabet character.
    else if (charCode >= 97 && charCode <= 122) {

      // If adding the shift to the char code causes it be greater than 122.
      if ((charCode + shift) > 122) {

        // Set char code equal to the char code plus the shift minus 122 and add that to 96;
        charCode = 96 + ((charCode + shift) - 122);
      }
      // No overflow by adding shift.
      else {

        // Set char code equal to what it was before adding on the shift.
        charCode = charCode + shift;
      }
    }


    // Add the character onto the result.
    result = result + String.fromCharCode(charCode);
  });

  // Return result.
  return result;
}