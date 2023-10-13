function rgbColorGenerator() {
  let rgb = "";
  let rgbarr = [];
  for (let i = 0; i < 3; i++) {
    let rgbRandom = Math.floor(Math.random() * 256);
    rgbarr.push(rgbRandom);
  }
  rgb = `rgb(${rgbarr})`;
  console.log(rgb);
}
rgbColorGenerator();
function arrayOfHexaColors() {
  let numberOfColors = 5;
  const hexDeck = ["a", "b", "c", "d", "f", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  for (let i = 0; i < numberOfColors; i++) {
    let hexArr = [];
    let str = "";
    for (let j = 0; j < 6; j++) {
      let random = Math.floor(Math.random() * hexDeck.length);
      str = hexDeck[random];
      hexArr.push(str);
    }
    let hexStr = "#" + hexArr.join("").split("#");
    console.log(hexStr);
  }
}
arrayOfHexaColors();

function arrayOfRgbColors() {
  let numberRGB = 5;
  let rgbStr = "";
  let rgbArr = [];
  for (let i = 0; i < numberRGB; i++) {
    let rgb = [];
    for (let j = 0; j < 3; j++) {
      let random = Math.floor(Math.random() * 256);
      rgb.push(random);
    }
    console.log(`rgb(${rgb})`);
  }
}
arrayOfRgbColors();

function shuffleArray(arr) {
  let shuffleArr = [];
  while (arr.length > 0) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let removedItem = arr.splice(randomIndex, 1)[0];
    shuffleArr.push(removedItem);
  }
  return shuffleArr;
}
console.log(shuffleArray([1, 2, 3, 4, 5, 6]));
function isEmpty(item) {
  if (item === null || item == "" || item === undefined) {
    return "is empty";
  } else {
    return item;
  }
}
let nico = null;
let milo;
let didi = "";
let siggy = undefined;
let jaja = 3;
console.log(isEmpty(nico));
console.log(isEmpty(milo));
console.log(isEmpty(didi));
console.log(isEmpty(siggy));
console.log(isEmpty(jaja));
function sum(...arg) {
  let sum = 0;
  for (let i = 0; i < arg.length; i++) {
    sum += arg[i];
  }
  return sum;
}
console.log(sum(1, 2, 3, 4, 5));
function sumOfArrayItems(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumOfArrayItems([1, 2, 3, 4, 5]));
function average(arr) {
  let arrLength = arr.length;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arrLength;
}
console.log(average([1, 2, 3, 4, 5]));
const modifyArray = (arr) => {
  if (arr.length >= 5) {
    arr[4] = arr[4].toUpperCase();
    return arr;
  } else {
    return "Items not found";
  }
};
console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);
console.log(modifyArray(["didi", "siggy", "nico"]));

function sevenRandomNumbers() {
  let sevenArr = [];
  for (let i = 0; i < 7; i++) {
    let random = Math.floor(Math.random() * 9);
    sevenArr.push(random);
  }
  return sevenArr;
}

console.log(sevenRandomNumbers());
