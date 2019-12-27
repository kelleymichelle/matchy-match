class HighScore < ApplicationRecord
  has_one :player
  has_one :game
end
