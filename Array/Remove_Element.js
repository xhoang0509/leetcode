// https://leetcode.com/explore/learn/card/fun-with-arrays/526/deleting-items-from-an-array/3247/

var removeElement = function (nums, val) {
  let len = nums.length;
  let curIndex = 0;

  for (let i = 0; i < len; i++) {
    if (nums[i] !== val) {
      nums[curIndex] = nums[i];
      curIndex++;
    }
  }

  return curIndex;
};

console.log(removeElement([3, 2, 2, 3], 3));
