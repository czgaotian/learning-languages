# 图论

- According to the problem description, each point will be connected by an edge beforehand.
- We can traverse it as an undirected graph.
- If an edge is found to be in the opposite direction of the expected direction, it means a modification is needed for that edge.

## dfs

- If this node is on the edge, we recursively call DFS with the other node.

## bfs

## Union-Find / Disjoint Set

- This node is already assigned to a group, so we need to identify the first element in this group.
- Union the two nodes, making them point to the first element of the same group.
