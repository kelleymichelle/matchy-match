// game- gameid, playerid, playername
// gametiles- array with each tile instance
const tileBox = document.getElementById("tile-box");

class Game {
  constructor(playerName, playerId, gameId, levelId) {
    this.playerName = playerName;
    this.playerId = playerId;
    this.gameId = gameId;
    this.levelId = levelId;
  }

  renderInfoBar() {
    const nabber = document.getElementById("nabber");
    const navbar = `
    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
      <div><h1 style="font-family: 'Monoton', cursive;">mAtChY-mAtCh</h1></div>
      <div><h3>Player: ${this.playerName}</h3></div>
      <div id="game-timer"><h3>0</h3></div>
      
    </nav>
    `;
    nabber.innerHTML = navbar;
    startTimer();
  }

  congrats(final_score) {
    tileBox.innerHTML = `<h1>Congrats ${this.playerName}! Level completed, your time is ${final_score}</h1>`
    Game.highScoreFetch()
  }

  pushGameScore(score) {
    let game_score = {
      final_score: `${score}`
    };
    let configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(game_score)
    };
    fetch(`${BACKEND_URL}/games/${this.gameId}`, configObj)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        game.congrats(data.final_score);
      });
  }

  static highScoreFetch() {
    fetch(`${BACKEND_URL}/levels/${game.levelId}/high_scores`)
      .then(response => response.json())
      .then(res => highScoreRender(res))
  }

}

// class Tile {
//   constructor(id, front, back) {
//     this.id = id;
//     this.front = front;
//     this.back = back;
//   }
// }

function renderGame() {
  console.log(game);
  console.log(gameTiles);
  tileBox.innerHTML = "";
  // renderInfoBar();
  game.renderInfoBar();
  tileProcessor();
  renderTiles();
  listenTiles();
}


// function renderInfoBar() {
//   const nabber = document.getElementById("nabber");
//   const navbar = `
//   <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
//     <div><h1 style="font-family: 'Monoton', cursive;">mAtChY-mAtCh</h1></div>
//     <div><h3>Player: ${game.playerName}</h3></div>
//     <div id="game-timer"><h3>0</h3></div>
    
//   </nav>
//   `;
//   nabber.innerHTML = navbar;

//   startTimer();
// }
let timerID;

function startTimer() {
  timerID = setInterval(() => {
    const count = document.getElementById('game-timer')
    let num = parseInt(count.innerText)
    num++
    count.innerText = num
  }, 1000);
}

// should work tHeOrEtIcAlLy
// const startTimer = () => { 
//   return setInterval(() => {
//   const count = document.getElementById('game-timer')
//   let num = parseInt(count.innerText)
//   num++
//   count.innerText = num
// }, 1000)}

let processedTiles;

const tileBackCats = [
  "images/cats/baby-cat.jpg",
  "images/cats/baseball-cat.jpeg",
  "images/cats/bear-cat.jpg",
  "images/cats/cat-in-hat.jpg",
  "images/cats/dob-1.jpg",
  "images/cats/rainbow-kitties.jpg",
  "images/cats/glamor-kitty.jpg",
  "images/cats/savannah.jpeg",
  "images/cats/orange.jpg", 
  "images/cats/shybk.jpg", 
  "images/cats/sleepy-kitty.jpg",
  "images/cats/stalker.jpg",
  "images/cats/teacupkitty.jpg",
  "images/cats/winking-kitty.jpg",
  "images/cats/wow-stripe.jpg",
  "images/cats/blackkitty.jpg",
  "images/cats/banana-cat.jpg",
  "images/cats/doctor-who.jpg",
  "images/cats/dorothy.jpg",
  "images/cats/frog-kitty.jpg",
  "images/cats/hammock-kity.jpg",
  "images/cats/held-fuzzy-kitty.jpeg",
  "images/cats/hoody-cat.jpg",
  "images/cats/jawa-cat.jpg",
  "images/cats/jedi-cat.jpg",
  "images/cats/kissing-kitties.jpg",
  "images/cats/lioncat.jpg",
  "images/cats/nyan-cat.jpeg",
  "images/cats/octopussy.jpg",
  "images/cats/paws-on-glass1b48f8d72b77eef0a3e760d4fb9.jpg",
  "images/cats/pimp-kitty.png",
  "images/cats/queen-kitty.jpg",
  "images/cats/snow-white.png",
  "images/cats/tabby-potter.jpg",
  "images/cats/tophat-cat.jpg",
  "images/cats/woody.jpg",
  "images/cats/piano-cat.jpg",
  "images/cats/snoopy-cat.jpg",
  "images/cats/yarn-kitty.jpeg"]

  const shuffledCats = () => shuffle(tileBackCats)

const tileProcessor = () => {
  let num = 0
  processedTiles = gameTiles.map(t => {
    t.front = `<div class="flip-card-front rounded" tileid="${t.id}">
  </div>`
    t.back = `<div class="flip-card-back rounded" tileid="${t.id}">
    <img src="${shuffledCats()[num]}">
  </div>`
    num = ++num
    
    return t; 
  });
}

const renderTiles = () => {
  let clonedTiles = [...processedTiles];
  clonedTiles = clonedTiles.concat(processedTiles);

  shuffle(clonedTiles).map(t => {
    const thisTile = `
    <div class="flip-card thumbnail">
  <div class="flip-card-inner rounded">
    ${t.front}
    ${t.back}
  </div>
</div>
    `
    tileBox.innerHTML += thisTile;
  });
}

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  // console.log(array);
  return array;
}
