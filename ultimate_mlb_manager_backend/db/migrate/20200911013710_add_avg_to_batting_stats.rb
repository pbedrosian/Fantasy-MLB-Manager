class AddAvgToBattingStats < ActiveRecord::Migration[6.0]
  def change
    add_column :batting_stats, :avg, :float, default: 0
    add_column :batting_stats, :on_base_pct, :float, default: 0
    add_column :batting_stats, :slugging_pct, :float, default: 0
  end
end
