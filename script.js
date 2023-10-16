//day 3
let firstName = "nico";
let lastName = "Fuentes";
let country = "United Sates";
let state = "New Jeresey";
let age = 34;
let isMerried = false;
console.log({ firstName, lastName, country, state, age, isMerried });
console.log(typeof "10" === typeof 10);
console.log(parseFloat("9.8") == 10);
let milo = "woof";
let didi = 3;
let isCool = true;
let notCool = null;
let milito = undefined;
let bro;
console.log(4 > 3);
console.log(4 >= 3, true);
console.log(4 < 3, false);
console.log(4 <= 3, false);
console.log(4 == 4, true);
console.log(4 === 4, true);
console.log(4 != 4, false);
console.log(4 !== 4, false);
console.log(4 != "4", false);
console.log(4 == "4", true);
console.log(4 === "4", false);
console.log(!("python".length === "jargon".length));
console.log(4 > 3 && 10 < 12, true);
console.log(4 > 3 && 10 > 12, false);
console.log(4 > 3 || 10 < 12, true);
console.log(4 > 3 || 10 > 12, true);
console.log(!(4 > 3), false);
console.log(!(4 < 3), true);
console.log(!false, true);
console.log(!(4 > 3 && 10 < 12), false);
console.log(!(4 > 3 && 10 > 12), true);
console.log(!(4 === "4"), true);
console.log(!("dragon".includes("on"), "python".includes("on")));
const now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();
let hh = now.getHours();
let mm = now.getMinutes();
let sinceTheSeventies = now.getTime();
console.log({ year, month, day, hh, mm, sinceTheSeventies });

// start with 30 days then strugle
function capFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capFirst("milo"));
