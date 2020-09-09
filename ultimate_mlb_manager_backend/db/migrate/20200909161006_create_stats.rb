class CreateStats < ActiveRecord::Migration[6.0]
  def change
    create_table :stats do |t|
      t.belongs_to :player, null: false, foreign_key: true
      t.integer :batting_avg, default: 0
      t.integer :runs, default: 0
      t.integer :hits, default: 0
      t.integer :homeruns, default: 0
      t.integer :runs_batted_in, default: 0
      t.integer :on_base_pct, default: 0
      t.integer :slugging_pct, default: 0
      t.integer :wins, default: 0
      t.integer :losses, default: 0
      t.integer :earn_run_average, default: 0
      t.integer :strike_outs, default: 0
      t.integer :saves, default: 0
      t.integer :whip, default: 0
      t.timestamps
    end
  end
end
