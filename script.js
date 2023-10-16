const now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();
let hh = now.getHours();
let mm = now.getMinutes();
let sinceTheSeventies = now.getTime();
console.log({ year, month, day, hh, mm, sinceTheSeventies });
const PI = 3.14;
let radius = prompt("What is theraidius of a rectangle?");
let area = alert(`The area of the rectangle is ${PI * radius * radius}`);
let rate = 10;
let hours = 40;
let erned = console.log(
  `enter rate: ${rate}\nenter hours: ${hours}\nenter erned: ${hours * rate}`
);
let enterName = prompt("Enter your name?");
if (enterName.length >= 7) {
  alert(`that is a long name`);
} else {
  alert("That is a short name");
}
let myfritName = "Nicolas";
let myLAstName = "Fuentes";
if (myfritName.length >= myLAstName.length) {
  alert("Your first name is longer then your last name");
} else {
  alert(`Your last name is longer the your frist name`);
}
let yourYear = prompt("What year were you born?");
let canYouDrive =
  year - yourYear >= 18
    ? alert(
        `Enter Year: ${yourYear}\nYou are ${
          year - yourYear
        } years old. your can dirve.`
      )
    : alert(
        `Enter Year: ${yourYear}\nYou are ${
          year - yourYear
        } years old. your can not dirve. You still have ${
          18 - (year - yourYear)
        }`
      );
if (hh > 12) {
  hh = hh - 12;
}
if (hh < 10) {
  hh = "0" + hh;
}
if (mm < 10) {
  mm = "0" + mm;
}
if (month < 10) {
  month = "0" + month;
}
if (day < 10) {
  day = "0" + day;
}
console.log(`${day}.${month}.${year} ${hh}:${mm}`);
// start with 30 days then strugle
function capFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capFirst("milo"));
