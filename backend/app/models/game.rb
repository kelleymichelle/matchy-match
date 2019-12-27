class Game < ApplicationRecord
  belongs_to :player
  has_one :level
  has_many :tiles, through: :level
  has_one :high_score
end
