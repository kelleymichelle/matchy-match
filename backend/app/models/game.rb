class Game < ApplicationRecord
  belongs_to :player
  belongs_to :level
  # has_one :level
  has_many :tiles, through: :level

  scope :difficulty, ->(level_difficulty) { where(:difficulty => level_difficulty)}

  def difficulty
    self.level.difficulty
  end

end
