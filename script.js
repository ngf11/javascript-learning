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
let rgbArr = [];
for (let i = 0; i < 3; i++) {
  let random = Math.floor(Math.random() * 256);
  rgbArr.push(random);
}
let rgb = `rgb(${rgbArr})`;
console.log(rgbArr);
console.log(rgb);
// for (const items of countries) {
//   let upperItems = [];
//   upperItems.push(items.toUpperCase());
//   console.log(upperItems);
//   // console.log(items.toUpperCase());
// }
let country = [];
for (let i = 0; i < countries.length; i++) {
  let newArr;
  newArr = countries[i].toUpperCase();
  console.log(newArr);
  country.push(newArr);
}
console.log(country);
let countryLength = [];
for (const items of countries) {
  console.log(items.length);
  countryLength.push(items.length);
}
console.log(countryLength);
let contryInfo = [];
for (const items of countries) {
  console.log([items, items.slice(0, 3).toUpperCase(), items.length]);
}
const landCountries = countries.filter((items) => {
  return items.includes("land");
});
console.log(landCountries);
const countriesEndIa = countries.filter((itm) => {
  return itm.endsWith("ia");
});
console.log(countriesEndIa);
let longgestCountries = [];
for (let i = 1; i < countries.length; i++) {
  if (countries[i].length > longgestCountries.length) {
    longgestCountries = countries[i];
  }
}
console.log(longgestCountries);
const fiveCharLength = countries.filter((items) => {
  if (items.length === 5) {
    return items;
  }
});
console.log(fiveCharLength);
let longestTech = [];
for (let i = 1; i < webTechs.length; i++) {
  if (webTechs[i].length > longestTech.length) {
    longestTech = webTechs[i];
  }
}
console.log(longestTech);
let techInfo = [];
for (const tech of webTechs) {
  techInfo.push([tech, tech.length]);
}
console.log(techInfo);
