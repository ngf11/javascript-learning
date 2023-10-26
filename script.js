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
for (const country of countries) {
  if (country.includes("Ethiopia") == true) {
    console.log(country.toUpperCase());
  }
}
if (webTechs.includes("Sass")) {
  console.log(webTechs);
} else {
  webTechs.splice(2, 0, "Sass is a CSS preprocess");
  console.log(webTechs);
}
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
let median = ages[Math.round((ages.length - 1) / 2)];
let sum = 0;
for (let i = 0; i <= ages.length; i++) {
  sum += i;
}
let ave = Math.round(sum / ages.length);
console.log(ave);
let min = Math.min(...ages);
let max = Math.max(...ages);
console.log({ min, max });
console.log(min - ave, max - ave);
// countries.splice(0, 9);
// console.log(countries);
let midd = (countries.length - 1) / 2;
console.log(countries[midd]);
