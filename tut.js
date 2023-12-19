function fetchData() {
  return new Promise((resolve, reject) => {
    fetch(
      "https://api.soccerdataapi.com/livescores/?auth_token=7336b77d2f4f9c28740cb42868508ed17e8ce4df"
    )
      .then((response) => response.json())
      .then((data) => resolve(data.map((item) => item.country)));
  });
}

function displayData(data) {
  console.log(data);
}
fetchData().then(displayData);
