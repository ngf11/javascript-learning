const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.replace(/[^\w\s]|_/g, "");
let wordsARR = words.split(" ");
console.log(wordsARR);
console.log(wordsARR.length);
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.push("Sugar");
shoppingCart.unshift("Meat");
shoppingCart.splice(4, 1);
shoppingCart[3] = "Green tea";
console.log(shoppingCart);
console.log(countries.indexOf("Ethiopia"));
countries[4] = countries[4].toUpperCase();
console.log(countries);
console.log(webTechs.indexOf("Sass"));
webTechs.splice(2, 0, "Sass is a CSS preprocess");
console.log(webTechs);
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
let mid = Math.round((ages.length - 1) / 2);
let midValue = ages[mid];
console.log(mid);
console.log(midValue);
