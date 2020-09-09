class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :first_name
      t.string :last_name
      t.string :primary_position
      t.integer :number
      t.string :current_team
      t.string :handness_bats
      t.string :handness_throws
      t.string :image_url
      t.timestamps
    end
  end
end
