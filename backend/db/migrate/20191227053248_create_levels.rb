class CreateLevels < ActiveRecord::Migration[6.0]
  def change
    create_table :levels do |t|
      t.string :difficulty
      # t.integer :tile_id
      # t.integer :game_id
      t.timestamps
    end
  end
end
