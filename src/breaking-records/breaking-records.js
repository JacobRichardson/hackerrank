/** 
 * https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
 * 
 * This module implements a solution to the breaking records problem
 * from Hackerrank.
 * 
 * Determines how many times in a season a new high and a new low was
 * achieved given an array of scores.
 * 
 */

// Export the function.
module.exports = breakingRecords;

/**
 * Determines how many times a new high was a achieved and how many times
 * a new low was achieved.
 * @param {Array<Number>} scores The scores for each game in the season.
 * @returns {Array<Number} How many times a new high was a achieved and how
 * many times a new low was achieved.
 */
function breakingRecords (scores) {


  // Set high and low to the first element of the scores array.
  let high = scores[0];
  let low = scores[0];

  // Set low and high count to be zero.
  let highCount = 0;
  let lowCount = 0;

  // For each score besides the first.
  for (let i = 1; i < scores.length; i++) {

    // If the current score is greater than the highest score found so far.
    if (scores[i] > high) {

      // Set the new high to the current score.
      high = scores[i];

      // Increment high count.
      highCount++;
    }

    // If the current score is less than the lowest score found so far.
    if (scores[i] < low) {

      // Set the new low to the current score.
      low = scores[i];

      // Increment low count.
      lowCount++;
    }
  }

  // Create the result array with the high count and the low count.
  const result = [highCount, lowCount];

  // Return the result array.
  return result;
}