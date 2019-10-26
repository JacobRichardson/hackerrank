/** 
 * This module tests the staircase module.
 */

// Imports.
const test = require('tape');

// Compile test.
test('staircase complies.', (t) => {

    try {

        // Require in the module.
        require('./staircase');

        // Pass the test because of no errors.
        t.pass('No errors requiring in the staircase module.')

    } catch (e) {

        // Fail the test with the error.
        t.fail(e);
    }

    // End the test.
    t.end();
});

// Test for the function.
test('staircase()', (t) => {

    try {

        // Require in the module.
        const staircase = require('./staircase');

        // Test data.
        const testData = 4;

        // The expected result for the given test data.
        const expectedResult = '   #\n  ##\n ###\n####\n';

        // Invoke staircase with the test data.
        const result = staircase(testData);

        // Verify the actual result and the expected result are equal.
        t.equal(result, expectedResult, 'The actual result is equal to the expected result.');

    } catch (e) {

        // Fail the test with the error.
        t.fail(e);
    }

    // End the test.
    t.end();
});

// Test for the function.
test('staircase()', (t) => {

    try {

        // Require in the module.
        const staircase = require('./staircase');

        // Test data.
        const testData = 5;

        // The expected result for the given test data.
        const expectedResult = '    #\n   ##\n  ###\n ####\n#####\n';

        // Invoke staircase with the test data.
        const result = staircase(testData);

        // Verify the actual result and the expected result are equal.
        t.equal(result, expectedResult, 'The actual result is equal to the expected result.');

    } catch (e) {

        // Fail the test with the error.
        t.fail(e);
    }

    // End the test.
    t.end();
});