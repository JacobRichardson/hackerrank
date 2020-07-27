
def insert_node_at_position(head, data, position):
    """Inserts a new node at the index position of a given list."""

    # Create the new node.
    new_node = SinglyLinkedListNode(data)

    # Set count equal to zero.
    count = 0

    # Set node equal to the head.
    node = head

    # While the count is one less than the position.
    while count < position - 1:
        # Set node to the next node.
        node = node.next

        # Increment count by 1.
        count = count + 1

    # Node is now equal to the node in the position before the new node.

    # Set the new_node's next equal the previous node's next node.
    new_node.next = node.next

    # Set the current node's next equal to the new node.
    node.next = new_node

    # Return a reference to the head.
    return head
