class Level < ApplicationRecord
  # has_many :tiles, through: :games
  has_many :games, through: :tiles
  has_many :tiles, dependent: :destroy
  has_many :games

  validates :difficulty, presence: true

  def find_level(diff)
    self.where(difficulty: diff)
  end

  # def very_easy_level_maker
  #   very_easy = Level.create(difficulty: 'very easy')
  #   4.times do |i|
  #     very_easy.tiles << Tile.create
  #   end
  # end
  
end
