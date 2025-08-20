# Two Sum Problem – Algorithm Approaches

This project demonstrates two classic approaches to solving the **Two Sum** problem in TypeScript:

1. **Two Pointers Approach (for sorted arrays)**
2. **Hash Map Approach (for unsorted arrays)**

Both methods efficiently find a pair of indices in an array whose corresponding values sum up to a specified target.

---

## Problem Statement

Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`.

---

## Approaches

### 1. Two Pointers Approach

- **Best used when the array is sorted**
- Uses two pointers: one at the beginning (`leftPtr`) and one at the end (`rightPtr`) of the array.
- Move the pointers towards each other based on the sum of their values:
  - If the sum is less than the target, move the left pointer right.
  - If the sum is more than the target, move the right pointer left.
  - If the sum equals the target, return their indices.

**Code Reference:**
```typescript
function twoSumSorted(nums: number[], target: number): number[] {
  let leftPtr = 0, rightPtr = nums.length - 1;

  while (leftPtr < rightPtr) {
    const sum = nums[leftPtr] + nums[rightPtr];

    if (sum < target) {
      leftPtr += 1;
    } else if (sum > target) {
      rightPtr -= 1;
    } else {
      return [leftPtr, rightPtr];
    }
  }

  return [];
}
```

---

### 2. Hash Map Approach

- **Works for unsorted arrays**
- Iterates through the array, storing each value and its index in a hash map.
- For each value, checks if its complement (i.e., `target - value`) exists in the map.
  - If found, returns the indices.
  - Otherwise, adds the value to the map.

**Code Reference:**
```typescript
function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    map.set(nums[i], i);
  }

  return [];
}
```

---

## Flowcharts

### Two Pointers Approach

```mermaid
flowchart TD
    A[Start] --> B[Initialize leftPtr = 0, rightPtr = n-1]
    B --> C{leftPtr < rightPtr?}
    C -- No --> F[Return [] (No solution)]
    C -- Yes --> D[sum = nums[leftPtr] + nums[rightPtr]]
    D --> E{sum == target?}
    E -- Yes --> G[Return [leftPtr, rightPtr]]
    E -- No --> H{sum < target?}
    H -- Yes --> I[leftPtr++]
    I --> C
    H -- No --> J[rightPtr--]
    J --> C
```

### Hash Map Approach

```mermaid
flowchart TD
    A[Start] --> B[Initialize empty Map]
    B --> C[i = 0 to n-1]
    C --> D[complement = target - nums[i]]
    D --> E{complement in Map?}
    E -- Yes --> F[Return [Map.get(complement), i]]
    E -- No --> G[Map.set(nums[i], i)]
    G --> H{More elements?}
    H -- Yes --> C
    H -- No --> I[Return [] (No solution)]
```

---

## Summary

- **Use Two Pointers** if your array is sorted.
- **Use Hash Map** for unsorted or large arrays (more efficient than the brute-force \(O(n^2)\) approach).

Both methods return indices as an array `[index1, index2]` when a solution exists, or an empty array `[]` if not.

---

**Feel free to use and adapt this README for your learning or projects!**
