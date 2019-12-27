class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.float :timer
      t.timestamps
    end
  end
end
