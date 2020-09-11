class CreatePitchingStats < ActiveRecord::Migration[6.0]
  def change
    create_table :pitching_stats do |t|
      t.integer :player_id
      t.integer :wins, default: 0
      t.integer :losses, default: 0
      # t.float :earn_run_average, default: 0
      t.integer :strike_outs, default: 0
      t.integer :saves, default: 0
      # t.integer :whip, default: 0
      t.timestamps
    end
  end
end
