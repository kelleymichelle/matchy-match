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

const tileBackCats = [
  "images/cats/baby-cat.jpg", 
  "images/cats/cat-in-hat.jpg", 
  "images/cats/orange.jpg", 
  "images/cats/shybk.jpg", 
  "images/cats/sleepy-kitty.jpg",
  "images/cats/teacupkitty.jpg",
  "images/cats/winking-kitty.jpg",
  "images/cats/wow-stripe.jpg",
  "images/cats/blackkitty.jpg"]

function tileProcessor() {
  let num = 0
  processedTiles = gameTiles.map(t => {
    t.front = `<div class="flip-card-front rounded" tileid="${t.id}">
  </div>`
    t.back = `<div class="flip-card-back rounded" tileid="${t.id}">
    <img src="${tileBackCats[num]}">
  </div>`
    num = ++num
    
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
