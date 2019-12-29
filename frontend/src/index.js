const BACKEND_URL = 'http://localhost:3000'
const PLAYERS_URL = `${BACKEND_URL}/players`

document.addEventListener('DOMContentLoaded', function() {
  newGameForm();
  listenForNewGame();
  
})

function newGameForm() {
  const gameForm = 
  `<div id="new-player-form">
    <form>
      <div>
        <label for"playerName">Player Name:</label>
        <input type="text" id="playerName" name="playerName">
      </div>
      <div>
        <input class="radio" type="radio" id="very-easy" name="radio" value="very-easy">
        <label for="very-easy">Very Easy</label>
      </div>
      <div>
        <input class="radio" type="radio" id="easy" name="radio" value="easy">
        <label for="easy">Easy</label>
      </div>
      <div>
        <input class="radio" type="radio" id="medium" name="radio" value="medium">
        <label for="medium">Medium</label>
      </div>
      <div>
        <input class="radio" type="radio" id="hard" name="radio" value="hard">
        <label for="hard">Hard</label>
      </div>
      <div>
        <input class="radio" type="radio" id="very-hard" name="radio" value="very-hard">
        <label for="very-hard">Very Hard</label>
      </div>


      <button type"submit">Let's Play!</button>
    </form>
  </div>`
  body = document.querySelector('body')
  body.innerHTML = gameForm

}

function listenForNewGame() {
  const gameForm = document.getElementById('new-player-form')
  const radios = document.getElementsByClassName('radio')

  gameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const radioArray = [...radios]
    const diff = radioArray.find(r => r.checked)
    // const elements = [...e.target.elements]
    console.log(e.target["0"].value)
    console.log(diff.value)
  })
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