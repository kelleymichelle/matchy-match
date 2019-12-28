const BACKEND_URL = 'http://localhost:3000'
const PLAYERS_URL = `${BACKEND_URL}/players`

fetch(`${BACKEND_URL}/test`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));

function postPlayer() {
  let player = {
    name: "Kelley",
    level: "very easy"
  };
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(player)
  };
  fetch("http://localhost:3000/players", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
    });
  };