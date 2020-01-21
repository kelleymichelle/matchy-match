// const tileBox = document.getElementById("tile-box");

class Game {
  constructor(playerName, playerId, gameId, levelId, tileBox) {
    this.playerName = playerName;
    this.playerId = playerId;
    this.gameId = gameId;
    this.levelId = levelId;
    this.tileBox = tileBox;
  }

   render() {
    console.log(game);
    console.log(gameTiles);
    this.tileBox.innerHTML = "";
    // renderInfoBar();
    this.renderInfoBar();
    tileProcessor();
    this.renderTiles();
    listenTiles();
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

  renderTiles() {
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
      this.tileBox.innerHTML += thisTile;
    });
  }

  congrats(final_score) {
    this.tileBox.innerHTML = `<h1>Congrats ${this.playerName}! Level completed, your time is ${final_score}</h1>`
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
      })
      .catch(err => alert(err.message));
  }

  end() {
    const allTiles = document.getElementsByClassName("flip-card-inner")
    if ( allTiles.length === 0) {
      const counter = document.getElementById("game-timer")
      const gameCount = counter.innerText
      clearInterval(timerID)
  
      this.pushGameScore(gameCount);
    }
  }

  static highScoreFetch() {
    fetch(`${BACKEND_URL}/levels/${game.levelId}/high_scores`)
      .then(response => response.json())
      .then(res => highScoreRender(res))
      .catch(err => alert(err.message))
  }

}
