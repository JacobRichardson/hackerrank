/** 
 * This module creates basic tests
 * for a module.
 */

// Imports.
const tape = require('tape');

// Export the test creator function.
module.exports = testCreator;

/**
 * This function creates a compile test for
 * the module and creates test for all the 
 * test data.
 * @param {String} moduleName The module's name.
 * @param {Array<Objects>} testData An array of objects.
 * @param {Array} testData.input An array of inputs for the module.
 * @param {Array} testData.outputs An array of outputs for the module.
 */
function testCreator(moduleName, testData) {

    // Create the compile test.
    tape(`${moduleName} complies.`, (t) => {

        try {

            // Require in the module in src/moduleName/moduleName.
            require(`../src/${moduleName}/${moduleName}`);

            // Pass the test because of no error.
            t.pass(`No error requiring in ${moduleName}`);


        } catch (e) {

            // Fail the test with the error.
            t.fail(e);
        }

        // End the test.
        t.end();
    });

    // Variables.
    let moduleFunction, input, expectedOutput, result;

    // For each test in testData.
    for (let test of testData) {

        // For each input in the test's input array.
        for (let i = 0; i < test.input.length; i++) {

            // Testing the module.
            tape(`${moduleName}()`, (t) => {

                try {

                    // Require in the module in src/moduleName/moduleName.
                    moduleFunction = require(`../src/${moduleName}/${moduleName}`);

                    // Retrieve the tests input.
                    input = test.input[i];

                    // Retrieve the expected output.
                    expectedOutput = test.output[i];

                    // Set result equal to the return of the function with the input.
                    result = moduleFunction(input);

                    // Verify the actual output equals the expected output.
                    t.equal(result, expectedOutput, 'The actual result is equal to the expected result.');

                } catch (e) {

                    // Fail the test with the error.
                    t.fail(e);
                }

                // End the test.
                t.end();
            });
        }
    }
}