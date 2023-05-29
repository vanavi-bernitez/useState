// https://edabit.com/challenge/b2NdDSdkjqFnCTfS8
const filterArray = (arr) => {
  const numberSet = new Set();
  arr.forEach((element) => {
    if (typeof element === "number") numberSet.add(element);
  });
  return [...numberSet];
};

console.log(filterArray([1, "a", "b", 0, 15]));
