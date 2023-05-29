// https://leetcode.com/problems/intersection-of-two-arrays/description/
var intersection = function(nums1, nums2) {
    const setNums1 = new Set(nums1);
    const setNums2 = new Set(nums2);
    const intersectionNumbers = [];
    for (const value of setNums1) {
        if(setNums2.has(value)){
            intersectionNumbers.push(value);
        }
    }
    return intersectionNumbers;
};

console.log(intersection([4,9,5], [9,4,9,8,4]));
