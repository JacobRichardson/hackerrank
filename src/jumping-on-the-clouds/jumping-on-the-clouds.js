/** 
 * This module counts the minimum number of jumps
 * that are required to get to the end of the clouds.
 * This function takes in an array of integers where
 * a 0 equals a cloud that is safe to jump on and where
 * a 1 equals a cloud that can not be jumped on.
 */

// Export the function.
module.exports = jumpingOnTheClouds;

console.log(jumpingOnTheClouds([0, 0, 0, 0, 1, 0]));

/**
 * Counts the minimum number of jumps that need to be taken.
 * @param {Array<Number>} clouds An array of integers where
 * 0 equals safe clouds and 1 equals clouds that can't be
 * jumped on.
 * where U stands for uphill and D stands for down hill.
 * @return {Number} The minimum number of jumps that
 * are required to be taken.
 */
function jumpingOnTheClouds (clouds) {

  // Set the number of double jumps equal to 0.
  let numDoubleJumps = 0;

  // Set the number of single jumps equal to 0.
  let numSingleJumps = 0;

  // For each cloud in clouds.
  for (let i = 0; i < clouds.length; i++) {

    // If the current cloud is undefined.
    if (clouds[i] === undefined) {

      // Move onto the next cloud.
      continue;
    }

    // If 2 clouds ahead is a 0.
    if (clouds[i + 2] === 0) {

      // Increment the number of double jumps by 1.
      numDoubleJumps++;

      // Set the next cloud to undefined because we did a double jump.
      clouds[i + 1] = undefined;
    }
    // If the two clouds ahead is a one.
    else if (clouds[i + 2] === 1) {

      // Increment single jumps by 1.
      numSingleJumps++;
    }

    // If we are at the second to last cloud.
    if (clouds.length - 2 === i) {

      // Increment the number of single jumps
      numSingleJumps++;
    }
  }

  // Return the number of single jumps plus the number of double jumps.
  return numSingleJumps + numDoubleJumps;
}