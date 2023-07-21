//Day 03
const firstName = "nico";
const lastName = "Fuentes";
const country = "United States";
const state = "New Jersey";
const age = 34;
const isMerried = false;
const year = 1989;
console.log(
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof state,
  typeof age,
  typeof isMerried,
  typeof year
);
console.log(typeof "10" == typeof 10);
console.log(parseFloat("9.8") == 10);
let didi = true;
let you = "nico";
let milo = 100;
let her = false;
let ths = undefined;
let bed = null;
let bro = "";
console.log(4 > 3, true);
console.log(4 >= 3, true);
console.log(4 < 3, false);
console.log(4 <= 3, true);
console.log(4 == 4, true);
console.log(4 === 4, true);
console.log(4 != 4, false);
console.log(4 !== 4, false);
console.log(4 != "4", true);
console.log(4 == "4", false);
console.log(4 === "4", false);
console.log("python".length != "jargon".length);
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
console.log(!("python".includes("on") && "dragon".includes("on")));
