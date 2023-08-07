const now = new Date();
console.log(now);
let year = now.getFullYear();
console.log(year);
let month = now.getMonth() + 1;
console.log(month);
let day = now.getDate();
console.log(day);
let date = now.getDay();
console.log(date);
let secondsTillNow = now.getTime();
console.log(secondsTillNow);
let hh = now.getHours();
let mm = now.getMinutes();
if (month < 10) {
  month = "0" + month;
}
if (day < 10) {
  day = "0" + day;
}
if (hh > 12) {
  hh = hh - 12;
}
if (hh < 10) {
  hh = "0" + hh;
}
if (mm < 10) {
  mm = "0" + mm;
}
console.log(`${month}/${day}/${year} ${mm}:${mm}`);
