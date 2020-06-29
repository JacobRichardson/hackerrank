/** 
 * Implements a solution to the library fine Hackerrank problem.
 * 
 * https://www.hackerrank.com/challenges/library-fine/problem
 */

// Export the library fine function.
module.exports = libraryFine;


/**
 * Calculates the library fine for a book based on
 * the day it was due and the day it was returned.
 * @param {Number} d1 Day of the month the book was returned.
 * @param {Number} m1 The month the book was returned.
 * @param {Number} y1 The year the book was returned.
 * @param {Number} d2 Day of the month the book was due.
 * @param {Number} m2 The month the book was due.
 * @param {Number} y2 The year the book was due.
 * @return {Number} The fine amount.
 */
function libraryFine (d1, m1, y1, d2, m2, y2) {


  // If the return date is earlier than the due date.
  if (y1 < y2 || y1 <= y2 && m1 < m2 || y1 <= y2 && m1 <= m2 && d1 <= d2) {

    // Return 0.
    return 0;
  }

  // If the book is returned late in the same month.
  if (d2 < d1 && m1 === m2 && y1 === y2) {

    // Return 15 Hackos for each day late.
    return (d1 - d2) * 15;
  }

  // If the book is in the next month, but in the same year.
  if (m2 < m1 && y1 === y2) {

    // Return 500 Hackos for each month late.
    return (m1 - m2) * 500;
  }

  // If the book is returned in the next year when it was due.
  if (y2 < y1) {

    // Return a fine of 10,000 Hackos
    return 10000;
  }

}
console.log(libraryFine(2, 7, 1014, 1, 1, 1014));