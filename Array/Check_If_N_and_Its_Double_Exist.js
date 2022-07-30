// https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/

var checkIfExist = function (arr) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] == 2 * arr[j] || arr[j] === 2 * arr[i]) {
        return true;
      }
    }
  }
  return false;
};

console.log(checkIfExist([10, 2, 5, 3]));
