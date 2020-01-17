
class Tile {
  constructor(id, front, back) {
    this.id = id;
    this.front = front;
    this.back = back;
  }

  // static processor() {
  //   let num = 0
  // processedTiles = gameTiles.map(t => {
  //   t.front = `<div class="flip-card-front rounded" tileid="${t.id}">
  // </div>`
  //   t.back = `<div class="flip-card-back rounded" tileid="${t.id}">
  //   <img src="${shuffledCats()[num]}">
  // </div>`
  //   num = ++num
    
  //   return t; 
  // });
  // }

  // static toggleFlip(tile) {
  //   tile.classList.toggle('flipped')
  //   Tile.disable(tile)
  // }

  // static disable(tile) {
  //   if (tile.classList.contains('flipped')) {
  //     tile.removeEventListener('click', tileAct)
  //     Tile.trackTiles()
  //   }
  // }

  // static trackTiles() {
  //   tilesInPlay.length === 2 ? Tile.evaluateTiles() : Tile.addTile()
  // }

  // static addTile() {
  //   tilesInPlay.push(this)
  //   if (tilesInPlay.length === 2) {Tile.evaluateTiles()}
  // }

  // static replayTile(tile) {
  //   tile.classList.toggle('flipped')
  //   stopListening()
  //   tilesInPlay = []
  //   listenTiles()
  // }

  // static evaluateTiles() {
  //   console.log(tilesInPlay)
  //   setTimeout( function() {
  //   if (tilesInPlay[0].innerHTML === tilesInPlay[1].innerHTML) {
  //     console.log("yay we match!") 
  //     eraseMatches()
      
  //     } else { 
  //       console.log("we don't match")
  //       tilesInPlay.forEach(t => t.replayTile())
  //       }}, 900 )
  //   }

  // static eraseMatches() {
  //   tilesInPlay.forEach(tile => tile.remove())
  //   tilesInPlay = []
  //   gameEnd()
  // } 

  // static stopListening() {
  //   const allTiles = [...document.getElementsByClassName("flip-card-inner")]
  //   allTiles.forEach(tile => {
  //   tile.removeEventListener('click', tileAct)
  // })
  // }

}