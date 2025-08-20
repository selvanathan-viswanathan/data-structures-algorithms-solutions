function twoSumSorted(nums: number[], target: number): number[] {
  let leftPtr = 0,
    rightPtr = nums.length - 1;

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

twoSumSorted([2, 7, 11, 15], 9); // [0, 1]
twoSumSorted([3, 2, 4], 6); // this will not work as the array is not sorted
