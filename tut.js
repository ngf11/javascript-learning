//reduce()
const arr = [5, 1, 3, 2, 6];
console.log(
  arr.reduce((a, b) => {
    return a + b;
  })
);
const output = arr.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);
console.log(output);

function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
console.log(findMax(arr));

const output2 = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);
console.log(output2);
