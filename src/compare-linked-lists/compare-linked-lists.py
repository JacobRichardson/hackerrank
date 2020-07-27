"""
    Implements a solution to the compare lists Hackerrank problem.
    https://www.hackerrank.com/challenges/compare-two-linked-lists/problem
"""

__author__ = "Jacob Richardson"


def compare_lists(llist1, llist2):
    """ Compares two singly linked list to determine if they are equal."""

    # If list 1 is empty and list 2 is not empty.
    if not llist1 and llist2:

        # Return zero because the lists are not equal.
        return 0

    # If list 2 is empty and list 1 is not empty.
    if not llist2 and llist1:

        # Return zero because the lists are not equal.
        return 0

    # Set node 1 equal to the head of list 1.
    node1 = llist1

    # Set node 2 equal to the head of list 2.
    node2 = llist2

    # While node 1 and node 2 are truthy.
    while node1 and node2:

        # If the data in each node is not equal.
        if node1.data != node2.data:

            # Return zero because the lists are not equal.
            return 0

        # If list 1 has a next node and list 2 does not.
        if node1.next and not node2.next:

            # Return zero because the lists are not equal.
            return 0

        # If list 2 has a next node and list 1 does not.
        if node2.next and not node1.next:

            # Return zero because the lists are not equal.
            return 0

        # Set node 1 equal to the next node.
        node1 = node1.next

        # Set node 2 equal to the next node.
        node2 = node2.next

    # Return 1 denoting they are equal.
    return 1
