/** 
 * This module tests the time conversion module.
 */

// Imports.
const testCreator = require('../../lib/test-creator');

// Use the test creator to create the tests with the module name and the test data.
testCreator('time-conversion',
    [

        {
            input: [
                '06:00:30AM',
                '12:05:39AM',
                '07:05:45PM',
                '12:05:21PM'

            ],
            output: [
                '06:00:30',
                '00:05:39',
                '19:05:45',
                '12:05:21'
            ]
        }
    ]
);