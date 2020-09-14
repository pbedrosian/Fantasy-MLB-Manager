class ChangeColumnStats < ActiveRecord::Migration[6.0]
  def up
    change_column :stats, :era, :float, default: 0
    change_column :stats, :whip, :float, default: 0
    change_column :stats, :avg, :float, default: 0
    change_column :stats, :on_base_pct, :float, default: 0
    change_column :stats, :slugging_pct, :float, default: 0
  end

  def down
    change_column :stats, :era, :integer, default: 0
    change_column :stats, :whip, :integer, default: 0
    change_column :stats, :avg, :integer, default: 0
    change_column :stats, :on_base_pct, :integer, default: 0
    change_column :stats, :slugging_pct, :integer, default: 0
  end
end
