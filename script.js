let firstName = "nico";
let lastName = "fuentes";
let country = "United States";
let city = "Kearny";
let isMarried = false;
let age = 34;
console.log(
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof city,
  typeof isMarried,
  typeof age
);
console.log(typeof "10" == typeof 10);
console.log(typeof parseFloat("9.8") == typeof 10);
let bobo = true;
let milo = 10;
let didi = "good for me";
let choad = false;
let nico = "";
let bro = undefined;
let mate = null;
let you = 0;
console.log(4 > 3, true);
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
console.log("python".length === "jargon".length);

console.log(4 > 3 && 10 > 12, false);
console.log(4 > 3 || 10 < 12, true);
console.log(4 > 3 || 10 > 12, false);
console.log(!(4 > 3), false);
console.log(!(4 < 3), true);
console.log(!false, true);
console.log(!(4 > 3 && 10 < 12), false);
console.log(!(4 > 3 && 10 > 12), true);
console.log(!(4 === "4"), false);
console.log(!("dragon".includes("on") && "python".includes("on")));
