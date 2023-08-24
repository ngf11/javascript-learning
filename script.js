// function isEmpty(item) {
//   return item === null || item === undefined ? "is empty" : "Has information ";
// }
// let nico;
// let you = "";
// let bro = null;
// let milo = undefined;
// let arr = [];
// console.log(
//   [isEmpty(nico)],
//   [isEmpty(you)],
//   [isEmpty(bro)],
//   [isEmpty(milo)],
//   [isEmpty(arr)]
// );
// function sum(...arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sum(1, 2, 3, 4, 5));
// function sumOfArrayItems(arr) {
//   let sum = 0;
//   for (const items of arr) {
//     sum += items;
//   }
//   return sum;
// }
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(sumOfArrayItems(nums));
// function average(arr) {
//   let sum = 0;
//   for (const items of arr) {
//     sum += items;
//   }
//   let sumAverage = sum / arr.length;
//   return sumAverage;
// }
// console.log(average(nums));
// const modifyArray = (arr) => {
//   if (arr.length >= 5) {
//     arr[4] = arr[4].toUpperCase();
//     return arr;
//   } else {
//     return "Items not found";
//   }
// };
// console.log(modifyArray(["siggy", "didi"]));
// console.log(modifyArray(["siggy", "didi", "nico", "milo", "choad", "pija"]));
// function arryItemsUnique(array) {
//   const uniqueSet = new Set(array);
//   return uniqueSet.size === array.length;
// }
// const randomNumsArray = [1, 2, 3, 4, 5, 6, 7, 7, 7, 8, 9];
// const randomData = ["nico", "uruguay", "USA", "Kearny"];
// console.log(arryItemsUnique(randomData));
// console.log(arryItemsUnique(randomNumsArray));
// function pushOutDUplicates(array) {
//   const unique = new Set(array);
//   if (unique.size !== array.length) {
//     return array;
//   } else {
//     return `They are no duplucates`;
//   }
// }
// console.log(pushOutDUplicates(randomNumsArray));
// console.log(pushOutDUplicates(randomData));
// function sameDataType(array) {
//   if (array.length === 0) {
//     return true; // Empty array is considered to have uniform data type.
//   }

//   const firstType = typeof array[0];

//   for (let i = 1; i < array.length; i++) {
//     if (typeof array[i] !== firstType) {
//       return false; // If any element's type differs, return false.
//     }
//   }

//   return true; // If all elements have the same type, return true.
// }
function isValidVariable(variableName) {
  // Check if the variable name starts with a letter, $, or _
  if (!/^[a-zA-Z$_]/.test(variableName)) {
    return false;
  }
  // Check if the rest of the variable name contains only letters, numbers, $, or _
  if (!/^[a-zA-Z0-9$_]*$/.test(variableName)) {
    return false;
  }
}
let helo$ = "";
let you_are = 34;
let g3627 = you_are;
let $Df = helo$;
console.log(isValidVariable(helo$));
console.log(isValidVariable("$Df"));
function sevenRandomNumbers() {
  let uniqueNumsArray = [];
  for (let i = 0; i <= 7; i++) {
    let random = Math.floor(Math.random() * 9);
    uniqueNumsArray.push(random);
  }
  let unique = new Set(uniqueNumsArray);
  return unique;
}
console.log(sevenRandomNumbers());
