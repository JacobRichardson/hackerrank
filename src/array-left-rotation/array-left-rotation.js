/** 
 * This module preforms a number of left rotations
 * on an array and then returns the modified array.
 */

// Export the function.
module.exports = leftRotation;

/**
 * Preforms a number of left rotations on a given
 * array and returns the modified array.
 * @param {Object} opts. The opts object.
 * @param {Array} opts.array An array that is to be rotated.
 * @param {Number} opts.numRotations The amount of left rotations
 * that is to be preformed on the array.
 * @return {Array} The resulting array after preforming the specified
 * number of left rotations.
 */
function leftRotation (opts) {

  // Retrieve values from opts.
  let { array, numRotations } = opts;

  // If the number of rotations goes into the array's length evenly. 
  if ((array.length / numRotations) === 0) {

    // Return the original array because nothing is going to change.
    return array;
  }

  // The actual number of rotations is just the remainder of 
  // diving the array's length into the number of rotations.
  let realNumRotations = numRotations % array.length;

  // Variable the result array.
  let result = array;

  // Loop counter.
  let i = 0;

  // Variable for a temp.
  let temp;

  // While i is less than the number of real rotations.
  while (i < realNumRotations) {

    // Let temp equal the first element of the array.
    temp = array[0];

    // Remove the first element from the array.
    result.splice(0, 1);

    // Push the first element to the end of the array.
    result.push(temp);

    // Increment i.
    i++;
  }

  // Return result.
  return result;

}