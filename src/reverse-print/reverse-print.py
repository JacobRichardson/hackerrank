def reverse_print(head):
    """Prints the reverse of a singly linked list."""

    # If head is not defined.
    if not head:

        # Return nothing.
        return

    # Create a nodes list
    nodes = []

    # Set node equal to head.
    node = head

    # While node is truthy.
    while node:

        # Add the current node to the nodes list.
        nodes.append(node)

        # Set node equal to the next node.
        node = node.next

    # For each node in the reversed list of nodes.
    for node in reversed(nodes):

        # Print the node.
        print(node.data)
