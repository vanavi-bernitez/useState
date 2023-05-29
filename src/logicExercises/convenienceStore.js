const changeEnough = (change, amountDue) => {
  const coinWeights = [0.25, 0.1, 0.05, 0.01];
  //iterate over the original array
  const totalCoins = change.map(
    (element, index) => element * coinWeights[index]
  );
  let totalChange = totalCoins.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return totalChange >= amountDue;
};

console.log(changeEnough([25, 20, 5, 0], 4.25));
