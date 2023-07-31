// const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let codeChar = letters.split("");
// let randomLetterArray = [];
// for (let i = 0; i <= 5; i++) {
//   let random = Math.floor(Math.random() * codeChar.length);
//   let letter = codeChar[random];
//   randomLetterArray.push(letter);
// }
// console.log(randomLetterArray);
// const nums = "1234567890";
// let splitNums = nums.split("");
// // console.log(splitNums);
// let randomNumArr = [];
// for (let i = 0; i <= 5; i++) {
//   let randomNum = Math.floor(Math.random() * splitNums.length);
//   let num = splitNums[randomNum];
//   randomNumArr.push(num);
// }
// console.log(randomNumArr);
// // console.log(numLetter);
// let numLetter = codeChar.concat(splitNums);
// let numLetterArr = [];
// for (let i = 0; i <= 6; i++) {
//   let ranLetterNum = Math.floor(Math.random() * numLetter.length);
//   let letNum = numLetter[ranLetterNum];
//   numLetterArr.push(letNum);
// }
// let numLetterStr = numLetterArr.join("");
// console.log(numLetterArr);
// console.log(numLetterStr);
// let longRanNumGen = [];
// let theGenerator = Math.floor(Math.random() * 11);
// for (let i = 0; i <= theGenerator; i++) {
//   let ranLetterNum = Math.floor(Math.random() * numLetter.length);
//   let ranGen = numLetter[ranLetterNum];
//   longRanNumGen.push(ranGen);
// }
// let ranGenStr = longRanNumGen.join("");
// console.log(ranGenStr);
// console.log(rgbNum);
// console.log(rgbNum);
// const rgbArr = [];
// for (let i = 0; i <= 2; i++) {
//   const rgbNum = Math.floor(Math.random() * 257);
//   rgbArr.push(rgbNum);
// }
// let rgbDis = rgbArr.join(",");
// console.log(rgbArr);
// console.log(rgbDis);
// let rgbrResult = `rgb(${rgbDis})`;
// console.log(rgbrResult);
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
const newCountries = [];
const landCountries = [];
const iaCountries = [];
// for (const country of countries) {
//   newCountries.push(country.toUpperCase());
// }
// console.log(newCountries);
// for (const country of countries) {
//   newCountries.push(country.length);
// }
// console.log(newCountries);
// for (const country of countries) {
//   newCountries.push([country, country.toUpperCase(), country.length]);
// }
// console.log(newCountries);
// for (const country of countries) {
//   if (country.includes("land")) {
//     landCountries.push(country);
//   } else {
//     newCountries.push(country);
//   }
// }
// for (const country of countries) {
//   if (country.endsWith("ia")) {
//     iaCountries.push(country);
//   }
// }
// console.log(landCountries);
// console.log(newCountries);
// console.log(iaCountries);
const countryNum = [];
for (const country of countries) {
  countryNum.push(country.length);
}
const nameLength = Math.max(...countryNum);
const longestCountry = countries[nameLength]; //wrong
console.log(countryNum);
console.log(nameLength);
console.log(longestCountry);
