function getWeather() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("");
    }, 100);
  });
}

function getIcon(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (data) {
        case "Sunny":
          resolve("🌞 ");
          break;
        case "Cloudy":
          resolve("⛅ ");
          break;
        case "Rainy":
          resolve("🌧 ");
          break;
        default:
          reject("Ass 🏳️‍🌈 ");
      }
    }, 200);
  });
}

function onSuccess(data) {
  console.log(`Success: ${data}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}
getWeather().then(getIcon).then(onSuccess).catch(onError);
