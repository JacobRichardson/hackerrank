/** 
 * This module tests the apple oranges module.
 */

// Imports.
const testCreator = require('../../lib/test-creator');

// Use the test creator to create the tests with the module name and the test data.
testCreator('apple-oranges',
  [

    {
      input: [

        {
          houseStart: 7,
          houseEnd: 11,
          appleTree: 5,
          orangeTree: 15,
          apples: [-2, 2, 1],
          oranges: [5, -6]
        }, {
          houseStart: 2,
          houseEnd: 8,
          appleTree: 1,
          orangeTree: 12,
          apples: [-2, -5, 10, 1, 5, -7],
          oranges: [5, 100, 4, -6, -1, -4, -5, -100]
        }
      ],
      output: [

        {
          appleCount: 1,
          orangeCount: 1
        }, {
          appleCount: 2,
          orangeCount: 3
        }
      ]
    }
  ]
);