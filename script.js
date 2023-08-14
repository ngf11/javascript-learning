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
const sumAllnums = (...arg) => {
  let sum = 0;
  for (const element of arg) {
    sum += element;
  }
  return sum;
};
console.log(sumAllnums(1, 3, 6, 9));
const numbers = (...args) => {
  console.log(args);
};
numbers(11, 20, 23);
const anonymous = function () {
  console.log("YOUR POTENTIAL IS LIMITLESS. YOU WILL ACHIVE GREAT THINGS");
};
anonymous();
(function (n) {
  console.log(n * n);
})(10);
function sqr(n) {
  return n * n;
}
console.log(sqr(2));
const square = (n) => {
  return n * n;
};
console.log(square(2));
const squares = (n) => n * n;
console.log(squares(2));
const changeToUpper = (arr) => {
  let newArr = [];
  for (const element of arr) {
    newArr.push(element.toUpperCase());
  }
  return newArr;
};
const nico = ["Nicolas", "German", "Fuentes", "Suarez"];
console.log(changeToUpper(nico));
function gretting(name = "nico") {
  let message = `Hey ${name} you got this keep pushing`;
  return message;
}
console.log(gretting());
console.log(gretting("dylan"));
let enterName = prompt("Enter your first Name");
function grettingName(name = enterName) {
  let message = `Hey ${name} you got this keep pushing`;
  return message;
}
alert(grettingName());
