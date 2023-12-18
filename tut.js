function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Something Went Wrong");
    }, 100);
  });
}
function onSucces() {
  console.log(`Success: ${data}`);
}
function onError() {
  console.log(`Error: ${Error}`);
}
async function start() {
  try {
    const data = await getData();
    onSucces();
  } catch (error) {
    console.log(`Error: ${error}`);
    onError();
  }
}

start();
