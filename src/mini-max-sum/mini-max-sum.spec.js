/** 
 * This module tests the staircase module.
 */

// Imports.
const test = require('tape');

// Compile test.
test('mini max sum complies.', (t) => {

    try {

        // Require in the module.
        require('./mini-max-sum');

        // Pass the test because of no errors.
        t.pass('No errors requiring in the mini max sum module.')

    } catch (e) {

        // Fail the test with the error.
        t.fail(e);
    }

    // End the test.
    t.end();
});

// Test for the function.
test('miniMaxSum()', (t) => {

    try {

        // Require in the module.
        const miniMaxSum = require('./mini-max-sum');

        // Test data.
        const testData = [1, 2, 3, 4, 5];

        // The expected result for the given test data.
        const expectedResult = '10 14';

        // Invoke miniMaxSum with the test data.
        const result = miniMaxSum(testData);

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
test('miniMaxSum()', (t) => {

    try {

        // Require in the module.
        const miniMaxSum = require('./mini-max-sum');

        // Test data.
        const testData = [396285104, 573261094, 759641832, 819230764, 364801279];

        // The expected result for the given test data.
        const expectedResult = '2093989309 2548418794';

        // Invoke miniMaxSum with the test data.
        const result = miniMaxSum(testData);

        // Verify the actual result and the expected result are equal.
        t.equal(result, expectedResult, 'The actual result is equal to the expected result.');

    } catch (e) {

        // Fail the test with the error.
        t.fail(e);
    }

    // End the test.
    t.end();
});