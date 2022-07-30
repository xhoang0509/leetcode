// 1295 Find Numbers with Even Number of Digits
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:
// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation:
// 12 contains 2 digits (even number of digits).
// 345 contains 3 digits (odd number of digits).
// 2 contains 1 digit (odd number of digits).
// 6 contains 1 digit (odd number of digits).
// 7896 contains 4 digits (even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.

// Example 2:
// Input: nums = [555,901,482,1771]
// Output: 1
// Explanation:
// Only 1771 contains an even number of digits.

const countNumOfDigits = (n) => {
  let count = 0;
  while (n !== 0) {
    n = parseInt(n / 10);
    count++;
  }

  return count;
};

var findNumbers = function (nums) {
  let count = 0;
  nums.forEach((e) => {
    if (countNumOfDigits(e) % 2 === 0) {
      count++;
    }
  });

  return count;
};

console.log(findMaxConsecutiveOnes([12, 345, 2, 6, 7896]));
