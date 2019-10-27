/** 
 * This module tests the birthday cake candles module.
 */

// Imports.
const testCreator = require('../../lib/test-creator');

// Use the test creator to create the tests with the module name and the test data.
testCreator('birthday-cake-candles',
    [

        {
            input: [
                [3, 2, 1, 3],
                [1, 1, 1, 1],
                [1, 7, 8, 9, 12, 9, 3, 2, 4, 12, 9, 12, 10, 7, 12, 12, 7, 6]
            ],
            output: [
                2,
                4,
                5
            ]
        }
    ]
);