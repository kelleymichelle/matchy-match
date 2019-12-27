class Tile < ApplicationRecord
  has_many :games, through: :levels
  belongs_to :game
end
