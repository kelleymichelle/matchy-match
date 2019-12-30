// game- gameid, playerid, playername
// gametiles- array with each tile instance
const tileBox = document.getElementById('tile-box')

function renderGame() {
  console.log(game)
  console.log(gameTiles)
  tileBox.innerHTML = ""
  renderInfoBar();
  // tileContainer();
  tileProcessor();
  renderTiles();
}

function renderInfoBar() {
  
  const nabber = document.getElementById('nabber')
  const navbar = `
  <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
    <div><h1>mAtChY-mAtCh</h1></div>
    
  </nav>
  `
  nabber.innerHTML = navbar
}


let processedTiles;

function tileProcessor() {
  processedTiles = gameTiles.map(t => {
    t.front = `<div class="rounded thumbnail" style="background-color: green;" tileid="${t.id}"></div>`
    t.back = `<div class="rounded thumbnail" style="background-color: blue;" tileid="${t.id}"></div>`
    return t
  })
  
}

function renderTiles() {
  processedTiles.map(t => {
    tileBox.innerHTML += t.front
  })
}