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

    // Set the number of upwards moves equal to the board size minus the row the queen is on.
    let numUpwards = boardSize - rowQueenPOS;

    // Set the number of downward moves equal to the board size minus the number of 
    // upward moves minus 1. (Account for the queen herself).
    let numDownwards = boardSize - numUpwards - 1;

    // Set the number of rightward moves equal to the board size minus the col the queen is on.
    let numRightwards = boardSize - colQueenPos;

    // Set the number of leftward moves equal to the board size minus the number of 
    // rightward moves minus 1. (Account for the queen herself).
    let numLeftwards = boardSize - numRightwards - 1;

    // For each obstacle in obstacles.
    for (let obstacle of obstacles) {

        // If first element (row) is greater then the queens row (the obstacle is above the queen)
        // and the second element (col) in obstacle is equal to the queens column and the row minus
        // the queens row minus 1 is greater than the current number of upward moves.
        if (obstacle[0] > rowQueenPOS && obstacle[1] === colQueenPos && (obstacle[0] - rowQueenPOS - 1) < numUpwards) {

            // Set the number of upwards moves equal to the row of the obstacle minus the queen's row minus 1.
            numUpwards = obstacle[0] - rowQueenPOS - 1;
        }

        // If first element (row) is less then the queens row (the obstacle is below the queen)
        // and the second element (col) in obstacle is equal to the queens column and the queens row
        // minus the row minus 1 is greater than the current number of downward moves.
        if (obstacle[0] < rowQueenPOS && obstacle[1] === colQueenPos && (rowQueenPOS - obstacle[0] - 1) < numDownwards) {

            // Set the number of downward moves equal to the row of the obstacle minus the queen's row minus 1.
            numDownwards = rowQueenPOS - obstacle[0] - 1;
        }

        // If the second element (col) is greater than the queens col (the obstacle is to the right of the queen)
        // and the first element (row) in obstacle is equal to the queens row and the column minus 
        // the queens col minus 1 is greater than the current number of rightward moves.
        if (obstacle[1] > colQueenPos && obstacle[0] === rowQueenPOS && (obstacle[1] - colQueenPos - 1) < numRightwards) {

            // Set the number of rightwards moves equal to the col of the obstacle minus the queen's col minus 1.
            numRightwards = obstacle[1] - colQueenPos - 1;

        }

        // If the second element (col) is less than the queens col (the obstacle is to the left of the queen)
        // and the first element (row) in obstacle is equal to the queens row and the column minus 
        // the queens col minus 1 is greater than the current number of leftward moves.
        if (obstacle[1] < colQueenPos && obstacle[0] === rowQueenPOS && (obstacle[1] - colQueenPos - 1) < numLeftwards) {

            // Set the number of rightwards moves equal to the col of the obstacle minus the queen's col minus 1.
            numLeftwards = colQueenPos - obstacle[1] - 1;
        }

        // TODO: Implement Diagonal. Might be able to tell diagonal if the have the same two points have the same slope.
    }

    // If num upwards is less than zero set it equal to zero.
    numUpwards = numUpwards < 0 ? 0 : numUpwards;

    // If num downwards is less than zero set it equal to zero.
    numDownwards = numDownwards < 0 ? 0 : numDownwards;

    // If num rightwards is less than zero set it equal to zero.
    numRightwards = numRightwards < 0 ? 0 : numRightwards;

    // If num leftwards is less than zero set it equal to zero.
    numLeftwards = numLeftwards < 0 ? 0 : numLeftwards;

    // Set number of possible attacks equal to the upward moves added to downward moves.
    numPossibleAttacks = numUpwards + numDownwards + numLeftwards + numRightwards;

    // Return possible Attacks
    return numPossibleAttacks;
}