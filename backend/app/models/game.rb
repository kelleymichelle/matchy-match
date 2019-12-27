class Game < ApplicationRecord
  belongs_to :player
  has_one :level
  has_many :tiles, through: :levels
end
