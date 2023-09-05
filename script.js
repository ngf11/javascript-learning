// day 2
let challege = "30 Days of JavaScript";
console.log(challege);
console.log(challege.length);
console.log(challege.toUpperCase());
console.log(challege.toLowerCase());
console.log(challege.substring(3, 6));
console.log(challege.substring(challege.length));
console.log(challege.includes("Script"));
console.log(challege.split(""));
console.log(
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(",")
);
console.log("30 Days Of JavaScript".replace("JavaScript", "Python"));
console.log(challege.charAt(15));
console.log(challege.charCodeAt("J"));
console.log(challege.indexOf("a"));
console.log(challege.lastIndexOf("a"));
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
console.log();
console.log(" 30 Days Of JavaScript ".trim());
console.log(challege.startsWith("3"));
console.log(challege.endsWith("Script"));
console.table(challege.match(/a/g));
console.log("30 Days".concat(" of JavaScript"));
console.log(challege.repeat(2));
console.log(
  `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
);
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);
console.log(typeof "10" === typeof 10);
console.log(typeof parseInt("10") === typeof 10);
console.log(parseFloat("9.8") === 10);
console.log(Math.round(parseFloat("9.8")) === 10);
