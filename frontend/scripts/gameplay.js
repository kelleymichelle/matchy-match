
const listenTiles = () => {
  const allTiles = [...document.getElementsByClassName("flip-card-inner")]
  // bugFix()
  allTiles.forEach(tile => {
    bugFix(tile)
    

    tile.addEventListener('mousedown', tileAct)
    tile.addEventListener('touchstart', tileAct)
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
  stopListening()
  console.log(tilesInPlay)
  
  // allTiles.forEach(t => 

  //   {if (t.classList.contains('flipped')) { tilesInPlay.push(t) } })
  
  setTimeout( function() {
  if (tilesInPlay[0].innerHTML === tilesInPlay[1].innerHTML) {
    console.log("yay we match!") 
    listenTiles()
    eraseMatches()
    
    } else { 
      console.log("we don't match")
      tilesInPlay.forEach(t => replayTile(t))
      }}, 850 )
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
  // bugFix()
  game.end()
}

const replayTile = (tile) => {
  // bugFix()
  tile.classList.toggle('flipped')
  stopListening()
  tilesInPlay = []
  listenTiles()
}

function bugFix(tile) {
    if( tile.classList.contains('flipped') ){
      tile.classList.toggle('flipped')
    }
}


