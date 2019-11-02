/** 
 * This module tests the queens attack 2 module.
 */

// Imports.
const testCreator = require('../../lib/test-creator');

// Use the test creator to create the tests with the module name and the test data.
testCreator('queens-attack2',
    [

        {
            input: [

                {
                    boardSize: 0,
                    numObstacles: 0,
                    rowQueenPOS: 0,
                    colQueenPos: 0,
                    obstacles: []
                },
                {
                    boardSize: 1,
                    numObstacles: 0,
                    rowQueenPOS: 1,
                    colQueenPos: 1,
                    obstacles: []
                }, {
                    boardSize: 2,
                    numObstacles: 3,
                    rowQueenPOS: 1,
                    colQueenPos: 1,
                    obstacles: [
                        [1, 2],
                        [2, 1],
                        [2, 2]
                    ]
                },
                {
                    boardSize: 2,
                    numObstacles: 2,
                    rowQueenPOS: 2,
                    colQueenPos: 2,
                    obstacles: [
                        [1, 1],
                        [2, 1],
                    ]
                },
                {
                    boardSize: 2,
                    numObstacles: 1,
                    rowQueenPOS: 1,
                    colQueenPos: 2,
                    obstacles: [
                        [1, 1]
                    ]
                },
                {
                    boardSize: 2,
                    numObstacles: 0,
                    rowQueenPOS: 1,
                    colQueenPos: 2,
                    obstacles: []
                },
                {
                    boardSize: 5,
                    numObstacles: 3,
                    rowQueenPOS: 3,
                    colQueenPos: 3,
                    obstacles: [
                        [5, 3],
                        [2, 3],
                        [3, 2],
                    ]
                }
            ],
            output: [
                0,
                0,
                0,
                1,
                2,
                3,
                3 // TODO: Change once diagonals are accounted for.
            ]
        }
    ]
);