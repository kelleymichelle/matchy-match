class Game < ApplicationRecord
  belongs_to :player
  belongs_to :level
  # has_one :level
  has_many :tiles, through: :level


end
