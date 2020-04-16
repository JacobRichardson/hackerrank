/** 
 * https://www.hackerrank.com/challenges/append-and-delete/problem
 * 
 * This module implements a solution to the append and delete problem
 * from Hackerrank.
 * 
 * Determines if one string can be converted into another string be
 * deleting or appending characters to the end of a string a certain
 * number of times.
 * 
 */

// Export the function.
module.exports = appendAndDelete;

/**
 * Determines if one string can be converted into another string by
 * appending or deleting characters to the end of the string a 
 * certain number of times.
 * @param {String} given The string that is to be transformed.
 * @param {String} desired What the given string needs to be transformed into.
 * @param {Number} numMoves The number of appends or deletes to the end of the
 * string that are allowed to happen.
 * @returns {Boolean} Wether or not the string can be converted.
 */
function appendAndDelete (given, desired, numMoves) {

  // If num moves is even and the strings are equal.
  if (numMoves % 2 === 0 && given === desired) {

    // Return yes.
    return 'Yes';
  }

  // If the length or both strings is less than the number of moves given.
  if (given.length + desired.length < numMoves) {

    // Return yes.
    return 'Yes';
  }

  // Set the delete up to position to be -1.
  let deletedUpToPosition = -1;

  // Set longest length equal to the string with the longest length.
  let longestLength = given.length > desired.length ? given.length : desired.length;

  // For each character in the longest string.
  for (let i = 0; i < longestLength; i++) {

    // If the characters don't match.
    if (desired[i] !== given[i]) {

      // Set delete up till this index.
      deletedUpToPosition = i;

      // End the loop.
      break;
    }
  }

  // Create a copy of given.
  let modifiedGiven = given;

  // Set num moves made equal to zero.
  let numMovesMade = 0;

  // Increment the number of moves made to reflect the deletes.
  numMovesMade = numMovesMade + given.length - deletedUpToPosition;

  // Remove the wrong characters from the end of the string.
  modifiedGiven = given.substring(0, deletedUpToPosition);

  // Increment the number of moves made to reflect the addition of the characters.
  numMovesMade = numMovesMade + desired.length - deletedUpToPosition;

  // Add the rest of the characters onto the given string.
  modifiedGiven = modifiedGiven + desired.substring(deletedUpToPosition, desired.length);

  // If the number of moves made is greater than the number of moves allowed.
  if (numMovesMade > numMoves) {

    // Return no.
    return 'No';
  }

  // If the remaining moves we have to make is even.
  if ((numMoves - numMovesMade) % 2 === 0) {

    // Return yes.
    return 'Yes';
  }

  // Return no.
  return 'No';
}