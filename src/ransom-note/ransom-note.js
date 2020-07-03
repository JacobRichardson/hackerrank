/** 
 * Implements a solution to the Ransom Note Hackerrank problem.
 * 
 * https://www.hackerrank.com/challenges/ctci-ransom-note/problem
 */

// Export the function.
module.exports = ransomNote;

/**
 * Determines if the words in the ransom note could have been extracted 
 * from the words in the magazine
 * @param {Array<String>} magazine An array of the words in the magazine.
 * @param {{Array<String>}} note An array of words in the ransom note.
 * @returns
 */
function ransomNote (magazine, note) {

  // Create the hash map for the magazine.
  const magazineHash = {};

  // Create the hash map for the note.
  const noteHash = {};

  // For each word in the magazine.
  for (let word of magazine) {

    // If the word doesn't exist in the hash map.
    if (!magazineHash[word]) {

      // Set the count of that word to 1.
      magazineHash[word] = 1;

    }
    // The world already exists in the hash map.
    else {

      // Increment the count of that word.
      magazineHash[word]++
    }
  }

  // For each word in the magazine.
  for (let word of note) {

    // If the word doesn't exist in the hash map.
    if (!noteHash[word]) {

      // Set the count of that word to 1.
      noteHash[word] = 1;

    }
    // The world already exists in the hash map.
    else {

      // Increment the count of that word.
      noteHash[word]++
    }
  }

  // For each word in note.
  for (let word of note) {

    // If the word doesn't exist in the magazine hash, or it appears less times that it appears in the note.
    if (!magazineHash[word] || magazineHash[word] < noteHash[word]) {

      // Print no.
      console.log("No");

      // Return nothing.
      return;
    }
  }

  // Print yes.
  console.log("Yes");
}