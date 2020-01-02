
function listenTiles() {
  const allTiles = [...document.getElementsByClassName("flip-card-inner")]
  allTiles.forEach(tile => {
    // if (tile.classList.contains('flipped') === false) {
    //   tile.addEventListener('click', tileAct)
    // }
    tile.addEventListener('click', tileAct)
  })
}

const tileAct = () => {console.log(event.target.offsetParent)
  const tile = event.target.offsetParent
  tileAction(tile)
}


let tilesInPlay = [];

function tileAction(tile) {
  
  // trackTiles(tile)
  toggleFlip(tile)
  // tilesInPlay << tile
  // disableTile(tile)

}

function toggleFlip(tile) {
  // debugger
  tile.classList.toggle('flipped')
  disableTile(tile)
  // trackTiles()
}

function startTimer() {

}

function disableTile(tile) {
  if (tile.classList.contains('flipped')) {
    // console.log(tilesInPlay)
    tile.removeEventListener('click', tileAct)
    trackTiles(tile)
  }
  // trackTiles(tile)
  //   if (tilesInPlay.length >= 2) {
  //     trackTiles
  // }
}

function trackTiles(tile) {
  // if (tilesInPlay.length === 2) {
  //    evaluateTiles() } else {
  //     tilesInPlay.push(tile)
  //   }
  
    tilesInPlay.length === 2 ? evaluateTiles() : addTile(tile)
    // if (tilesInPlay.length === 2) {
    //   evaluateTiles()
    // }
    // console.log(tilesInPlay)
}

function addTile(tile) {
  tilesInPlay.push(tile)
  if (tilesInPlay.length === 2) {evaluateTiles()}
}

function evaluateTiles() {
  console.log(tilesInPlay)
  // debugger
  setTimeout( function() {
  if (tilesInPlay[0].innerHTML === tilesInPlay[1].innerHTML) {
    console.log("yay we match!") 
    // stopListening()
    eraseMatches()
    // eraseMatches()
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
}

function replayTile(tile) {
  tile.classList.toggle('flipped')
  stopListening()
  tilesInPlay = []
  listenTiles()
}

function resetTiles() {

}