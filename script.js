// Day 5
const emptyArr = [];
const nums = [11, 8, 369, 22, 33];
console.log(nums[0]);
// console.log(nums[nums.length]);
console.log(nums[nums.length - 1], -1);
console.log(nums[(nums.length - 1) / 2]);
const mixedDataTypes = ["nico", 1989, 34, true, "Uruguay", "United States"];
console.log(mixedDataTypes);
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
console.log("-------");
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
for (const upper of itCompanies) {
  console.log(upper.toUpperCase());
}
console.log(itCompanies.join(" "));
// itCompanies.splice(5, 2, "Oracle and Amazon are big tech companies").join(" ");
// console.log(itCompanies.toString(", "));
console.log(itCompanies);
let comapanyName = "Facebook";
const itExist = itCompanies.includes(comapanyName)
  ? itCompanies
  : "it dose not exist";
console.log(itExist);
