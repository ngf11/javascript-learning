//Day 5
const arr = [];
const nums = [1, 2, 3, 4, 5];
console.log(nums.length);
const mixedDataTypes = [
  "nico",
  34,
  1989,
  "Uruguay",
  "United States",
  true,
  null,
];
console.log(mixedDataTypes);
console.log(mixedDataTypes.length);
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[(itCompanies.length - 1) / 2]);
console.log(itCompanies[itCompanies.length - 1]);
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());
// itCompanies.splice(5, 2, "Oracle and Amazon are big IT companies");
// console.log(itCompanies.toString());
// console.log(itCompanies.join(""));
itCompanies[0].toUpperCase();
itCompanies[1].toUpperCase();
itCompanies[2].toUpperCase();
itCompanies[3].toUpperCase();
itCompanies[4].toUpperCase();
itCompanies[5].toUpperCase();
itCompanies[6].toUpperCase();
console.log(itCompanies);
let enterCorp = prompt("Enter a company name");
let index = itCompanies.indexOf(enterCorp);
if (index == -1) {
  alert("this company dose not exist");
} else {
  alert(`${itCompanies[index]} does exist`);
}
