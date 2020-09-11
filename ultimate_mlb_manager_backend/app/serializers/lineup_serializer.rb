class LineupSerializer < ActiveModel::Serializer
  attributes :id, :first_player, :second_player, :third_player, :fourth_player, :fifth_player, :sixth_player, :seventh_player, :eighth_player, :nineth_player
end
