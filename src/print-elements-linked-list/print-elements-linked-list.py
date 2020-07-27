def print_linked_list(head):
    """Given the head of a linked list, prints the elements of the list in order."""

    # Set node equal to the head.
    node = head

    # Well node is truthy.
    while node:

        # Print the data of the node.
        print(node.data)

        # Set node to the next node.
        node = node.next
