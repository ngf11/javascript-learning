// day 7
function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    sum += i;
  }
  return sum;
}
const nums = [1, 2, 3, 4, 5];
console.log(sumArr(nums));
function sumAll() {
  let sum = 0;
  for (let i = 0; i <= arguments.length; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumAll(1, 2, 3, 4, 5));
