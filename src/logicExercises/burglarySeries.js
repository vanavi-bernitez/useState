// https://edabit.com/challenge/8s2jy9hR2TAeQinKD
const calculateDifference = (obj, limit) => {
  const values = Object.values(obj);
  // let sumValues = 0;
  // for (let value of values) sumValues += value;
  let sumValues = values.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return sumValues - limit;
};

const obj = { skate: 20000, painting: 30000, shoes: 1 };
console.log(calculateDifference(obj, 50000));
