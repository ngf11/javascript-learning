function isEmpty(item) {
  return item === null || item === undefined ? "is empty" : "Has information ";
}
let nico;
let you = "";
let bro = null;
let milo = undefined;
let arr = [];
console.log(
  [isEmpty(nico)],
  [isEmpty(you)],
  [isEmpty(bro)],
  [isEmpty(milo)],
  [isEmpty(arr)]
);
function sum(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sum(1, 2, 3, 4, 5));
function sumOfArrayItems(arr) {
  let sum = 0;
  for (const items of arr) {
    sum += items;
  }
  return sum;
}
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumOfArrayItems(nums));
function average(arr) {
  let sum = 0;
  for (const items of arr) {
    sum += items;
  }
  let sumAverage = sum / arr.length;
  return sumAverage;
}
console.log(average(nums));
const modifyArray = (arr) => {
  let modifyArr = [];
  for (const itmes of arr) {
    if (itmes.length >= 5) {
      itmes[5] = itmes[5].toUpperCase();
      modifyArr.push(item);
      return modifyArr;
    } else {
      return "Items not found";
    }
  }
};
console.log(modifyArray(["siggy", "didi"]));
console.log(modifyArray(["siggy", "didi", "nico", "milo", "choad"]));
