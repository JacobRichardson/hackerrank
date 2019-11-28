/** 
 * This module tests the kangaroo module.
 */

// Imports.
const testCreator = require('../../lib/test-creator');

// Use the test creator to create the tests with the module name and the test data.
testCreator('kangaroo',
  [

    {
      input: [

        {
          x1: 0,
          v1: 3,
          x2: 4,
          v2: 2
        }, {
          x1: 2,
          v1: 1,
          x2: 1,
          v2: 2
        }, {
          x1: 0,
          v1: 2,
          x2: 5,
          v2: 3
        }, {
          x1: 43,
          v1: 2,
          x2: 70,
          v2: 2
        }
      ],
      output: [
        true, true, false, false
      ]
    }
  ]
);