function swapValues(x, y) {
  let temp = x;
  x = y;
  y = temp;

  return `x => ${x}, y => ${y}`;
}
console.log(swapValues(4, 3));
const reverseArray = (arr) => {
  let revArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    let index = arr[i];
    revArr.push(index);
  }
  return revArr;
};
console.log(reverseArray([1, 2, 3, 4, 5]));
//[5, 4, 3, 2, 1]
console.log(reverseArray(["A", "B", "C"]));
//['C', 'B', 'A']
function capitalizeArray(arr) {
  let arrCap = [];
  for (const items of arr) {
    arrCap.push(items.toUpperCase());
  }
  return arrCap;
}
const user = ["nico", "fuentes", "didi", "wu", "tinti"];
console.log(capitalizeArray(user));
function sumOfNumbers(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers([1, 2, 3, 4, 5]));
function removeItem(arr) {
  let empty = [];
  for (let i = 0; i <= arr.length; i++) {
    empty = arr.splice(0, arr.length - 1);
  }
  return empty;
}
console.log(removeItem([1, 2, 3, 4, 5]));
function addItem(item) {}
