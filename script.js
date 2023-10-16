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

// start with 30 days then strugle
function capFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capFirst("milo"));
