/** 
 * This is a solution to the Viral Advertising Hacerrank problem.
 * 
 * https://www.hackerrank.com/challenges/strange-advertising/problem
 */

// Export the function.
module.exports = viralAdvertising;


/**
 * Calculates the total number of people who receive the ad 
 * based on the number days. The first day 5 people receive 
 * the ad and they share it with the floor of half of their
 * friends. This repeats for n days.
 * @param {Number} n The number of days
 * @return {Number} The number of people who watched the ad.
 */
function viralAdvertising (n) {

  // The total number of people to see the add.
  let result = 0;

  // Set people equal to 5.
  let people = 5;

  // For each day.
  for (let i = 0; i < n; i++) {

    // Set people to half of the current people rounded down.
    people = Math.floor(people / 2);

    // Add the new people to the result.
    result = result + people

    // Multiple people by 3.
    people = people * 3;

  }

  // Return the result.
  return result;
}

console.log('Final Result: ' + viralAdvertising(3))