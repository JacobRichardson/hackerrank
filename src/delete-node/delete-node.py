def delete_node(head, position):
    """Deletes a node in a given position in the given list."""

    # If the position is equal to zero.
    if position is 0:
        # Return the next node because the head of the list is to be removed.
        return head.next

    # Set count equal to zero.
    count = 0

    # Set node equal to head.
    node = head

    # While count is one less than position.
    while count < position - 1:
        # Set node equal to the next node.
        node = node.next

        # Increment count by 1.
        count = count + 1

    # Node is now the previous node of the node to be deleted.

    # Set the current node's next equal to 2 nodes ahead.
    # This removes the node that is to be deleted (the current node's next node).
    node.next = node.next.next

    # Return a reference to the head of the list.
    return head
