/** 
 * This module prints on a staircase
 * of pound signs.
 */

// Export the staircase function.
module.exports = staircase;

/**
 * Prints ouf a staircase.
 * @param {Number} n The size of the staircase.
 */
function staircase(n) {

    // A count to know how many spaces to add on a line.
    let spaceCount = n - 1;

    // A count to know how many # signs to add on a line.
    let poundCount = 1;

    // The staircase result.
    let result = "";

    // For each number before n.
    for (let i = 0; i < n; i++) {

        // For each number before space count.
        for (let j = 0; j < spaceCount; j++) {

            // Add a space on the result.
            result = result + " "
        }

        // For each number before pound count.
        for (let k = 0; k < poundCount; k++) {

            // Add a pound sign.
            result = result + "#";
        }

        // Decrement the space count.
        spaceCount--;

        // Increment the pound count.
        poundCount++;

        // Add a new line and the end of the result.
        result = result + "\n"
    }

    // Return the result.
    return result;
}