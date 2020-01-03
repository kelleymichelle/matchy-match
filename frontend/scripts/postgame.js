function pushGameScore(score) {
  // patch fetch
  // debugger
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
  fetch(`${BACKEND_URL}/games/${game.gameId}`, configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      congrats(data.final_score);
    });
}

function congrats(final_score) {
  
  tileBox.innerHTML = `<h1>Congrats ${game.playerName}! Level completed, your time is ${final_score}</h1>
  <div><h2>Play Again</h2</div>`

  high_score_fetch()
}

function high_score_render(data) {
  console.log(data)
  // debugger
  const scoreBoard = document.getElementById('high-score-box')
  scoreBoard.innerHTML = `<div> <h2>High Scores for ${data[0].level.difficulty} Level</h2>
  <ol id="score-board">
    
  </ol>

</div>`
scoreList = document.getElementById('score-board')
    data.forEach(score => { 
      const highScore = `<li><h5>Player: ${score.player.name} Time: ${score.final_score}</h5></li>`
      scoreList.innerHTML += highScore
    })
}

function high_score_fetch() {
  fetch(`${BACKEND_URL}/levels/${game.levelId}/high_scores`)
    .then(response => response.json())
    .then(res => high_score_render(res))
}