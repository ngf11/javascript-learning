function capitalizeArray(arr) {
  let capArr = [];
  for (const items of arr) {
    capArr.push(items.toUpperCase());
  }
  return capArr;
}
const nicoTwo = ["fat", "choad", "uruguay"];
console.log(capitalizeArray(["a", "b", "c"]));
console.log(capitalizeArray(nicoTwo));
const array = [];
const nico = [];
function addItem(item, arr) {
  arr.push(item);
}
addItem("Didi WU", array);
addItem("Tintin", array);
addItem(3, array);
console.log(array);
addItem("nico", nico);
addItem("Fuentes", nico);
addItem(34, nico);
console.log(nico);
function removeItem(index, arr) {
  arr.splice(index, 1);
}
removeItem(0, nico);
console.log(nico);
const sumAllNums = (...args) => {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
};
function sumOfNumbers(range) {
  let sum = 0;
  for (let i = 0; i <= range; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(100));
console.log(sumAllNums(1, 2, 3));
function sumOdds(range) {
  let sum = 0;
  for (let i = 0; i <= range; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}
const odd = (...arr) => {
  let sum = 0;
  for (const items of arr) {
    if (items % 2 !== 0) {
      sum += items;
    }
  }
  return sum;
};
console.log(sumOdds(100));
console.log(odd(1, 2, 3, 4, 5, 6, 7, 8, 9));
function sumOfEven(range) {
  let sum = 0;
  for (let i = 0; i <= range; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfEven(100));
function evensAndOdds(range) {
  let sumOdds = [];
  let sumEven = [];
  for (let i = 0; i <= range; i++) {
    if (i % 2 === 0) {
      sumEven.push(i);
    } else {
      sumOdds.push(i);
    }
  }
  // console.log(sumEven);
  return `The number of odds are ${sumOdds.length}.\nThe number of evens are ${sumEven.length}.`;
}
console.log(evensAndOdds(100));
function randomUserIp() {}
