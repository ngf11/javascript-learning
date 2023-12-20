function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello mate!!");
    }, 100);
  });
}
async function start() {
  const result = await getData();
  console.log(result);
}
start();
