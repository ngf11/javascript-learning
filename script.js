//Day 6
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }
// let i = 10;
// while (i > 0) {
//   console.log(i);
//   i--;
// }
// do {
//   console.log(i);
//   i--;
// } while (i > 0);
// let n = 10;
// for (let i = 0; i <= n; i++) {
//   console.log(i);
// }
for (let i = 1; i <= 10; i++) {
  let row = " ";
  for (let j = 1; j <= i; j++) {
    row += "#";
  }
  console.log(row);
}
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}
for (let i = 0; i <= 10; i++) {
  console.log(`${i} ${i ** 2} ${i ** 3}`);
}
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
const sumOddEven = [];
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);
let sumeEven = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sumeEven += i;
  }
}
let sumOdd = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    sumOdd += i;
  }
}
sumOddEven.push(sumeEven);
sumOddEven.push(sumOdd);
console.log(sum, sumOdd, sumeEven);
console.log(sumOddEven);
let letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWHYZ";
let splitLetter = letter.split("");
// console.log(splitLetter);
// console.log(randomLetter);
for (let i = 0; i <= 5; i++) {
  let random = Math.floor(Math.random() * splitLetter.length);
  const randomLetter = splitLetter[random];
  console.log(randomLetter);
}
let letterNums =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWHYZ1234567890";
let numLetterSlit = letterNums.split("");
console.log(numLetterSlit);
let char = [];
for (let i = 0; i <= 5; i++) {
  let random = Math.floor(Math.random() * letterNums.length);
  let randomLetterNum = numLetterSlit[random];
  char.push(randomLetterNum);
}

console.log(char.join(""));
