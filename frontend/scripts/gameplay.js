// game- gameid, playerid, playername
// gametiles- array with each tile instance

function renderGame() {
  console.log(game)
  console.log(gameTiles)
  renderInfoBar();
}

function renderInfoBar() {
  const body = document.querySelector('body')
  const navbar = `
  <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
    <div><h1>mAtChY-mAtCh</h1></div>
    
  </nav>
  `
  body.innerHTML = navbar
}

function createContainers() {

}

function tileContainers() {

}