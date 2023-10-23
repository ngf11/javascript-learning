function isWeekend() {
  let inquery = prompt("What day is today?");
  let toLower = inquery.toLowerCase();
  let day = toLower.charAt(0).toUpperCase() + toLower.slice(1);
  if (
    day == "Monday" ||
    day == "Tuesday" ||
    day == "Wednesday" ||
    day == "Thursday" ||
    day == "Friday"
  ) {
    alert(`What is the day today? ${inquery}
    ${day} is a week day.`);
  } else if (day == "Staturday" || day == "Sunday") {
    alert(`What is the day today? ${inquery}
    ${day} is a weekend.`);
  } else {
    alert(`${day} is not a real day try agian `);
  }
}
isWeekend();
