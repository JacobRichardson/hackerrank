/** 
 * This module tests the super reduced string module.
 */

// Imports.
const testCreator = require('../../lib/test-creator');

// Use the test creator to create the tests with the module name and the test data.
testCreator('camel-case',
  [

    {
      input: [
        'saveChangesInTheEditor',
        'test',
        'myFavoriteNumber',
        'aSuperLongVariableNameThatIsUnnecessary'
      ],
      output: [
        5,
        1,
        3,
        8
      ]
    }
  ]
);