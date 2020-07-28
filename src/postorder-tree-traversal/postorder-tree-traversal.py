
"""
    Implements a solution to the post-order tree traversal Hackerrank problem.
   https://www.hackerrank.com/challenges/tree-postorder-traversal/problem
"""

__author__ = "Jacob Richardson"


def post_order(root):
    """ Preforms a post order tree traversal and prints the order on a single line space separated. """

    # If root is truthy.
    if root:
        # Recursively call post_order on the left node.
        post_order(root.left)

        # Recursively call post_order on the right node.
        post_order(root.right)

        # Print the info of the root node on the same line.
        print(root.info, end=" ")
