class Level < ApplicationRecord
  # has_many :tiles, through: :games
  # has_many :games, through: :tiles
  has_many :tiles
  has_many :games, class_name: 'Game', foreign_key: 'level_id'

  validates :difficulty, presence: true

  scope :find_difficulty, ->(level_difficulty) { where(:difficulty => level_difficulty)}

  # def find_level(diff)
  #   self.where(difficulty: diff)
  # end

  
end
