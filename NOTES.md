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

