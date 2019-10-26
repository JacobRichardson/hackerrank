/** 
 * This module compute the maximum sum and
 * and the minimum sum of an array of integers
 * using n - 1 elements of the array.
 */

// Export the function.
module.exports = miniMaxSum;

/**
 * Computes the minimum sum and the 
 * maximum sum using n - 1 elements
 * of the array.
 * @param {Array<Numbers>} arr An array of numbers.
 * @return {String} A string of the minimum sum 
 * and the maximum sum separated by a space.
 */
function miniMaxSum(arr) {

    // The result string.
    let result;

    // Variable for the lowest number found.
    let lowest = arr[0];

    // Variable for the highest number found.
    let highest = arr[0];

    // Variable for the total sum of the array.
    let sum = 0;

    // Loop through the array.
    for (let i = 0; i < arr.length; i++) {

        // If the current number is less than the current lowest.
        if (arr[i] < lowest) {

            // Set lowest to this new smaller number.
            lowest = arr[i];
        }

        // If the current number is greater than the current lowest.
        if (arr[i] > highest) {

            // Set the highest to this new bigger number.
            highest = arr[i];
        }

        // Set sum equal to what it was before and the current element.
        sum = sum + arr[i];
    }

    // Set result equal to the sum minus the highest number and the sum minus the lowest number.
    result = `${sum - highest} ${sum - lowest}`

    // Return the result.
    return result;
}