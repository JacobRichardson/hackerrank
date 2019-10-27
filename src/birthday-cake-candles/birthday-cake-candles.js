/** 
 * This module will calculate the number
 * of birthday candles that the birthday
 * person will be able to blow out.
 */

// Export the function.
module.exports = birthdayCandles;

/**
 * Calculates the number of candles that will be able to be blown out.
 * This is how many of the tallest candle there are.
 * @param {Array<Numbers} arr An array of numbers.
 * @returns {Number} The number of the tallest candles that
 * will be able to be blown out.
 */
function birthdayCandles(arr) {

    // Create a hash map.
    const hashmap = {};

    // Set the highest height equal to the first element.
    let highest = arr[0];

    // For each element in the array.
    for (let i = 0; i < arr.length; i++) {

        // If this number is already in the hashmap.
        if (hashmap[arr[i]]) {

            // Increment the value by 1.
            hashmap[arr[i]]++;
        }
        // The number isn't in the hashmap already.
        else {

            // Set the hashmap of that value to be 1.
            hashmap[arr[i]] = 1;
        }

        // If the current element is greater than the current highest.
        if (arr[i] > highest) {

            // Set highest to the current element.
            highest = arr[i];
        }
    }

    // Return the value of the highest number in the hashmap.
    return hashmap[highest];
}