# 链表、二叉树与回溯

## Backtracking

- If we do not restore the state, when we finish recursing the left subtree and start recursing the right subtree, `cnt` will still contain data from the left subtree.

## Binary Tree

### BFS

- I think this problem can be solved using BFS
- First, we initialize a queue.
- There will be no empty tree.
- Here, we need a temporary array to store the nodes of the next level.
- If the left child exists, put it into the temporary array.

### DFS
