const now = new Date();
let day = now.getDate();
let month = now.getMonth();
let year = now.getFullYear();
let hh = now.getHours();
let mm = now.getMinutes();
if (day < 10) {
  day = "0" + day;
}
if (month > 10) {
  month = "0" + month;
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
console.log(now);
console.log(hh);
console.log(mm);
console.log(`${day}.${month}.${year} ${hh}:${mm}`);
