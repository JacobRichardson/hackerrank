/** 
 * This module computes the grades of Sam's
 * students. Any grade below a 40 is failing
 * and any grade of 38 will not get rounded.
 * If grades is above 40 and the difference
 * of the grade is less than 3 to the next
 * multiple of 5 it is rounded up to that
 * multiple of 5. 
 */

// Export the function.
module.exports = gradingStudents;

/**
 * Computes students grades by rounding to the nearest
 * multiple of five if the grade is above 38 and the
 * difference between the grade and the next multiple
 * of 5 is less than two.
 * @param {Array<Numbers>} arr An array of numbers.
 * @return {Array<Numbers>} The resulting array
 * of correctly rounded grades.
 */
function gradingStudents (arr) {

  // Let result equal a new array.
  let result = [];

  // For each grade in arr.
  for (let grade of arr) {

    /** 
     * If the grade is greater than or equal to 38 and the remainder
     * of diving the highest multiple of 5 into the grade is greater than 3. 
     */
    if (grade >= 38 && grade % 5 >= 3) {

      // Add the 5 minus the modulo of 5 to the grade and push that into the results array.
      result.push(grade + (5 - (grade % 5)));

    }
    // The grade doesn't have to be rounded.
    else {

      // Push the grade into the results array.
      result.push(grade);
    }
  }

  // Return the result.
  return result;
}