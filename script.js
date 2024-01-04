// function sumOfOdds(num) {
//   let sum = 0;
//   for (let i = 0; i <= num; i++) {
//     if (i % 2 != 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(sumOfOdds(100));
// function sumOfEven(num) {
//   let sum = 0;
//   for (let i = 0; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumOfEven(100));
const evensAndOdds = (num) => {
  let sumOdd = 0;
  let sumEven = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 !== 0) {
      sumOdd += i;
    }
  }
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) {
      sumEven += i;
    }
  }
  return `The number of odds are ${sumOdd}.\nThe number of evens are ${sumEven}.`;
};
console.log(evensAndOdds(100));

const sum = (...arg) => arg.reduce((a, b) => a + b);
console.log(sum(1, 2, 3));

// function randomHexaNumberGenerator() {
//   let hex = "";
//   let hexChar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f"];
//   let hexArr = [];
//   for (let i = 0; i < 6; i++) {
//     let random = Math.floor(Math.random() * hexChar.length);
//     hexArr.push(hexChar[random]);
//   }
//   hex = "#" + hexArr.join(",");

//   return hex;
// }
function randomHexColorGenerator() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += Math.floor(Math.random() * 16).toString(16);
  }
  return hex;
}
console.log(randomHexColorGenerator());
