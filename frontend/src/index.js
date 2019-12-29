const BACKEND_URL = 'http://localhost:3000'
const PLAYERS_URL = `${BACKEND_URL}/players`

document.addEventListener('DOMContentLoaded', function() {
  newGameForm();
})

function newGameForm() {
  const gameForm = 
  `<div class="new-player-form">
    <form>
      <div>
        <label for"playerName">Player Name:</label>
        <input type="text" id="playerName" name="playerName">
      </div>
      <div>
        <input type="radio" id="very-easy" name="very-easy" value="very-easy">
        <label for="very-easy">Very Easy</label>
      </div>
      <div>
        <input type="radio" id="easy" name="easy" value="easy">
        <label for="easy">Easy</label>
      </div>
      <div>
        <input type="radio" id="medium" name="medium" value="medium">
        <label for="medium">Medium</label>
      </div>
      <div>
        <input type="radio" id="hard" name="hard" value="hard">
        <label for="hard">Hard</label>
      </div>
      <div>
        <input type="radio" id="very-hard" name="very-hard" value="very-hard">
        <label for="very-hard">Very Hard</label>
      </div>


      <button type"submit">Let's Play!</button>
    </form>
  </div>`
  body = document.querySelector('body')
  body.innerHTML = gameForm
}

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