
function listenTiles() {
  const allTiles = [...document.getElementsByClassName("flip-card-inner")]
  allTiles.forEach(tile => {
    
    tile.addEventListener('click', tileAct)
  })
}

const tileAct = () => {console.log(event.target.offsetParent)
  const tile = event.target.offsetParent
  toggleFlip(tile)
}


let tilesInPlay = [];


function toggleFlip(tile) {
  tile.classList.toggle('flipped')
  disableTile(tile)
}

function disableTile(tile) {
  if (tile.classList.contains('flipped')) {
    
    tile.removeEventListener('click', tileAct)
    trackTiles(tile)
  }
 
}

function trackTiles(tile) {
 
    tilesInPlay.length === 2 ? evaluateTiles() : addTile(tile)
 
}

function addTile(tile) {
  tilesInPlay.push(tile)
  if (tilesInPlay.length === 2) {evaluateTiles()}
}

function evaluateTiles() {
  console.log(tilesInPlay)
 
  setTimeout( function() {
  if (tilesInPlay[0].innerHTML === tilesInPlay[1].innerHTML) {
    console.log("yay we match!") 
    eraseMatches()
    
    } else { 
      console.log("we don't match")
      tilesInPlay.forEach(t => replayTile(t))
      }}, 900 )
}

function stopListening() {
  const allTiles = [...document.getElementsByClassName("flip-card-inner")]
  allTiles.forEach(tile => {
    tile.removeEventListener('click', tileAct)
  })
}

function eraseMatches() {
  tilesInPlay.forEach(tile => tile.remove())
  tilesInPlay = []
  gameEnd()
}

function replayTile(tile) {
  tile.classList.toggle('flipped')
  stopListening()
  tilesInPlay = []
  listenTiles()
}

function gameEnd() {
  const allTiles = document.getElementsByClassName("flip-card-inner")
  if ( allTiles.length === 0) {
    const counter = document.getElementById("game-timer")
    const gameCount = counter.innerText
    clearInterval(timerID)

    pushGameScore(gameCount);
  }
}

