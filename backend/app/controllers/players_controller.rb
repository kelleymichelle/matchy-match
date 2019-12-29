class PlayersController < ApplicationController

  def index
    players = Player.all
    render json: players
  end

  def show
    player = Player.find_by(id: params[:id])
    render json: player, include: [:games]
  end

  def create
    # binding.pry
    player_name = params[:name]
    player_level = params[:level]
    player = Player.create(name: player_name)
    game = Game.new
    player.games << game

    case player_level
    when "very easy"
      very_easy_level_maker(game)
    when "easy"
      easy_level_maker(game)
    when "medium"
      medium_level_maker(game)
    when "hard"
      hard_level_maker(game)
    when "very hard"
      very_hard_level_maker(game)
    end          
    
    render json: {player_id: player.id, player_name: player.name, game_id: game.id, tiles: game.tiles }
  end

  #helpers for number of tiles per level

  def very_easy_level_maker(game)
    level = Level.new(difficulty: "very easy")
    game.level = level
    4.times do |i|
      level.tiles << Tile.new(game_id: game.id)
    end  
  end

  def easy_level_maker(game)
    level = Level.new(difficulty: "easy")
    game.level = level
    8.times do |i|
      level.tiles << Tile.new(game_id: game.id)
    end
  end

  def medium_level_maker(game)
    level = Level.new(difficulty: "medium")
    game.level = level
    16.times do |i|
      level.tiles << Tile.new(game_id: game.id)
    end
  end

  def hard_level_maker(game)
    level = Level.new(difficulty: "hard")
    game.level = level
    24.times do |i|
      level.tiles << Tile.new(game_id: game.id)
    end
  end

  def very_hard_level_maker(game)
    level = Level.new(difficulty: "very hard")
    game.level = level
    36.times do |i|
      level.tiles << Tile.new(game_id: game.id)
    end
  end


end
