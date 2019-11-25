/** 
 * This module tests the super reduced string module.
 */

// Imports.
const testCreator = require('../../lib/test-creator');

// Use the test creator to create the tests with the module name and the test data.
testCreator('jumping-on-the-clouds',
  [

    {
      input: [
        [0, 0, 1, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]

      ],
      output: [
        4,
        3,
        6
      ]
    }
  ]
);