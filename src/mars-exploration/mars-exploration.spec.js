/** 
 * This module tests the mars exploration module.
 */

// Imports.
const testCreator = require('../../lib/test-creator');

// Use the test creator to create the tests with the module name and the test data.
testCreator('mars-exploration',
  [{
      input: ['SOS'],
      output: [0]
    },
    {
      input: ['SOSSOS'],
      output: [0]
    },
    {
      input: ['SOSSWW'],
      output: [2]
    },
    {
      input: ['SOSSOSSOSSOSXXXSOSXOS'],
      output: [4]
    }
  ]
);