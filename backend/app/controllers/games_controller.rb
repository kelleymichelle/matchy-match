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
    game = Game.find_by(id: params[:id])
    game.final_score = params[:final_score]
    game.save!
    render json: game
  end

  def high_scores
    games = Game.order(final_score: :desc)
    render json: game, include: [:player]
  end
  


end
