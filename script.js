let date = new Date();
console.log(date);
let year = date.getFullYear();
console.log(year);
let month = date.getMonth() + 1;
let day = date.getDay();
console.log(month);
let hh = date.getHours();
let mm = date.getMinutes();
let minSice70 = date.getTime();
console.log(minSice70);
if (hh < 10) {
  hh = "0" + hh;
}
if (hh == 0) {
  hh = 12;
}
if (mm < 10) {
  mm = "0" + mm;
}
if (day < 10) {
  day = "0" + day;
}
if (month < 10) {
  month = "0" + month;
}
console.log(`${year}.${month}.${day} ${hh}:${mm}`);
console.log(`${month}-${day}-${year} ${hh}:${mm}`);
console.log(`${month}/${day}/${year} ${hh}:${mm}`);
