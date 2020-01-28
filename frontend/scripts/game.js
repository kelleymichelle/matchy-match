
class Game {
  constructor(playerName, playerId, gameId, levelId, tileBox) {
    this.playerName = playerName;
    this.playerId = playerId;
    this.gameId = gameId;
    this.levelId = levelId;
    this.tileBox = tileBox;
    this.tiles = [];
    this.timerID;
  }

  render() {
    console.log(game);
    // console.log(gameTiles);
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
    this.startTimer();
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


  startTimer() {
    this.timerID = setInterval(() => {
      const count = document.getElementById('game-timer')
      let num = parseInt(count.innerText)
      num++
      count.innerText = num
    }, 1000);
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

  //game end function
  end() {
    const allTiles = document.getElementsByClassName("flip-card-inner")
    if ( allTiles.length === 0) {
      const counter = document.getElementById("game-timer")
      const gameCount = counter.innerText
      clearInterval(this.timerID)
  
      this.pushGameScore(gameCount);
    }
  }

  static highScoreFetch() {
    fetch(`${BACKEND_URL}/levels/${game.levelId}/high_scores`)
      .then(response => response.json())
      .then(res => this.highScoreRender(res))
      .catch(err => alert(err.message))
  }

  

  static highScoreRender(data) {
    highScores = [...data]
    const scoreBoard = document.getElementById('high-score-box')
    const capitalizedTitle = `High Scores for ${data[0].level.difficulty} Level`.toUpperCase()
    scoreBoard.innerHTML = `<h2>${capitalizedTitle}</h2>
    <ol id="score-board">
      
    </ol>`
    const scoreList = document.getElementById('score-board')
      data.forEach(score => { 
        const highScore = `<li>${score.player.name} - Time: ${score.final_score}</li>`
        scoreList.innerHTML += highScore
      })
      scoreBoard.innerHTML += `<a onclick="document.location.reload(true)" class="btn btn-success btn-lg" href="#" role="button">PLAY AGAIN</a>
      <button id="sort-button" class="btn btn-secondary btn-lg">Alphabetize Players</button>`

      sortButtonListener();
  }
}


