let challege = "30 Days of JavaScript";
console.log(challege);
console.log(challege.length);
console.log(challege.toLowerCase());
console.log(challege.toUpperCase());
console.log(challege.substring(3, 7));
console.log(challege.slice(3, challege.length - 1));
console.log(challege.includes("Script"));
console.log(challege.split());
console.log(challege.split(""));
console.log(challege.split(" "));
console.log(
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(",")
);
console.log("30 Days of JavaScript".replace("JavaScript", "Python"));
console.log("30 Days of JavaScript".charAt(15));
console.log("30 Days of JavaScript".charCodeAt("J"));
console.log("30 Days of JavaScript".indexOf("a"));
console.log("30 Days of JavaScript".lastIndexOf("a"));
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
console.log(" 30 Days Of JavaScript ");
console.log(" 30 Days Of JavaScript ".trim());
console.log(challege.startsWith("3"));
console.log(challege.endsWith("Script"));
console.log(challege.match("a"));
console.log(challege.match(/a/gi));
console.table(challege.match("a"));
console.table(challege.match(/a/gi));
console.log("30 Days of".concat(" JavaScript"));
console.log(challege.repeat(10));
