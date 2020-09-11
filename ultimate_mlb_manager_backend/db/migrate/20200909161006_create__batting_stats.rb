class CreateBattingStats < ActiveRecord::Migration[6.0]
  def change
    create_table :batting_stats do |t|
      t.belongs_to :player, null: false, foreign_key: true
      # t.real :batting_avg, default: 0
      t.integer :runs, default: 0
      t.integer :hits, default: 0
      t.integer :homeruns, default: 0
      t.integer :runs_batted_in, default: 0
      # t.integer :on_base_pct, default: 0
      # t.integer :slugging_pct, default: 0
      t.timestamps
    end
  end
end
