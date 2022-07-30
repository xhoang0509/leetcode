// https://leetcode.com/explore/learn/card/fun-with-arrays/526/deleting-items-from-an-array/3248/
var removeDuplicates = function (nums) {
  let n = nums.length;
  let curIndex = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] !== nums[curIndex]) {
      curIndex++;
      nums[curIndex] = nums[i];
    }
  }
  nums.length = curIndex + 1;
  return nums;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
