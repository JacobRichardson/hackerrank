/** 
 * This module tests the repeated string module.
 */

// Imports.
const testCreator = require('../../lib/test-creator');

// Use the test creator to create the tests with the module name and the test data.
testCreator('repeated-string',
  [

    {
      input: [

        {
          string: 'aba',
          length: 10
        }, {
          string: 'a',
          length: 1000000000000
        }, {
          string: 'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm',
          length: 736778906400
        }

      ],
      output: [
        7,
        1000000000000,
        51574523448
      ]
    }
  ]
);