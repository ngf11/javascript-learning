// let month = prompt("What month is it?");
// function checkSeason(month) {
//   if (month == "december" || month == "janaury" || month === "febuary") {
//     alert("Winter");
//   } else if (month == "march" || month == "april" || month == "may") {
//     alert("Spring");
//   } else if (month == "june" || month == "july" || month == "agoust") {
//     alert("Summer");
//   } else if (
//     month == "september" ||
//     month == "october" ||
//     month == "november"
//   ) {
//     alert("Fall");
//   } else {
//     alert("not a valid");
//   }
// }
// checkSeason();
function findMax(...arg) {
  return Math.max(...arg);
}
console.log(findMax(10, 1, 22, 369));
function printArr(arr) {
  for (const element of arr) {
    console.log(element);
  }
}
const nums = [1, 2, 3, 4, 5];
const nico = ["Nicolas", "Funtes", "didi", "wu"];
printArr(nums);
printArr(nico);
function showDateTime() {
  const now = new Date();
  let day = now.getDay();
  let month = now.getMonth();
  let year = now.getFullYear();
  let hh = now.getHours();
  let mm = now.getMinutes();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (hh < 10) {
    hh = "0" + hh;
  }
  if (hh > 12) {
    hh = hh - 12;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  return `${month}/${day}/${year} ${hh}:${mm}`;
}
console.log(showDateTime());
