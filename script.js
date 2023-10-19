/* function canYouDrive() {
  let yourAge = prompt("How old are you?");
  return yourAge >= 18
    ? alert(`Enter your age: ${yourAge}\nYou are old enough to drive.`)
    : alert(
        `Enter your age: ${yourAge}\nYou are left with ${
          18 - yourAge
        } years to drive.`
      );
}
canYouDrive();
function isEven() {
    let num = prompt("Enter a number");
    return num % 2 === 0 ? alert("Is even ") : alert("its odd");
}
isEven();
let yourGrade = prompt("What is your grade?", "number form");
switch (true) {
    case yourGrade >= 90:
        alert("A");
        break;
        case yourGrade >= 80:
            alert("B");
            break;
            case yourGrade >= 70:
                alert("C");
                break;
                case yourGrade >= 60:
                    alert("D");
                    break;
                    case yourGrade <= 50:
                        alert("F");
                        break;
                        default:
                            alert("Thats not a grade");
                        }
                        
                        */

function seasons() {
  let month = prompt("What month is it?");
  let str = month.charAt(0).toUpperCase() + month.slice(1);
  if(str =="December" || str == "January" || str =="February"){
      alert("Winter")
  }else if (str =="March" || str == "April" || str =="May"){
    alert("Spring")
  }else if(str =="June" || str == "July" || str =="August"){
      alert("Summer")
  }else if (str =="September" || str == "October" || str =="November"){
      alert("Autumn")
  }else{
      alert("Thats not a month")
  }
}
seasons();
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer