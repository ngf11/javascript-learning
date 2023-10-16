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
