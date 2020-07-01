/**
 * This implements a solution to the Stock Maximize Hackerrank Problem.
 * 
 * https://www.hackerrank.com/challenges/stockmax/problem
 * 
 * Give an array of the future stock price, calculate the maximum amount
 * of profit that can be made. For any given day, there are 3 possible 
 * actions that can be taken. Purchase 1 share of the stock at the current 
 * price, sell any amount of stock, or do nothing. Only 1 action can be
 * taken per day.
 * 
 */

/**
 * Calculates the total amount of profit given the stock price
 * for the future days.
 * @param {Array<Number>} prices The future stock prices of the stock.
 * @returns
 */
function stockMaximize (prices) {

  // An array of our current stock holdings.
  const holdings = [];

  // For each element of the array.
  for (let i = 0; i < prices.length; i++) {

    // Set highest equal to current pice.
    let highest = prices[i];

    // Set index equal to -1.
    let index = -1;

    // For each element in prices starting at the Ith + 1 element.
    for (let j = i + 1; j < prices.length; j++) {

      // If the current price is greater than the highest.
      if (prices[j] > highest) {

        // Set highest equal to the current price.
        highest = prices[j];

        // Set index equal to j.
        index = j;
      }
    }

    // If there is a day where the stock price goes higher.
    if (index > 0) {

      // Create a holding of that stock for the price, today, the sell price, and the sell day.
      holdings.push({
        purchasePrice: prices[i],
        purchaseDay: i,
        sellPrice: prices[index],
        sellDay: index
      });
    }
  }

  // Set total equal to zero.
  let total = 0;

  // For each holding.
  for (let holding of holdings) {

    // Increment total by subtracting the purchase price from the sell price.
    total = total + (holding.sellPrice - holding.purchasePrice);
  }

  // Return the total.
  return total;
}