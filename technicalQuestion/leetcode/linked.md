# 链表、二叉树与回溯

## Binary Tree

### BFS

- I think this problem can be solved using BFS
- First, we initialize a queue.
- There will be no empty tree.
- Here, we need a temporary array to store the nodes of the next level.
- If the left child exists, put it into the temporary array.

### DFS

## Backtracking

- If we do not restore the state, when we finish recursing the left subtree and start recursing the right subtree, `cnt` will still contain data from the left subtree.

- We should restore it to the state it was in before the recursion.

## Linked List

- To store the result linked list, we use a dummy node.
- The pointer q points to the node before the one to be deleted.
- Since the head node might be deleted, a dummy node is used to simplify the code.

### Intersection of Linked Lists

- To **account for** situations with no intersection, empty nodes need to be considered as well.

## Backtrace

### Permutation

- We can calculate the time complexity by multiplying the number of leaf nodes by the length of the path from the root to each leaf.
- All permutations of choosing 3 numbers from 3 numbers
- All combinations of 2 numbers from 3
- Choosing 1 number out of 3
- This is how the natural constant e is defined.

### Combination
