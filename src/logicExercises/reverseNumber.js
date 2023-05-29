const reverseNumber = (n) => {
  const isNegative = n < 0;
  const absoluteValue = Math.abs(n);
  const reverse = absoluteValue.toString().split("").reverse();
  const reversedNumber = parseInt(reverse.join(""));
  return isNegative ? -reversedNumber : reversedNumber;
};

console.log(reverseNumber(-123));
