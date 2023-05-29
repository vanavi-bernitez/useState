const isPalindrome = (number) => {
  const reverseNumber = number.toString().split("").reverse().join("");
  return parseInt(reverseNumber) === number;
};

console.log(isPalindrome(121));
