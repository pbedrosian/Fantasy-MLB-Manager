class LineupSerializer < ActiveModel::Serializer
  attributes :game, :first_player, :second_player, :third_player, :fourth_player, :fifth_player, :sixth_player, :seventh_player, :eighth_player, :nineth_player
  belongs_to :game
  belongs_to :first_player
  belongs_to :second_player
  belongs_to :third_player
  belongs_to :fourth_player
  belongs_to :fifth_player
  belongs_to :sixth_player
  belongs_to :seventh_player
  belongs_to :eighth_player
  belongs_to :nineth_player
end
