/** 
 * This module tests the super reduced string module.
 */

// Imports.
const testCreator = require('../../lib/test-creator');

// Use the test creator to create the tests with the module name and the test data.
testCreator('super-reduced-string',
  [

    {
      input: [
        'aaabccddd',
        'aa',
        'baab',
      ],
      output: [
        'abd',
        'Empty String',
        'Empty String',
      ]
    }
  ]
);