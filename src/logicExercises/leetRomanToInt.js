const romanToInt = (s) => {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let value = 0;
  for (let i = 0; i < s.length - 1; i += 1) {
    romanValues[s[i]] < romanValues[s[i + 1]]
      ? (value -= romanValues[s[i]])
      : (value += romanValues[s[i]]);
  }
  return value + romanValues[s[s.length - 1]];
};

console.log(romanToInt("III"));
