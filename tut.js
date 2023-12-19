function funOne() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 100);
  });
}

function funTwo(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (data) {
        case "Hello":
          resolve("🍑 ");
          break;
        case "Damn":
          resolve("🍒 ");
          break;
        default:
          reject("🍌 ");
      }
    }, 100);
  });
}

function onSuccess(data) {
  console.log(`Success: ${data}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function onFinally() {
  console.log("Completed");
}
funOne().then(funTwo).then(onSuccess).catch(onError).then(onFinally);
