/** 
 * This module tests the making anaragrams module.
 */

// Imports.
const testCreator = require('../../lib/test-creator');

// Use the test creator to create the tests with the module name and the test data.
testCreator('making-anagrams',
  [

    {
      input: [

        {
          string1: 'abc',
          string2: 'ab'
        }, {
          string1: 'cde',
          string2: 'abc'
        }, {
          string1: 'fcrxzwscanmligyxyvym',
          string2: 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'
        }, {
          string1: 'showman',
          string2: 'woman'
        }, {
          string1: 'abcde',
          string2: 'abcde'
        }, {
          string1: 'aabbcc',
          string2: 'bbaacc'
        }, {
          string1: 'aaaabbcc',
          string2: 'bbcc'
        }, {
          string1: 'bbccee',
          string2: 'aabbccee'
        }
      ],
      output: [
        1, 4, 30, 2, 0, 0, 4, 2
      ]
    }
  ]
);