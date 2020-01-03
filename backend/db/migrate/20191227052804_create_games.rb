class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.integer :player_id
      t.integer :level_id
      t.integer :final_score
      t.timestamps
    end
  end
end
