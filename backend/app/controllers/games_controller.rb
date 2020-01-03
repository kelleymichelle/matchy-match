class GamesController < ApplicationController

  def index
    games = Game.all
    render json: games
  end

  def show
    game = Game.find_by(id: params[:id])
    render json: game, include: [:player, :tiles]
  end

  def update
    # binding.pry
    game = Game.find_by(id: params[:id])
    game.final_score = params[:final_score]
    render json: game
  end

  def high_scores

  end
  


end
