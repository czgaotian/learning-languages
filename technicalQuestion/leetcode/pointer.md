# 滑动窗口与双指针

## Double Pointer

- Initialize the answer to 0, set the left pointer to 0, and set the right pointer to the last element of the array.

- If the two pointers have not yet met, we ...

- Enumerate the right endpoints of the array

- Each time the right end of the subarray moves right

## Sliding Window

- The element at index i enters the window, updating the **[relevant statistics]**. If i < k − 1, repeat the first step.

- The element at index i − k + 1 leaves the window, updating the **[relevant statistics]**.

- Traverse the list from left to right.
- First, count the number of vowels in the first k − 1 = 2 letters. There is 1 vowel.
