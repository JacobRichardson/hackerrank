/** 
 * This module tests the special string again module.
 */

// Imports.
const testCreator = require('../../lib/test-creator');

// Use the test creator to create the tests with the module name and the test data.
testCreator('special-string-again',
  [

    {
      input: [
        'a', 'aa', 'aaa', 'aba', 'asasd', 'abcbaba', 'aaaa'
      ],
      output: [
        1, 3, 6, 4, 7, 10, 10
      ]
    }
  ]
);