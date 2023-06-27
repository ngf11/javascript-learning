let challenge = "30 Days of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toLocaleUpperCase());
console.log(challenge.toLocaleLowerCase());
console.log(challenge.charAt("D"));
console.log(challenge.substr(3, 4));
console.log(challenge.slice(3, 7));
console.log(challenge.includes("Script"));
console.log(challenge.split(" "));
console.log(challenge.charAt(15));
console.log(
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(",")
);
console.log(challenge.replace("JavaScript", "Python"));
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
    "beacuse"
  )
);
console.log(" 30 Days Of JavaScript ".trim());
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("Script"));
console.log(challenge.match("a"));
console.log(challenge.split(" ").concat());
console.log(challenge.repeat(2));
