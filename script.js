let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toLocaleUpperCase());
console.log(challenge.toLocaleLowerCase());
console.log(challenge.substr(0, 2));
console.log(challenge.substring(0, 3));
console.log(challenge.slice(3, 20));
console.log(challenge.length - 1);
console.log(challenge.includes("Script"));
console.log(challenge.split(" "));
console.log(
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(", ")
);
console.log(challenge.replace("JavaScript", "Python"));
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
console.log(" 30 Days Of JavaScript ");
console.log(" 30 Days Of JavaScript ".trim());
console.log(challenge.startsWith(3));
console.log(challenge.endsWith("Script"));
console.log(challenge.match(/a/g));
console.log(challenge.repeat(10));
