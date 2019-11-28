/** 
 * This module determines wether or not two kangaroos will
 * meet up at the same position given there initial starting
 * points and their velocities.
 */

// Export the function.
module.exports = kangaroo;

/**
 * Preforms a cesar cipher on a string.
 * @param {Object} opts. The opts object.
 * @param {Number} opts.x1 The first kangaroos starting position.
 * @param {Number} opts.v1 The first kangaroos velocity.
 * @param {Number} opts.x1 The second kangaroos starting position.
 * @param {Number} opts.v1 The second kangaroos velocity.
 * @return {Boolean} Wether or not they meet up.
 */
function kangaroo (opts) {

  // Retrieve values from opts.
  let { x1, v1, x2, v2 } = opts;

  // If the first kangaroos position equals the second kangaroos position.
  if (x1 === x2) {

    // Return true because they match.
    return true;
  }

  // Set position 1 equal to x1.
  let pos1 = x1;

  // Set position 2 equal to x2.
  let pos2 = x2;

  // While true.
  while (true) {

    // Increment position one bu
    pos1 = pos1 + v1;

    // Increment position two by the second' kangaroos velocity.
    pos2 = pos2 + v2;

    // If position 1 and position 2 equal each other.
    if (pos1 === pos2) {

      // Return turn true because they match.
      return true;
    }

    // If the first kangaroos position is less than the second and
    // the first kangaroos velocity is less than or equal to the second's.
    if (pos1 < pos2 && v1 <= v2) {

      // Return false because the first kangaroo will never catch up.
      return false;
    }

    // If the second kangaroos position is less than the first and 
    // the second kangaroos velocity is less than or equal to the second's.
    if (pos2 < pos1 && v2 <= v1) {

      // Return false because the second kangaroo will never catch up.
      return false;
    }
  }
}