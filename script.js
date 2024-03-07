// let grade = prompt("What is your grade", " in numbers");
// switch (true) {
//   case grade > 90 && grade < 100:
//     console.log("A");
//     break;
//   case grade > 80:
//     console.log("B");
//     break;
//   case grade > 70:
//     console.log("C");
//     break;
//   case grade > 60:
//     console.log("D");
//     break;
//   case grade < 50:
//     console.log("F");
//     break;
//   default:
//     console.log("Thats not a valid grade");
// }
const seasons = () => {
  let promptMonth = prompt("What month is it?");
  let lowerCase = promptMonth.toLowerCase();
  let firstChar = (lowerCase) =>
    lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
  switch (firstChar(lowerCase)) {
    case "September" || "October" || "November":
      console.log("Autumn");
      break;
    case "December" || "January" || "February":
      console.log("Winter");
      break;
    case "March" || "April" || "May":
      console.log("Spring");
    case "June" || "July" || "August":
      console.log("Summer");
      break;
    default:
      console.log("Not a valid month");
  }
};

seasons();
