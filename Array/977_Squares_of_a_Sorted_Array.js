// 977. Squares of a Sorted Array.
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 2:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

var sortedSquares = function (nums) {
  const n = nums.length;
  let v = [];
  let i = -1;
  let j = nums.length;

  // tim i: chi so cua so am lon nhat
  while (i + 1 < n && nums[i + 1] < 0) {
    i++;
  }

  // tim j: chi so duong nho nhat
  while (j - 1 >= 0 && nums[j - 1] >= 0) {
    j--;
  }

  while (i >= 0 || j < n) {
    if (i >= 0 && j < n) {
      //both i and j are vaild
      const ii = nums[i] * nums[i];
      const jj = nums[j] * nums[j];
      console.log(ii, jj);

      if (ii <= jj) {
        v.push(ii);
        i--;
      } else {
        v.push(jj);
        j++;
      }
    } else if (i >= 0) {
      // only i vaild
      v.push(nums[i] * nums[i]);
      i--;
    } else {
      // only j  vaid
      v.push(nums[j] * nums[j]);
      j++;
    }
  }

  return v;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
