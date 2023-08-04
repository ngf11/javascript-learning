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
const countriesUpper = [];
for (const country of countries) {
  countriesUpper.push(country.toUpperCase());
}
console.log(countriesUpper);
const countriesLength = [];
for (const country of countries) {
  countriesLength.push(country.length);
}
console.log(countriesLength);
const countriesInfo = [];
for (const country of countries) {
  countriesInfo.push([
    country,
    country.toUpperCase().substring(0, 3),
    country.length,
  ]);
}
console.log(countriesInfo);
const countriesWithLand = [];
for (const country of countries) {
  if (country.includes("land")) {
    countriesWithLand.push(country);
  }
}
console.log(countriesWithLand);
const countriesWithIa = [];
for (const country of countries) {
  if (country.endsWith("ia")) {
    countriesWithIa.push(country);
  }
}
console.log(countriesWithIa);
const countriesLengthFive = [];
for (const country of countries) {
  if (country.length === 5) {
    countriesLengthFive.push(country);
  }
}
console.log(countriesLengthFive);
let longestCountry = [];
for (let i = 1; i < countries.length; i++) {
  if (countries[i].length > longestCountry.length) {
    longestCountry = countries[i];
  }
}
console.log(longestCountry);
let longestTech = [];
for (let i = 1; i < webTechs.length; i++) {
  if (webTechs[i].length > longestTech.length) {
    longestTech = webTechs[i];
  }
}
console.log(longestTech);
const webTechsInfo = [];
for (const tech of webTechs) {
  webTechsInfo.push([tech, tech.length]);
}
console.log(webTechsInfo);
const mernArr = [];
for (const mern of mernStack) {
  mernArr.push(mern[0]);
}
console.log(mernArr);
let mernStr = mernArr.join("");
console.log(mernStr);
const fruit = ["banana", "orange", "mango", "lemon"];
const revfruit = [];
for (let i = fruit.length - 1; i >= 0; i--) {
  let index = fruit[i];
  revfruit.push(index);
}
console.log(revfruit);
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
for (const stack of fullStack) {
  console.log(stack);
}
for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j]);
  }
}
