
const alphabetizeNamess = (data) => 
  data.sort((a, b) => (a.player.name > b.player.name) ? 1 : -1)

const unalphabetizeNamess = (data) => 
  data.sort((a, b) => (a.final_score > b.final_score) ? 1 : -1)


let highScores = [];

const sortButtonListener = () => {
  const sortButtonElement = document.getElementById('sort-button')
  sortButtonElement.addEventListener('click', e => {
      const data = alphabetizeNamess(highScores)
      const button = `<button id="unsort-button" class="btn btn-secondary btn-lg">See High Scores</button>`
      alphaPlayers(data, "Ordered Players for", button, unsortButtonListener);
      
  })
}

 function alphaPlayers(data, snippet, button, listener) {
  //  const orderedPlayers = alphabetizeNamess(highScores);
   console.log(data)
  const scoreBoard = document.getElementById('high-score-box')
  const capitalizedTitle = `${snippet} ${data[0].level.difficulty} Level`.toUpperCase()
  scoreBoard.innerHTML = `<h2>${capitalizedTitle}</h2>
  <ol id="score-board">
    
  </ol>`
  const scoreList = document.getElementById('score-board')
    data.forEach(score => { 
      const highScore = `<li>${score.player.name} - Time: ${score.final_score}</li>`
      scoreList.innerHTML += highScore
    })
    scoreBoard.innerHTML += `<a onclick="document.location.reload(true)" class="btn btn-success btn-lg" href="#" role="button">PLAY AGAIN</a>
    ${button}`
    listener()
}

// const buttonListener = () => {
//   if 
// }
 
const unsortButtonListener = () => {
  const unsortButtonElement = document.getElementById('unsort-button')
  unsortButtonElement.addEventListener('click', e => {
      const button = `<button id="sort-button" class="btn btn-secondary btn-lg">Alphabetize Players</button>`
      const data = unalphabetizeNamess(highScores)
      alphaPlayers(data, "High Scores for", button, sortButtonListener)
  })
}


