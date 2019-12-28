class CreateTiles < ActiveRecord::Migration[6.0]
  def change
    create_table :tiles do |t|
      t.string :front
      t.string :back
      t.integer :level_id
      t.integer :game_id
      t.timestamps
    end
  end
end
