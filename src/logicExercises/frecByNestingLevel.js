// https://edabit.com/challenge/MCK2Rqzn78pMksvsK
const freqCount = (arr, el) => {
  const resultArray = [];
  // initial conditions to be analized
  let nestLevel = 0;
  let analyzedArray = arr;
  let elementIsArray = true;
  while (elementIsArray === true) {
    let currentArray = analyzedArray;
    analyzedArray = [];
    let counterItem = 0;

    for (let index = 0; index < currentArray.length; index += 1) {
      if (Array.isArray(currentArray[index])) {
        analyzedArray = analyzedArray.concat(currentArray[index]);
        elementIsArray = true;
      } else if (currentArray[index] === el) {
        counterItem += 1;
        elementIsArray = false;
      }
    }
    resultArray.push([nestLevel, counterItem]);
    nestLevel += 1;
  }
  return resultArray;
};

console.log(freqCount([1, 5, 5, [5, [1, 2, 1, 1], 5, 5], 5, [5]], 5));
