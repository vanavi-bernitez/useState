// https://edabit.com/challenge/Q3n42rEWanZSTmsJm
const minMax = (array) => {
  const compareNumbers = (a, b) => a - b;
  array.sort(compareNumbers);

  return [array[0], array[array.length - 1]];
};
minMax([2334454, 5]);
