/** 
 * This module tests the super reduced string module.
 */

// Imports.
const testCreator = require('../../lib/test-creator');

// Use the test creator to create the tests with the module name and the test data.
testCreator('counting-valleys',
  [

    {
      input: [
        'UDDDUDUU',
        'DDUUDDUDUUUD',
        'UUUUU',
        'DDDD',
        'UDUD',
        'DUDDDDDDDDDDDD',
        'UUDDDUDUDUDUD'
      ],
      output: [
        1,
        2,
        0,
        1,
        0,
        2,
        5
      ]
    }
  ]
);