console.log(typeof "10" == typeof 10);
console.log(parseFloat("9.8") == 10);
console.log(Math.round(parseFloat("9.8")) == 10);
console.log("jargon".includes("on"), "python".includes("on"));
console.log("I hope this course is not full of jargon".includes("jargon"));
console.log(Math.floor(Math.random() * 100));
console.log(Math.floor(Math.random() * 50) * 2);
console.log(Math.floor(Math.random() * 156));
let str = "JavaScript";
let strSlipt = str.split("");
console.log(strSlipt[Math.floor(Math.random() * strSlipt.length)]);
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 6\n45 1 5 25 125");
console.log(
  "You cannot end a sentence with because because because is a conjunction".indexOf(
    "because"
  )
);
console.log(
  "You cannot end a sentence with because because because is a conjunction".lastIndexOf(
    "because"
  )
);
console.log(
  "You cannot end a sentence with because because because is a conjunction".substring(
    31,
    54
  )
);
