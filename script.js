function numberOfDays() {
  let query = prompt("What month is it?");
  const year = parseInt(prompt("Enter a year:"));
  let lowered = query.toLowerCase();
  let month = lowered.charAt(0).toUpperCase() + lowered.slice(1);
  if (
    month == "January" ||
    month == "March" ||
    month == "May" ||
    month == "July" ||
    month == "August" ||
    month == "October" ||
    month == "December"
  ) {
    return `${month} has 31 days`;
  }
  if (
    month == "April" ||
    month == "June" ||
    month == "September" ||
    month == "November"
  ) {
    return `${month} has 30 days`;
  }
  if (
    month === "February" &&
    ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
  ) {
    return `${month} has 29 days`;
  }
  if (month == "February") {
    return `${month} has 28 days`;
  }
}
console.log(numberOfDays());
