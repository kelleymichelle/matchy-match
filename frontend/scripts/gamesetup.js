
class Tile {
  constructor(id, front, back) {
    this.id = id;
    this.front = front;
    this.back = back;
  }
}


//starts timer for game and captures timerID to clear later
let timerID;

function startTimer() {
  timerID = setInterval(() => {
    const count = document.getElementById('game-timer')
    let num = parseInt(count.innerText)
    num++
    count.innerText = num
  }, 1000);
}


let processedTiles;

//array of cat pic files for backs of tiles
const tileBackCats = [
  "images/cats/baby-cat.jpg",
  "images/cats/baseball-cat.jpeg",
  "images/cats/bear-cat.jpg",
  "images/cats/cat-in-hat.jpg",
  "images/cats/dob-1.jpg",
  "images/cats/rainbow-kitties.jpg",
  "images/cats/glamor-kitty.jpg",
  "images/cats/savannah.jpeg",
  "images/cats/orange.jpg", 
  "images/cats/shybk.jpg", 
  "images/cats/sleepy-kitty.jpg",
  "images/cats/stalker.jpg",
  "images/cats/teacupkitty.jpg",
  "images/cats/winking-kitty.jpg",
  "images/cats/wow-stripe.jpg",
  "images/cats/blackkitty.jpg",
  "images/cats/banana-cat.jpg",
  "images/cats/doctor-who.jpg",
  "images/cats/dorothy.jpg",
  "images/cats/frog-kitty.jpg",
  "images/cats/hammock-kity.jpg",
  "images/cats/held-fuzzy-kitty.jpeg",
  "images/cats/hoody-cat.jpg",
  "images/cats/jawa-cat.jpg",
  "images/cats/jedi-cat.jpg",
  "images/cats/kissing-kitties.jpg",
  "images/cats/lioncat.jpg",
  "images/cats/nyan-cat.jpeg",
  "images/cats/octopussy.jpg",
  "images/cats/paws-on-glass1b48f8d72b77eef0a3e760d4fb9.jpg",
  "images/cats/pimp-kitty.png",
  "images/cats/queen-kitty.jpg",
  "images/cats/snow-white.png",
  "images/cats/tabby-potter.jpg",
  "images/cats/tophat-cat.jpg",
  "images/cats/woody.jpg",
  "images/cats/piano-cat.jpg",
  "images/cats/snoopy-cat.jpg",
  "images/cats/yarn-kitty.jpeg"]

  const shuffledCats = () => shuffle(tileBackCats)

const tileProcessor = () => {
  let num = 0
  const effingCats = shuffledCats()
  processedTiles = gameTiles.map(t => {
    t.front = `<div class="flip-card-front rounded" tileid="${t.id}">
  </div>`
    t.back = `<div class="flip-card-back rounded" tileid="${t.id}">
    <img src="${effingCats[num]}">
  </div>`
    num = ++num
    
    return t; 
  });
}

// const renderTiles = () => {
//   let clonedTiles = [...processedTiles];
//   clonedTiles = clonedTiles.concat(processedTiles);

//   shuffle(clonedTiles).map(t => {
//     const thisTile = `
//     <div class="flip-card thumbnail">
//   <div class="flip-card-inner rounded">
//     ${t.front}
//     ${t.back}
//   </div>
// </div>
//     `
//     this.tileBox.innerHTML += thisTile;
//   });
// }

// function shuffle2(array) {
//   let currentIndex = array.length,
//     temporaryValue,
//     randomIndex;
//   while (0 !== currentIndex) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//   // console.log(array);
//   return array;
// }


function shuffle(arr){
  let indices = []
  const shuffledIndices = []
  for(let i = 0; i < arr.length; i++){
    indices.push(i)
  }
  while (indices.length > 0){
    const randomIndex = Math.floor(Math.random() * indices.length)
    shuffledIndices.push(indices[randomIndex])
    indices = indices.filter(i => i !== indices[randomIndex])

  }
  return shuffledIndices.map(i => arr[i])
}

// const set1 = new Set(shuffle(tileBackCats))
// const set2 = new Set(shuffle2(tileBackCats))

// console.log(tileBackCats.length)
// console.log(set1.size)
// console.log(set2.size)