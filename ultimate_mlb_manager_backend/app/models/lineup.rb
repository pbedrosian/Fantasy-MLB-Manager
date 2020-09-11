class Lineup < ApplicationRecord
    # has_and_belongs_to_many :players

    belongs_to :first_player, class_name: "Player"
    belongs_to :second_player, class_name: "Player"
    belongs_to :third_player, class_name: "Player"
    belongs_to :fourth_player, class_name: "Player"
    belongs_to :fifth_player, class_name: "Player"
    belongs_to :sixth_player, class_name: "Player"
    belongs_to :seventh_player, class_name: "Player"
    belongs_to :eighth_player, class_name: "Player"
    belongs_to :nineth_player, class_name: "Player"
end
