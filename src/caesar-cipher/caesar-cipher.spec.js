/** 
 * This module tests the caesar chiper module.
 */

// Imports.
const testCreator = require('../../lib/test-creator');

// Use the test creator to create the tests with the module name and the test data.
testCreator('caesar-cipher',
  [

    {
      input: [

        {
          string: 'There\'s-a-starman-waiting-in-the-sky',
          shift: 3
        },
        {
          string: 'middle-Outz',
          shift: 2
        },
        {
          string: 'Always-Look-on-the-Bright-Side-of-Life',
          shift: 5
        }, {
          string: 'Hello World!',
          shift: -1
        },
        {
          string: 'Hello World!',
          shift: 0
        },
        {
          string: 'Hello World!',
          shift: 26
        }, {
          string: 'Hello World!',
          shift: 27
        }, {
          string: 'Hello World!',
          shift: -26
        }, {
          string: 'Hello World!',
          shift: -27
        }
      ],
      output: [
        'Wkhuh\'v-d-vwdupdq-zdlwlqj-lq-wkh-vnb',
        'okffng-Qwvb',
        'Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj',
        'Gdkkn Vnqkc!',
        'Hello World!',
        'Hello World!',
        'Ifmmp Xpsme!',
        'Hello World!',
        'Ifmmp Xpsme!'
      ]
    }
  ]
);