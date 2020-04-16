/** 
 * This module tests the breaking records. module.
 */

// Imports.
const testCreator = require('../../lib/test-creator');

// Use the test creator to create the tests with the module name and the test data.
testCreator('breaking-records',
  [

    {
      input: [
        [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]
      ],
      output: [
        [4, 0]
      ]
    },
    {
      input: [
        [10, 5, 20, 20, 4, 5, 2, 25, 1]
      ],
      output: [
        [2, 4]
      ]
    }
  ]
);