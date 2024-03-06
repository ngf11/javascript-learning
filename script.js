let grade = prompt("What is your grade", " in numbers");
switch (true) {
  case grade > 90 && grade < 100:
    console.log("A");
    break;
  case grade > 80:
    console.log("B");
    break;
  case grade > 70:
    console.log("C");
    break;
  case grade > 60:
    console.log("D");
    break;
  case grade < 50:
    console.log("F");
    break;
  default:
    console.log("Thats not a valid grade");
}
