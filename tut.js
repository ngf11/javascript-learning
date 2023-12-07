const numbers = [3, 6, 2, 9, 1];
const sum = numbers.reduce((total, number) => {
  return total + number;
}, 0);
console.log(sum);
