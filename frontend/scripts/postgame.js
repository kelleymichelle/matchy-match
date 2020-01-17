// const pushGameScore = (score) => {
//   // patch fetch
//   // debugger
//   let game_score = {
//     final_score: `${score}`
//   };
//   let configObj = {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     },
//     body: JSON.stringify(game_score)
//   };
//   fetch(`${BACKEND_URL}/games/${game.gameId}`, configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       game.congrats(data.final_score);
//     });
// }

// function congrats(final_score) {
  
//   tileBox.innerHTML = `<h1>Congrats ${game.playerName}! Level completed, your time is ${final_score}</h1>`

//   highScoreFetch()
// }

const highScoreRender = (data) => {
  console.log(data)
  // debugger
  const scoreBoard = document.getElementById('high-score-box')
  const capitalizedTitle = `High Scores for ${data[0].level.difficulty} Level`.toUpperCase()
  scoreBoard.innerHTML = `<h2>${capitalizedTitle}</h2>
  <ol id="score-board">
    
  </ol>`
scoreList = document.getElementById('score-board')
    data.forEach(score => { 
      const highScore = `<li>${score.player.name} - Time: ${score.final_score}</li>`
      scoreList.innerHTML += highScore
    })
    scoreBoard.innerHTML += `<a onclick="document.location.reload(true)" class="btn btn-success btn-lg" href="#" role="button">PLAY AGAIN</a>`
}

// function highScoreFetch() {
//   fetch(`${BACKEND_URL}/levels/${game.levelId}/high_scores`)
//     .then(response => response.json())
//     .then(res => highScoreRender(res))
// }
