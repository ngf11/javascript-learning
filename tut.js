async function start() {
  const data = await fetch(
    "https://api.soccerdataapi.com/livescores/?auth_token=7336b77d2f4f9c28740cb42868508ed17e8ce4df"
  );
  const result = await data.json();
  const output = result.map((item) => item.country);
  console.log(output);
}

function start2() {
  return fetch(
    "https://api.soccerdataapi.com/livescores/?auth_token=7336b77d2f4f9c28740cb42868508ed17e8ce4df"
  )
    .then((response) => response.json())
    .then((data) => data.map((items) => console.log(items.league_name)));
}
start();
start2();
