// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
var removeDuplicates = function (nums) {
  setNums = new Set(nums);
  const setArray = Array.from(setNums);
  const fillValue = null;
  const completeArray = setArray.concat(
    new Array(nums.length - setArray.length).fill(fillValue)
  );
  return completeArray;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
