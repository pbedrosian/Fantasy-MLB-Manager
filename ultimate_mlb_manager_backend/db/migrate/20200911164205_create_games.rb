class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :team_against
      t.boolean :home_game
      t.string :date
      t.timestamps
    end
  end
end
