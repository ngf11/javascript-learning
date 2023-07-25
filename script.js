// let enterMonth = prompt("Enter Month");
// let month = enterMonth.toLocaleLowerCase();
// switch (true) {
//   case month == "february":
//     alert("28 Days");
//     break;
//   case month == "january" ||
//     month == "march" ||
//     month == "may" ||
//     month == "july" ||
//     month == "august" ||
//     month == "october" ||
//     month == "december":
//     alert("31 days");
//     break;
//   case month == "april" ||
//     month == "june" ||
//     month == "september" ||
//     month == "november":
//     alert("30 days");
//     break;
//   default:
//     alert("That's not a valid month");
// }
let year = prompt("Enter any year");
let month = prompt("Enter the nuber of month");
const whatIsIt = numberOfDays(Number(year), Number(month));
function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
function numberOfDays(year, month) {
  const monthDays = {
    1: 31,
    2: leapYear(year) ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  return monthDays[month];
}
numberOfDays();
alert(`${year}, ${month}, ${whatIsIt}`);
