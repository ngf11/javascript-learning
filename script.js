for (let i = 1; i <= 10; i++) {
  let outPut = "";
  for (let j = 1; j < i; j++) {
    outPut += "#";
  }
  console.log(outPut);
}
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} =  ${i * i}`);
}
for (let i = 0; i <= 10; i++) {
  console.log(`${i} ${i ** 2} ${i ** 3}`);
}
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
