/** 
 * This module tests the grading students module.
 */

// Imports.
const testCreator = require('../../lib/test-creator');

// Use the test creator to create the tests with the module name and the test data.
testCreator('grading-students',
  [

    {
      input: [
        [73, 67, 38, 33],
      ],
      output: [
        [75, 67, 40, 33]
      ]
    }
  ]
);