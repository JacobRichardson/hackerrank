/** 
 * This module tests the game of thrones 1 module.
 */

// Imports.
const testCreator = require('../../lib/test-creator');

// TODO: This doesn't seem to be working properly. I am not sure why.

// Use the test creator to create the tests for the module.
testCreator('game-of-thrones-1', [{
  input: 'abab',
  output: true
}])