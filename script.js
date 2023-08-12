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
