let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
const dasums = [];
console.log(sum);
let sumEven = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sumEven += i;
    dasums.push(sumEven);
  }
}
console.log(sumEven);
let sumOdd = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    sumOdd += i;
    dasums.push(sumOdd);
  }
}
console.log(sumOdd);
console.log(dasums);
