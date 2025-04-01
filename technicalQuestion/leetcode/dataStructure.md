# Data Structure 常用数据结构

## Prefix Sum

- I think this problem should be solved using prefix sum.

- Then iterate through the array nums.

- Since the prefix sum list starts from value 0, which meanings no numbers have been added yet. We need accumulation begins at index 1.

## Heap

- Combine list1 and list2, then sort them in descending order based on list2[i].

- Keep only the k largest elements in the heap

- Insertion into a heap takes O(log k).

- Extracting the min element takes O(log k).
