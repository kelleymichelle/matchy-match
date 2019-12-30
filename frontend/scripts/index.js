const BACKEND_URL = 'http://localhost:3000'
const PLAYERS_URL = `${BACKEND_URL}/players`

document.addEventListener('DOMContentLoaded', function() {
  newGameForm();
  listenForNewGame();
  
})

function newGameForm() {
  const gameForm = 
  `<div class="jumbotron" id="new-player-form">
    <form>
      <div>
        <label for"playerName">Player Name:</label>
        <input type="text" id="playerName" name="playerName">
      </div>
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        
      <label class="btn btn-secondary">
          <input class="radio" type="radio" id="very-easy" name="options" value="very easy">Very Easy
      </label>  
       
        <label class="btn btn-secondary">
          <input class="radio" type="radio" id="easy" name="options" value="easy">Easy
        </label>
        
        <label class="btn btn-secondary">
          <input class="radio" type="radio" id="medium" name="options" value="medium">Medium
        </label>
        
        <label class="btn btn-secondary">
          <input class="radio" type="radio" id="hard" name="options" value="hard">Hard
        </label>
        
        <label class="btn btn-secondary">
          <input class="radio" type="radio" id="very-hard" name="options" value="very hard">Very Hard
        </label>
      </div>
      
      <button type"submit" class="btn btn-primary btn-sm">Let's Play!</button>
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
    const playerName = e.target["0"].value
    const playerLevel = diff.value
    console.log(playerName)
    console.log(playerLevel)
    postPlayer(playerName, playerLevel)
  })
}

function postPlayer(name, level) {
  let player = {
    name: `${name}`,
    level: `${level}`
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
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    parseGame(data)
  })
  };

  // parse data returned from post fetch for new player/game
  let game;

  function parseGame(data) {
    console.log(data)
    // const dataTiles = [...data.tiles]
    game = new Game(data.player_name, data.player_id, data.game_id)
    fetchTiles(game.gameId)
  }

  // fetch tiles for game
  function fetchTiles(gameId) {
  fetch(`${BACKEND_URL}/games/${gameId}`)
    .then(response => response.json())
    .then(parsedResponse => parseTiles(parsedResponse.tiles));
  }

  let gameTiles;

  function parseTiles(tiles) {
   
    gameTiles = tiles.map(t => {
      let newTile = new Tile(t.id, t.front, t.back)
      return newTile
    })
    
    renderGame();
  }

  class Game {
    constructor(playerName, playerId, gameId) {
      this.playerName = playerName
      this.playerId = playerId
      this.gameId = gameId
      // this.gameTimer = 0
    }
    
  }

  class Tile {
    constructor(id, front, back) {
      this.id = id
      this.front = front
      this.back = back
    }
  }
