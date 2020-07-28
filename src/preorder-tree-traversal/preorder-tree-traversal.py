"""
    Implements a solution to the pre-order tree traversal Hackerrank problem.
    https://www.hackerrank.com/challenges/tree-preorder-traversal/problem
"""

__author__ = "Jacob Richardson"

def pre_order(root):
    """ Preforms a pre order tree traversal and prints the order on a single line space separated."""

    # If root is truthy.
    if root:

        # Print the info of the root node on the same line.
        print(root.info, end=" ")

        # Recursively call pre_order on the left node.
        pre_order(root.left)

        # Recursively call pre_order on the right node.
        pre_order(root.right)

