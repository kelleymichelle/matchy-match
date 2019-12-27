# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

very_easy = Level.create(difficulty: 'very easy')
  4.times do |i|
    very_easy.tiles << Tile.create
  end
  
easy = Level.create(difficulty: 'easy')
  8.times do |i|
    easy.tiles << Tile.create
  end  

medium = Level.create(difficulty: 'medium')
  16.times do |i|
    medium.tiles << Tile.create
  end  

hard = Level.create(difficulty: 'hard')
  24.times do |i|
    hard.tiles << Tile.create
  end

very_hard = Level.create(difficulty: 'very hard')
  36.times do |i|
    very_hard.tiles << Tile.create
  end

