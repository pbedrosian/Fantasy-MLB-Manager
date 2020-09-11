class AddEraToPitchingStats < ActiveRecord::Migration[6.0]
  def change
    add_column :pitching_stats, :era, :float, default: 0
    add_column :pitching_stats, :whip, :float, default: 0
  end
end
