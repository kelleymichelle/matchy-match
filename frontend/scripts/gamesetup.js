// game- gameid, playerid, playername
// gametiles- array with each tile instance
const tileBox = document.getElementById("tile-box");

function renderGame() {
  console.log(game);
  console.log(gameTiles);
  tileBox.innerHTML = "";
  renderInfoBar();
  // tileContainer();
  tileProcessor();
  renderTiles();
}

function renderInfoBar() {
  const nabber = document.getElementById("nabber");
  const navbar = `
  <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
    <div><h1>mAtChY-mAtCh</h1></div>
    
  </nav>
  `;
  nabber.innerHTML = navbar;
}

let processedTiles;

const tileBackColors = []

function tileProcessor() {
  processedTiles = gameTiles.map(t => {
    t.front = `<div class="flip-card-front rounded" tileid="${t.id}">
    
  </div>`
    t.back = `<div class="flip-card-back rounded" tileid="${t.id}>
    <p style="color:black;"></p>
  </div>`

    // t.front = `<div class="front"> </div>`
    // t.back = `<div class="back"><p style="color:black;"></p></div>`
    return t;
  });
}

function renderTiles() {
  let clonedTiles = [...processedTiles];
  clonedTiles = clonedTiles.concat(processedTiles);

  shuffle(clonedTiles).map(t => {
    const thisTile = `
    <div class="flip-card thumbnail">
  <div class="flip-card-inner rounded" onclick="flip()">
    ${t.front}
    ${t.back}
  </div>
</div>
    `
    tileBox.innerHTML += thisTile;
  });
}

function flip() {
  $('.flip-card-inner').toggleClass('flipped');
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  console.log(array);
  return array;
}
