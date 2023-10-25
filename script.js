//day 05
const emptyArray = [];
const numArray = [1, 2, 34, 5, 6, 369];
console.log(numArray.length);
console.log(
  numArray[0],
  numArray[Math.round((numArray.length - 1) / 2)],
  numArray[numArray.length - 1]
);
const mixedDataTypes = ["nico", "milo", true, false, 11, { skill: null }];
let itCompanies = [
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
for (const companies of itCompanies) {
  console.log(companies.toUpperCase());
}
// itCompanies.splice(5, 2, "Oracle and Amazon are big IT companies.");
// console.log(itCompanies.toString());
// let enterCorp = prompt("Enter a name of a company");
// let lowerCorp = enterCorp.toLowerCase();
// let corp = lowerCorp.charAt(0).toUpperCase() + lowerCorp.slice(1);
// if (itCompanies.includes(corp) == true) {
//   alert(corp);
// } else {
//   alert("company is not found");
// }
let filteredCompanies = [];
for (let i = 0; i < itCompanies.length; i++) {
  let company = itCompanies[i];
  let count = 0;
  for (let j = 0; j < company.length; j++) {
    if (company[j].toLowerCase() === "o") {
      count++;
    }
  }
  if (count >= 2) {
    filteredCompanies.push(company);
  }
}
console.log(filteredCompanies);
console.log(itCompanies.sort());
console.log(itCompanies.sort().reverse());
