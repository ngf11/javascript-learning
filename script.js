// Here we go day 2
let challenge = "30 Days of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toLocaleUpperCase());
console.log(challenge.toLocaleUpperCase());
console.log(challenge.substr(3, 4));
console.log(challenge.substring(3, 7));
console.log(challenge.slice(3, 7));
console.log(challenge.includes("Script"));
console.log(challenge.split(""));
console.log(
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(", ")
);
console.log("30 Days of JavaScript".replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
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
console.log(" 30 Days Of JavaScript  ");
console.log(" 30 Days Of JavaScript  ".trim());
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("Script"));
console.table(challenge.match(/a/gi));
console.log(challenge.match("a"));
let str = "30 Days of";
let space = " ";
let strr = "Javascript";
console.log(str.concat(strr));
console.log(str.concat(space).concat(strr));
console.log(challenge.repeat(10));
