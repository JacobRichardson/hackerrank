
"""
    Implements a solution to the in-order tree traversal Hackerrank problem.
   https://www.hackerrank.com/challenges/tree-inorder-traversal/problem
"""

__author__ = "Jacob Richardson"


def in_order(root):
    """ Preforms a in order tree traversal and prints the order on a single line space separated. """

    # If root is truthy.
    if root:
        # Recursively call in_order on the left node.
        in_order(root.left)

        # Print the info of the root node on the same line.
        print(root.info, end=" ")

        # Recursively call in_order on the right node.
        in_order(root.right)


