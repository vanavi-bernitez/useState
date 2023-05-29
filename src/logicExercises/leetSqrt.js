// https://leetcode.com/problems/sqrtx/description/
var mySqrt = function (x) {
  if (x < 2) return x;
  for (let item = 2; item <= x; item += 1) {
    if (item * item === x) {
      return item;
    } else if (item * item > x) {
      return item - 1; //down nearest integer
    }
  }
};

console.log(mySqrt(4));
