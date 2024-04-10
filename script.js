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

const emptyArr = [];
console.log(emptyArr);
const numberArr = [1, 2, 3, 4, 5];
// console.log(numberArr.length);
console.log(numberArr[0]);
console.log(numberArr[(numberArr.length - 1) / 2]);
console.log(numberArr[numberArr.length - 1]);
const mixedDataTypes = ["nico", "fuentes", true, null, 35];
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(mixedDataTypes);
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[(itCompanies.length - 1) / 2]);
console.log(itCompanies[itCompanies.length - 1]);
// console.log("itCompanies".toUpperCase());
// for (company of itCompanies) {
//   console.log(company.toUpperCase());
// }
// itCompanies.splice(
//   itCompanies.length - 1,
//   1,
//   " and Amazon are big IT companies."
// );
// console.log("----");
// console.log(itCompanies.join(","));
let company = "Apple";
if (itCompanies.includes(company)) {
  console.log(`${company} exist in itCompanis array`);
} else {
  console.log("Company dons not exist");
}
const filteredCompanies = itCompanies.filter((company) => {
  const countO = (company.match(/o/g) || []).length;
  return countO <= 1;
});
console.log(filteredCompanies);
console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(2, 6));
