/** 
 * This module determines the minimum number of
 * characters that are needed to be added to a
 * password to make it a strong password. In order
 * to be a strong password the password must contain
 * a digit, lowercase, uppercase, 1 special character, 
 * and must be 6 characters or longer.
 */

// Export the function.
module.exports = strongPassword;

/**
 * Returns the number of characters that need to be added
 * to a password in order to make it a strong password.
 * @param {String} password The password.
 * @return {Number} The number characters that need to be added
 * to the password in order to make it a strong password.
 */
function strongPassword (password) {

  // A strong passwords minimum length.
  const MINIMUM_PASSWORD_LENGTH = 6;

  // Variables for the possible values in the password.
  let numbers = "0123456789"
  let lowercase = "abcdefghijklmnopqrstuvwxyz"
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let specialCharacters = "!@#$%^&*()-+"

  // For each character in password.
  for (let char of password) {

    // If numbers is still a string and numbers includes the current char.
    if (typeof (numbers) === 'string' && numbers.includes(char)) {

      // Set numbers equal to zero (a number was found).
      numbers = 0;
    }

    // If lowercase is still a string and lowercase includes the current char.
    if (typeof (lowercase) === 'string' && lowercase.includes(char)) {

      // Set lowercase equal to zero (a lowercase character was found).
      lowercase = 0;
    }

    // If uppercase is still a string and uppercase includes the current char.
    if (typeof (uppercase) === 'string' && uppercase.includes(char)) {

      // Set uppercase equal to zero (a uppercase character was found).
      uppercase = 0;
    }

    // If special characters is still a string and special characters includes the current char.
    if (typeof (specialCharacters) === 'string' && specialCharacters.includes(char)) {

      // Set special characters equal to zero (a special character was found).
      specialCharacters = 0;
    }
  }

  // Set numbers equal to zero if it is already zero or set it equal to 1 if it isn't zero.
  numbers = numbers === 0 ? 0 : 1;

  // Set lowercase equal to zero if it is already zero or set it equal to 1 if it isn't zero.
  lowercase = lowercase === 0 ? 0 : 1;

  // Set uppercase equal to zero if it is already zero or set it equal to 1 if it isn't zero.
  uppercase = uppercase === 0 ? 0 : 1;

  // Set specialCharacters equal to zero if it is already zero or set it equal to 1 if it isn't zero.
  specialCharacters = specialCharacters === 0 ? 0 : 1;

  // Set the number of characters needed to be added equal to all the missing characters added up.
  let numAddedCharacters = numbers + lowercase + uppercase + specialCharacters;

  // If the password is less than the minimum length and the number of characters needed to be added is less than
  // the number of characters that needed to be added due to length
  if (password.length < MINIMUM_PASSWORD_LENGTH && numAddedCharacters < (MINIMUM_PASSWORD_LENGTH - password.length)) {

    // Return how many charracters needed to be added due to length.
    return (MINIMUM_PASSWORD_LENGTH - password.length);
  }
  // More characters are needed ro be added because of type rather than length.
  else {

    // Return the number of characters needed to be added due to type.
    return numAddedCharacters
  }
}