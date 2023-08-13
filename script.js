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

const mernStack = ["MongoDB", "Express", "React", "Node"];
const upperCountries = [];
for (const country of countries) {
  console.log(country.toUpperCase());
  upperCountries.push(country.toUpperCase());
}
console.log(upperCountries);
const lengthCountries = [];
for (const country of countries) {
  lengthCountries.push(country.length);
}
console.log(lengthCountries);
const countryInfo = [];
for (const country of countries) {
  countryInfo.push([
    country,
    country.toUpperCase().slice(0, 3),
    country.length,
  ]);
}
console.log(countryInfo);
const landCounty = [];
for (country of countries) {
  if (country.includes("land")) {
    landCounty.push(country);
  }
}
console.log(landCounty);
let longestCountries = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > longestCountries.length) {
    longestCountries = countries[i];
  }
}
console.log(longestCountries);
let longestTech = [];
for (let i = 0; i < webTechs.length; i++) {
  if (webTechs[i].length > longestTech.length) {
    longestTech = webTechs[i];
  }
}
console.log(longestTech);
for (const tech of webTechs) {
  console.log([tech, tech.length]);
}
for (const mern of mernStack) {
  console.log(mern[0]);
}
// const webTechInAllCaps = [];
// // for (let i = 0; i < webTechs.length; i++) {
// //   webTechInAllCaps.push(webTechs.toUpperCase());
// // }
// for (const web of webTechs) {
// }
// console.log(webTechInAllCaps);
const fruit = ["banana", "orange", "mango", "lemon"];
let revFruit = [];
for (let i = fruit.length - 1; i >= 0; i--) {
  let index = fruit[i];
  revFruit.push(index);
}
console.log(revFruit);
// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"],
// ];
// let fullStackUpper = [];
// for (const stack of fullStack) {
//   console.log(stack.join());
//   // fullStackUpper.push(stack);
// }
// // fullStackUpper.toUpperCase();
// // console.log(fullStackUpper);
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
for (const stack of fullStack) {
  for (const item of stack) {
    console.log(item);
  }
}
for (let i = fullStack.length; i < fullStack.length; i++) {
  console.log(i);
}
const newCOuntries = [];
for (const country of countries) {
  newCOuntries.push(country);
}
console.log(newCOuntries);
const sortedNewCountries = newCOuntries.sort();
console.log(sortedNewCountries);
const allTechArr = webTechs.concat(mernStack).sort();
console.log(allTechArr);
let longestCountry = [];
for (let i = 1; i < countries.length; i++) {
  if (countries[i].length > longestCountries.length) {
    longestCountries = countries[i];
  }
}
console.log(longestCountries);
for (const country of countries) {
  if (country.includes("land")) {
    console.log(country);
  }
}
let revcCountry = [];
for (let i = countries.length - 1; i >= 0; i--) {
  let index = countries[i];
  revcCountry.push(index);
}
console.log(revcCountry);
