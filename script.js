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
  "Iceland",
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
let countriesLength = [];
for (const country of countries) {
  countriesLength.push(country.length);
}
console.log(countriesLength);
let countriesInfo = [];
for (const country of countries) {
  countriesInfo.push([
    country,
    country.toUpperCase().slice(0, 3),
    country.length,
  ]);
}
console.log(countriesInfo);
let countriesWithLand = [];
for (const country of countries) {
  if (country.includes("land")) {
    countriesWithLand.push(country);
  }
}
console.log(countriesWithLand);
let countriesWithIA = [];
for (const country of countries) {
  if (country.includes("ia")) {
    countriesWithIA.push(country);
  }
}
console.log(countriesWithIA);
let longestCountry = [];
for (let i = 1; i < countries.length; i++) {
  if (countries[i].length > longestCountry.length) {
    longestCountry = countries[i];
  }
}
console.log(longestCountry);
let countriesLengthFive = [];
for (const country of countries) {
  if (country.length === 5) {
    countriesLengthFive.push(country);
  }
}
console.log(countriesLengthFive);
let longestTech = [];
for (let i = 1; i < webTechs.length; i++) {
  if (webTechs[i].length > longestTech.length) {
    longestTech = webTechs[i];
  }
}
console.log(longestTech);
