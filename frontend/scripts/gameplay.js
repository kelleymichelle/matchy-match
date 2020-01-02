
function listenTiles() {
  const allTiles = [...document.getElementsByClassName("flip-card-inner")]
  allTiles.forEach(tile => {
    if (tile.classList.contains('flipped') === false) {
      tile.addEventListener('click', tileAct)
    }
  })
}

const tileAct = () => {console.log(event.target.offsetParent)
  const tile = event.target.offsetParent
  toggleFlip(tile)
}


let tilesInPlay;

function tileAction(tile) {
  
  toggleFlip(tile)
  // tilesInPlay << tile
  // disableTile(tile)

}

function toggleFlip(tile) {
  // debugger
  tile.classList.toggle('flipped')
  disableTile(tile)
}

function startTimer() {

}

function disableTile(tile) {
  // listenTiles()
  // debugger
  // tile.removeEventListener('click', toggleFlip(tile))

}