/** 
 * This module tests the two characters module.
 */

// Imports.
const testCreator = require('../../lib/test-creator');

// Use the test creator to create the tests with the module name and the test data.
testCreator('two-characters',
  [{
      input: ['beabeefeab'],
      output: [5]
    },
    {
      input: ['asdcbsdcagfsdbgdfanfghbsfdab'],
      output: [8]
    },
    {
      input: ['asvkugfiugsalddlasguifgukvsa'],
      output: [0]
    },
    {
      input: ['ABDEFAB'],
      output: [4]
    }
  ]
);