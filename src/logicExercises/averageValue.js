const findAverage = (array) => {
  if (array.length !== 0) {
    const summatory = array.reduce((total, number) => total + number, 0);
    const averageValue = parseInt(summatory / array.length);
    return averageValue;
  }
  return 0;
};

console.log(findAverage([1, 2, 1]));
