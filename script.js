//day 2
let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toLocaleUpperCase());
console.log(challenge.toLocaleLowerCase());
console.log(challenge.substr(0, 2));
console.log(challenge.substring(3, 6));
console.log(challenge.includes("Script"));
console.log(challenge.split(""));
console.log(challenge.split(" "));
console.log(challenge.split(","));
console.log(challenge.split(" , "));
console.log(challenge.split(" ,"));
console.log(
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(", ")
);
console.log(
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(" ,")
);
// console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
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
  "You cannot end a sentence with because because because is a conjunction".search(
    "because"
  )
);
console.log(" 30 Days Of JavaScript ".trim());
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("Script"));
console.log(challenge.match(/a/gi));
console.log("30 Days of".concat("JavaScript"));
console.log(challenge.repeat(10));
