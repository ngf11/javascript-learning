let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
itCompanies.sort();
itCompanies.reverse();
itCompanies.splice(0, 3);
console.log(itCompanies);
itCompanies.splice(1, 2);
console.log(itCompanies);
itCompanies.shift();
console.log(itCompanies);
itCompanies.pop();
console.log(itCompanies);
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let textStripted = text.replace(/[^\w\s]|_/g, "");
console.log(textStripted);
let words = textStripted.split(" ");
console.log(words);
console.log(words.length);
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
console.log(shoppingCart);
shoppingCart.push("Sugar");
console.log(shoppingCart);
shoppingCart.splice(4, 1);
console.log(shoppingCart);
shoppingCart.splice(3, 1, "Yerba Mate");
console.log(shoppingCart);
