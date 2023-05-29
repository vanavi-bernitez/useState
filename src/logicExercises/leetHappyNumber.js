// https://leetcode.com/problems/happy-number/description/?envType=study-plan&id=level-2

var isHappy = function (n) {
  if (n > 0) {
    //store number to check if it will apear
    const numbersUsed = [];
    while (n !== 1) {
      let digits = n.toString();
      let sumSquareDigits = 0;
      for (let eachDigit of digits) {
        sumSquareDigits += eachDigit ** 2;
      }
      n = sumSquareDigits;
      if (numbersUsed.includes(n)) {
        return false;
      } else {
        numbersUsed.push(n);
      }
    }
    return true;
  }
};

console.log(isHappy(19));
