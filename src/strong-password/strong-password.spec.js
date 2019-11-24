/** 
 * This module tests the strong password module.
 */

// Imports.
const testCreator = require('../../lib/test-creator');

// Use the test creator to create the tests with the module name and the test data.
testCreator('strong-password',
  [

    {
      input: [
        'Ab1',
        '#HackerRank',
        'aB1@',
        'ABBBB',
        'aB1@aB1@',
        '@@',
        'a',
        ''
      ],
      output: [
        3,
        1,
        2,
        3,
        0,
        4,
        5,
        6
      ]
    }
  ]
);