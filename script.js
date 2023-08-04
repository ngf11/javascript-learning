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

const newCountriesArr = [].sort();
for (const country of countries) {
  newCountriesArr.push(country);
}
console.log(newCountriesArr);
let longestCountry = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > longestCountry.length) {
    longestCountry = countries[i];
  }
}
console.log(longestCountry);
const countriesWithLand = [];
for (const country of countries) {
  if (country.includes("land")) {
    countriesWithLand.push(country);
  }
}
console.log(countriesWithLand);
const countriesLengthFour = [];
for (const country of countries) {
  if (country.length == 4) {
    countriesLengthFour.push(country);
  }
}
console.log(countriesLengthFour);
for (const country of countries) {
  console.log(country.length);
}
let RevDevArr = [];
for (let i = countries.length - 1; i >= 0; i--) {
  let index = countries[i];
  RevDevArr.push(index.toUpperCase());
}
console.log(RevDevArr.sort());
