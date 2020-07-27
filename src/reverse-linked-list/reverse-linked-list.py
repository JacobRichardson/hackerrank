def reverse(head):
    """"Reverse a singly linked list."""

    # If there is no head.
    if not head:
        # Return nothing.
        return

    # Create a nodes list.
    nodes = []

    # Set node equal to the head node.
    node = head

    # While node is truthy.
    while node:
        # Add the node to the nodes list.
        nodes.append(node)

        # Set node equal to the next node.
        node = node.next

    # Reverse the list.
    nodes.reverse()

    # Set count equal to zero.
    count = 0

    # While count is less than the length of the nodes list
    while count < len(nodes):

        # If the index is less than the length of the node list minus 1.
        if count < len(nodes) - 1:

            # Set the current node's next node equal to the next node in the list.
            nodes[count].next = nodes[count + 1]

        else:
            # Set the next node equal to none because this node is the tail of the list.
            nodes[count].next = None

        # Increment the count.
        count = count + 1

    # Return the first node in the nodes list.
    return nodes[0]
