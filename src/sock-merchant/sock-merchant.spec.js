/** 
 * This module tests the strong password module.
 */

// Imports.
const testCreator = require('../../lib/test-creator');

// Use the test creator to create the tests with the module name and the test data.
testCreator('sock-merchant',
  [

    {
      input: [
        [],
        [1],
        [1, 2],
        [1, 1],
        [1, 1, 1],
        [10, 20, 20, 10, 10, 30, 50, 10, 20],
        [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]
      ],
      output: [
        0,
        0,
        0,
        1,
        1,
        3,
        4
      ]
    }
  ]
);