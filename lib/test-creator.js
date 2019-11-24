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

                    // If the type of the expected output doesn't match the type of the result.
                    if (typeof(expectedOutput) != typeof(result)) {

                        // Fail the test.
                        t.fail('The type of the expected output and the acutal result don\'t match');
                    }

                    // If the expected output is an object.
                    if (typeof(expectedOutput) === 'object' ) {

                        // If the number of the keys aren't the same.
                        if (Object.keys(expectedOutput).length != Object.keys(result).length) {

                            // Fail the test.
                            t.fail('The number of keys don\'t match on the expected result and the actual result.');
                        }

                        // For each key on the expected output.
                        Object.keys(expectedOutput).forEach((key) => {

                            // Verify the actual key matches the key on the result.
                            t.equal(result[key], expectedOutput[key], 'Keys and values match.');
                        });
                    } 
                    // If the expected output is an array.
                    else if (Array.isArray(expectedOutput)) {
                        
                        // If the length of the expected output and the result don't equal.
                        if (expectedOutput.length != result.length) {

                            // Fail the test.
                            t.fail('The length of the output doesn\'t match the result');
                        }

                        // For each value in the expected output.
                        expectedOutput.forEach((value, index) => {

                            // Verify the acutal value matches the expected value.
                            t.equal(result[index], value, 'Values match.');
                        });
                        
                    } 
                    // The result isn't an object or an array.
                    else {

                        // Verify the actual output equals the expected output.
                        t.equal(result, expectedOutput, 'The actual result is equal to the expected result.');
                    }
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