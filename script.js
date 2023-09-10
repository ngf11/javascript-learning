const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
let enterCorp = "Apple";
let index = itCompanies.indexOf(enterCorp);
if (index == -1) {
  console.log("this company dose not exist");
} else {
  console.log(`${itCompanies[index]} does exist`);
}
//14 part one
