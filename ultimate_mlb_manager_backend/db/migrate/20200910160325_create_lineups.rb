class CreateLineups < ActiveRecord::Migration[6.0]
  def change
    create_table :lineups do |t|
      t.integer :game_id
      t.integer :first_player_id
      t.integer :second_player_id
      t.integer :third_player_id
      t.integer :fourth_player_id
      t.integer :fifth_player_id
      t.integer :sixth_player_id
      t.integer :seventh_player_id
      t.integer :eighth_player_id
      t.integer :ninth_player_id
      t.timestamps
    end
  end
end
