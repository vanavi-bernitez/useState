// https://www.codewars.com/kata/57ced2c1c6fdc22123000316/train/javascript

const numObj = (s) => {
  const numbersObjects = s.map((number) => {
    const randomLetter = String.fromCharCode(
      97 + Math.floor(Math.random() * 26)
    );
    const myObj = new Object();
    myObj[number] = randomLetter;
    // myObj.number = randomLetter;  //gonna asign always "number" string as key.
    return myObj;
  });
  return numbersObjects;
};

console.log(numObj([101, 121, 110, 113, 113, 103]));
