/** 
 * This module tests the electronics shop module.
 */

// Imports.
const testCreator = require('../../lib/test-creator');

// Use the test creator to create the tests with the module name and the test data.
testCreator('electronics-shop',
  [

    {
      input: [

        {
          keyboards: [3, 1],
          drives: [5, 2, 8],
          budget: 10
        }, {
          keyboards: [4],
          drives: [5],
          budget: 5
        }
      ],
      output: [9, -1]
    }
  ]
);