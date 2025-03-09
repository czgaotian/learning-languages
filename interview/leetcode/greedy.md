# 贪心算法

## Interval Greedy

- Which interval should be selected as the leftmost?

- We can select the interval with the smallest right endpoint **among all intervals**, denoted as Interval A.

- So, in any another **valid selection method** without Interval A, we can replace the leftmost interval with Interval A.

- Since A is a more leftward interval in any valid selection method, it will not overlap with any other selected intervals.

- Remove interval A and any intervals that **intersect with A**, those whose left endpoints are smaller than the right endpoint of A.

- The problem then becomes how to select the leftmost interval from the remaining intervals.
