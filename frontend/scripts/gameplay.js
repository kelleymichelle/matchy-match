
const listenTiles = () => {
  const allTiles = [...document.getElementsByClassName("flip-card-inner")]
  allTiles.forEach(tile => {
    
    tile.addEventListener('click', tileAct)
  })
}

//const function action to listening event to allow remove listening event later on
const tileAct = () => {console.log(event.target.offsetParent)
  const tile = event.target.offsetParent
  toggleFlip(tile);
  // Tile.toggleFlip(tile)
}


let tilesInPlay = [];


const toggleFlip = (tile) => {
  tile.classList.toggle('flipped')
  disableTile(tile)
}

const disableTile = (tile) => {
  if (tile.classList.contains('flipped')) {
    
    tile.removeEventListener('click', tileAct)
    trackTiles(tile)
  }
}

const trackTiles = (tile) => {
 
    tilesInPlay.length === 2 ? evaluateTiles() : addTile(tile)
 
}

const addTile = (tile) => {
  tilesInPlay.push(tile)
  if (tilesInPlay.length === 2) {evaluateTiles()}
}

const evaluateTiles = () => {
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

const stopListening = () => {
  const allTiles = [...document.getElementsByClassName("flip-card-inner")]
  allTiles.forEach(tile => {
    tile.removeEventListener('click', tileAct)
  })
}

const eraseMatches = () => {
  tilesInPlay.forEach(tile => tile.remove())
  tilesInPlay = []
  gameEnd()
}

const replayTile = (tile) => {
  tile.classList.toggle('flipped')
  stopListening()
  tilesInPlay = []
  listenTiles()
}

const gameEnd = () => {
  const allTiles = document.getElementsByClassName("flip-card-inner")
  if ( allTiles.length === 0) {
    const counter = document.getElementById("game-timer")
    const gameCount = counter.innerText
    clearInterval(timerID)

    // pushGameScore(gameCount);
    game.pushGameScore(gameCount);
  }
}

