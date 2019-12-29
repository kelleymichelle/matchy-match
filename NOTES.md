Player 
- name
- games

Game
- levels
- timer
- tiles
- player

levels = [very easy, easy, medium, hard, very hard]

tile
- front
- back

Player has many games.
Game belongs to a player. 

game has many tiles through levels

seed data = levels and amount of tiles for difficulty. 
tiles

difficulty:
very easy: 8/ 4x2
easy: 16/ 4x4
medium: 32/ 8x4
hard: 48/ 12x4
insane: 72/ 9x8

* frontend can set front and back styling of tiles and double each tile per level. 
* Player enters name, selects level, new game begins. 
* new game renders tiles, doubled fronts facing and timer begins
* high score board saves players high score and displays top 5 or 10

12/28: 
* can save a player and associated game and level

Tile.new(game_id: game.id)
level.tiles << tile

fetch(`${BACKEND_URL}/test`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));

  -to remove elements by id:
    document.getElementById('new-player-form').remove();

    TODO: fetch function to get tiles for game (2/3 fetch calls)


