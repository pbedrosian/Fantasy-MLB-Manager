class ChangePlayerColumnLineup < ActiveRecord::Migration[6.0]
  def change
    rename_column :lineups, :nineth_layer_id, :nineth_player_id
  end
end
