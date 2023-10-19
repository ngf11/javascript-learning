function seasons() {
  let month = prompt("What month is it?");
  let str = month.charAt(0).toUpperCase() + month.slice(1);

  if (str == "December" || str == "January" || str == "February") {
    alert("Winter");
  } else if (str == "March" || str == "April" || str == "May") {
    alert("Spring");
  } else if (str == "June" || str == "July" || str == "August") {
    alert("Summer");
  } else if (str == "September" || str == "October" || str == "November") {
    alert("Autumn");
  } else {
    alert("Thats not a month");
  }
}
seasons();
