
def insert_node_at_head(head, data):
    """Given the head of a list, inserts a new node at the head of the list."""

    # Create the new head node.
    new_head = SinglyLinkedListNode(data)

    # Set the next node of the new head to the previous head.
    new_head.next = head

    # Return a reference to the new head of the list.
    return new_head

