/** 
 * This module tests the array left rotation module.
 */

// Imports.
const testCreator = require('../../lib/test-creator');

// Use the test creator to create the tests with the module name and the test data.
testCreator('array-left-rotation',
  [

    {
      input: [

        {
          array: [1, 2, 3, 4, 5],
          numRotations: 2
        }, {
          array: [1, 2, 3, 4, 5],
          numRotations: 4
        }, {
          array: [4, 7, 8, 2],
          numRotations: 13
        }
      ],
      output: [
        [3, 4, 5, 1, 2],
        [5, 1, 2, 3, 4],
        [7, 8, 2, 4]
      ]
    }
  ]
);