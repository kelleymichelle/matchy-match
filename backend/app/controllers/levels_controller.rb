class LevelsController < ApplicationController


  def high_scores
    level = Level.find_by(id: params[:id]).difficulty
    games = Level.find_difficulty(level)[0].games.order(final_score: :asc).where.not(final_score: nil).limit(5)
    render json: games, include: [:player, :level]
  end

end
