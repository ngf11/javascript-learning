function fun() {
  return new Promise((respone, reject) => {
    respone("Hello");
  });
}
function funn(data) {
  return new Promise((respone, reject) => {
    switch (data) {
      case "hello":
        respone("Hello 🙉 ");
        break;
      default:
        reject("AHHHHHHH");
    }
  });
}
function onSuccess(data) {
  console.log(`Succsses: ${data}`);
}

function onError(data) {
  console.log(" Error: AHAAHAHAH");
}
function onFinally() {
  console.log("ALL Done");
}
fun().then(funn).then(onSuccess).catch(onError).finally(onFinally);
