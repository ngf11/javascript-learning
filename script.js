const month = 2; // February
const year = 2024; // Leap year
const numberOfDays = getNumberOfDays(month, year);
function getNumberOfDays(month, year) {
  const daysInMonth = {
    1: 31, // January
    2: isLeapYear(year) ? 29 : 28, // February (depends on leap year)
    3: 31, // March
    4: 30, // April
    5: 31, // May
    6: 30, // June
    7: 31, // July
    8: 31, // August
    9: 30, // September
    10: 31, // October
    11: 30, // November
    12: 31, // December
  };

  return daysInMonth[month];
}
function isLeapYear(year) {
  // Leap years are divisible by 4, but not by 100, unless they are divisible by 400
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(
  `Number of days in month ${month} of year ${year}: ${numberOfDays}`
);
