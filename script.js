const whatDayIsIt = () => {
  let day = prompt("What day is it?");
  let dayLowered = day.toLowerCase();
  let dayCap = (dayLowered) => {
    return dayLowered.charAt(0).toUpperCase() + dayLowered.slice(1);
  };
  return dayCap(dayLowered) == "Monday" ||
    "Tusday" ||
    "Wednesday" ||
    "Tursday" ||
    "Friday"
    ? console.log("It's a Weekday")
    : console.log("its the weekend");
};
whatDayIsIt();
