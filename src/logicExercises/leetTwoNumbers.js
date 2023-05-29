const twoSum = (nums, target) => {
  let ans = [];
  for (let index = 0; index < nums.length; index += 1) {
    for (
      let innerIndex = index + 1;
      innerIndex < nums.length;
      innerIndex += 1
    ) {
      if (nums[index] + nums[innerIndex] === target) {
        ans.push(index);
        ans.push(innerIndex);
        return ans;
      }
    }
  }
  return ans;
};

console.log(twoSum([3, 2, 4], 6));
