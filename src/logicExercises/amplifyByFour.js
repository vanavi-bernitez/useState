// https://edabit.com/challenge/FPHnbisnLwrQFYyAg
const amplify = (num) => {
  const amplifiedNumbers = [];
  for (let item = 1; item <= num; item += 1) {
    item % 4 === 0
      ? amplifiedNumbers.push(item * 10)
      : amplifiedNumbers.push(item);
  }
  return amplifiedNumbers;
};

console.log(amplify(25));
