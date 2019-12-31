
function listenTiles() {
  const allTiles = [...document.getElementsByClassName("flip-card-inner")]
  allTiles.forEach(tile => {
    tile.addEventListener('click', e => {
      console.log(e)
      toggleFlip(tile)
    })
  })
}

function toggleFlip(tile) {
  tile.classList.toggle('flipped')
}