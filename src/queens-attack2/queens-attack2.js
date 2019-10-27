/** 
 * This module calculates the number of squares a queen
 * can attack on a chessboard on any size n x n board and
 * considering obstacles that can be placed.
 */

// Export the function.
module.exports = queensAttack;

/**
 * This function calculates the number of possible positions a queen
 * can attack on a n x n chessboard considering obstacles that can
 * be placed on the board.
 * @param {Object} opts The object that contains all the parameters.
 * @param {Number} opts.boardSize The number of rows and columns.
 * @param {Number} opts.numObstacles The number of obstacles.
 * @param {Number} opts.rowQueenPOS The row number of where the queen is.
 * @param {Number} opts.colQueenPos The column number of where the queen is.
 * @param {Array<Array><Number>} opts.obstacles An array of arrays of each length 2 containing
 * 2 numbers which are the coordinates of the individual obstacle.
 * @return {Number} The number of positions the queen can attack.
 */
function queensAttack(opts) {

    // Set opts equal to what was passed in or am empty object.
    opts = opts || {};

    // Retrieve the parameters from opts.
    let {
        boardSize,
        numObstacles,
        rowQueenPOS,
        colQueenPos,
        obstacles
    } = opts;

    // If board size is less than zero.
    if (boardSize < 0) {

        // Throw an error.
        throw new Error('Board size cannot be negative.');
    }

    // If the queen's position is larger than the board size of the position is negative.
    if (rowQueenPOS > boardSize || rowQueenPOS < 0 || colQueenPos > boardSize || colQueenPos < 0) {

        //Throw an error.
        throw new Error('The queen must be on the board.');
    }

    /** 
     * Trivial cases.
     */

    // If the board size is zero or it is 1.
    if (boardSize === 0 || boardSize === 1) {

        // There are no possible attacks so return zero.
        return 0;
    }
    // If the board size is 2.
    else if (boardSize === 2) {

        // If there number of obstacles is 3 or greater.
        if ((numObstacles || obstacles.length) > boardSize) {

            // Return zero because there are only 4 positions on a 2x2 chessboard
            // and with 3 obstacles the queen will be taking up the last position
            // giving her no possible attacks.
            return 0;
        }
        // The number of obstacles is 2 or less.
        else {

            // Return 3 minus of the number of obstacles because on a 2x2 chessboard
            // the obstacles cannot block extra squares then the one they are sitting
            // on. The queen taking up a position herself leaving only 3 possible attacks
            // remaining; therefore, subtracting the number of obstacles from 3 will give
            // the possibilities the queen has to attack.
            return 3 - (numObstacles || obstacles.length);
        }
    }

    /** 
     * The board is greater than size two.
     */

    // Variable for the number of possible attacks. This is what is going to be returned.
    let numPossibleAttacks;

    //TODO: Implement solution here.

    // Return possible Attacks
    return numPossibleAttacks;
}