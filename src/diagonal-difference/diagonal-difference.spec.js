/** 
 * This module tests the diagonal-difference module.
 */

// Imports.
const test = require('tape');

// Compile test.
test('diagonal difference complies.', (t) => {

    try {

        // Require in the module.
        require('./diagonal-difference');

        // Pass the test because of no errors.
        t.pass('No errors requiring in the diagonal difference module.')

    } catch (e) {

        // Fail the test with the error.
        t.fail(e);
    }

    // End the test.
    t.end();
});

// Test for the function.
test('diagonalDifference()', (t) => {

    try {

        // Require in the module.
        const diagonalDifference = require('./diagonal-difference');

        // Test data.
        const testData = [
            [11, 2, 4],
            [4, 5, 6],
            [10, 8, -12]
        ];

        // The expected result for the given test data.
        const expectedResult = 15;

        // Invoke diagonalDifference with the test data.
        const result = diagonalDifference(testData);

        // Verify the actual result and the expected result are equal.
        t.equal(result, expectedResult, 'The actual result is equal to the expected result.');

    } catch (e) {

        // Fail the test with the error.
        t.fail(e);
    }

    // End the test.
    t.end();
});