class LineupSerializer < ActiveModel::Serializer
  attributes :game, :first_player, :second_player, :third_player, :fourth_player, :fifth_player, :sixth_player, :seventh_player, :eighth_player, :nineth_player
  belongs_to :game
  belongs_to :player
end
