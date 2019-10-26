/** 
 * This module computes the absolute value
 * of the diagonal different of a 2D array.
 */


// Export the diagonal difference function.
module.exports = diagonalDifference;

/**
 * Computes the absolute value of
 * the difference of the diagonals
 * in a 2D array.
 * @param {Array} arr a square 2D array.
 */
function diagonalDifference(arr) {

    // Set length to the first array's length.
    let length = arr[0].length;

    // For each array in the given arrays.
    for (let ar of arr) {

        // If the current array's length doesn't match the length (it isn't a square 2D array).
        if (ar.length !== length) {

            // Return.
            throw new Error('A square 2D array must be provided.');
        }
    }


    // Sum of the left to right diagonal.
    let lrDiag = 0;

    // Sum of the right to left diagonal.
    let rlDiag = 0;

    // For each arrary in the arrays passed in.
    for (let i = 0; i < arr.length; i++) {

        // For each element in the array.
        for (let j = 0; j < arr[i].length; j++) {

            // If i and j are equal.
            if (i === j) {
                // We are on the main diag (lr); add this value to the lrdiag sum.
                lrDiag = lrDiag + arr[i][j];
            }

            // If j is equal to the length of the arry minus the count.
            if (j === (arr[i].length - i - 1)) {

                // We are on the rl diag. add this value to the rldiag sum.
                rlDiag = rlDiag + arr[i][j];
            }
        }
    }

    // Return the absolute value of the difference of the two diagonals. 
    return Math.abs(lrDiag - rlDiag);
}