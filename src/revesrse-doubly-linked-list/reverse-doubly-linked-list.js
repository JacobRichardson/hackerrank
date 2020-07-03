/** 
 * Implements a solution to the reverse doubly linked list problem.
 * 
 * https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list/problem
 */


/**
 * Given the head of a current doubly linked list,
 * it reverses the list.
 * @param {Object} head The head of the list.
 * @param {Object} head.next The next node in the list.
 * @param {Object} head.prev The prev node in the list.
 * @param {*} head.data The data of the node.
 * @returns {Object} The head of the reversed list.
 */
function reverseDoublyLinkedList (head) {

  // Set node equal to the head.
  let node = head;

  // While there is a next node.
  while (node.next) {

    // Set node equal to the next node.
    node = node.next;
  }

  // We have reached the end of the list, so the current node is the tail.
  const tail = node;

  // Set node equal to the tail's previous node.
  node = tail.prev;

  // Set the previous node to null b/c this is the new head.
  tail.prev = null;

  // Set the next node of the tail (new head) to the it's previous node.
  tail.next = node;

  // Set node equal to the tail's next node.
  node = tail.next;

  // Temp variables.
  let tempNext, tempPrev;

  // While node is truthy.
  while (node) {

    // Store the next node in a variable.
    tempNext = node.next

    // Store the previous node in a variable.
    tempPrev = node.prev;

    // Set the next node to it's previous node.
    node.next = tempPrev;

    // Set the previous node to it's next node.
    node.prev = tempNext;

    // Set node equal to the next node.
    node = node.next;
  }

  // Return the tail which is the new head.
  return tail;
}