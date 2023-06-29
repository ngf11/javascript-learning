// Day 3
//firstName, lastName, country, city, age, isMarried, year
let firstName = "Nicolas";
let lastName = "Fuentes";
let country = "USA";
let city = "Kearny";
let age = 34;
let isMarried = false;
let year = 2023;
console.log(
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof city,
  typeof age,
  typeof isMarried,
  typeof year
);
console.log(typeof "10" == typeof 10);
console.log(typeof "10" === typeof 10);
console.log(parseFloat("9.8") === 10);
let name = "";
let state = null;
let bro = undefined;
let jojo = false;
let popo = 0;
let jiji = "You know what I mean";
let gigi = 10;
let pepe = true;
console.log(4 > 3, "ture");
console.log(4 >= 3, " true");
console.log(4 < 3, "false");
console.log(4 <= 3, " false");
console.log(4 == 4, " ture");
console.log(4 === 4, "true");
console.log(4 != 4, "false");
console.log(4 !== 4, "false");
console.log(4 != "4", "ture");
console.log(4 == "4", "true");
console.log(4 === "4", "false");
console.log(4 > 3 && 10 < 12, "true");
console.log(4 > 3 && 10 > 12, "false");
console.log(4 > 3 || 10 < 12, "true");
console.log(4 > 3 || 10 > 12, "true");
console.log(!(4 > 3), " false");
console.log(!(4 < 3), " ture");
console.log(!false, " true");
console.log(!(4 > 3 && 10 < 12), "false");
console.log(!(4 > 3 && 10 > 12), "ture");
console.log(!(4 === "4"), " ture");
// There is no 'on' in both dragon and python
console.log(!("dragon", `python`).includes("on"));
