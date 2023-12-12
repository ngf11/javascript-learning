const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];
const ages = [33, 12, 28, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
//for loop
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }
//foreach
// companies.forEach((company, index, comp) => {
//   console.log(company);
// });
//filter
// companies.filter((item, index) => {
//   console.log(item.name, index);
// });
// const overTwntieOne = ages.filter((items) => {
//   if (items >= 21) {
//     return items;
//   }
// });
// console.log(overTwntieOne);
// let twntieOneAndUp = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     twntieOneAndUp.push(ages[i]);
//   }
// }
// console.log(twntieOneAndUp);
// const retail = companies.filter((item) => item.category === "Retail");
// console.log(retail);
// const eighties = companies.filter(
//   (item) => item.start >= 1980 && item.start < 1990
// );
// console.log(eighties);
// const overTen = companies.filter((item) => item.end - item.start >= 10);
// console.log(overTen);
// const compName = companies.map((item) => item.name);
// console.log(compName);
// const squarAges = ages.map((item) => Math.sqrt(item));
// console.log(squarAges);
// const sortedComp = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedComp);
// const sortedAges = ages.sort();
// console.log(sortedAges);
// const sortAgess = ages.sort((a, b) => (a > b ? 1 : -1));
// const sortAgess = ages.sort((a, b) => a - b);
// const sortAgess = ages.sort((a, b) => b - a);
// console.log(sortAgess);
