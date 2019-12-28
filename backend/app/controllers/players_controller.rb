class PlayersController < ApplicationController

  def create
    #create new player
    # binding.pry
    player_name = params[:name]
    player_level = params[:level]
    player = Player.create(name: player_name)
    game = Game.new
    player.games << game
    # binding.pry
    level = Level.new(difficulty: player_level)
    game.level = level
    
    binding.pry
    
    #write method to find level by params input
  end

end
