/** 
 * This module converts a time string from AM 
 * and PM to military time (24H).
 */

// Export the function.
module.exports = timeConversion;

/**
 * Converts an AM/PM time string
 * to a military time string.
 * @param {String} time A AM/PM time string. HH:MM:SS:(AM/PM)
 * @returns {String} The military time HH:MM:SS
 * @throws {Error} If there is no AM or PM in the string.
 */
function timeConversion(time) {

    // If AM and PM are not in the time string.
    if (!time.includes('AM') && !time.includes('PM')) {

        // Throw an error.
        throw new Error('Please provided a string with AM or PM');
    }

    // Variable for the result.
    let result;

    // If the time includes AM.
    if (time.includes('AM')) {

        // Remove AM from the string.
        result = time.replace('AM', '');

        // If the hour is 12.
        if (time.split(':')[0] === '12') {

            // Subtract 12 from the H and add 0 to it.
            result = [(parseInt(result.split(':')[0]) - 12) + "0", result.slice(3, result.length)].join(':');
        }

    }
    // The string does not include AM (includes PM).
    else {

        // Remove PM from the string.
        result = time.replace('PM', '');

        // If the hour does not equal 12.
        if (time.split(':')[0] !== '12') {

            // Add 12 to the H.
            result = [(parseInt(result.split(':')[0]) + 12), result.slice(3, result.length)].join(':');
        }
    }

    // Return the result.
    return result;
}