class Player < ApplicationRecord

    has_many :stats

    has_and_belongs_to_many :games
    
    has_and_belongs_to_many :first_players, class_name: "Lineup", foreign_key: "first_player_id"
    has_and_belongs_to_many :second_players, class_name: "Lineup", foreign_key: "second_player_id"
    has_and_belongs_to_many :third_players, class_name: "Lineup", foreign_key: "third_player_id"
    has_and_belongs_to_many :fourth_players, class_name: "Lineup", foreign_key: "fourth_player_id"
    has_and_belongs_to_many :fifth_players, class_name: "Lineup", foreign_key: "fifth_player_id"
    has_and_belongs_to_many :sixth_players, class_name: "Lineup", foreign_key: "sixth_player_id"
    has_and_belongs_to_many :seventh_players, class_name: "Lineup", foreign_key: "seventh_player_id"
    has_and_belongs_to_many :eighth_players, class_name: "Lineup", foreign_key: "eighth_player_id"
    has_and_belongs_to_many :nineth_players, class_name: "Lineup", foreign_key: "nineth_player_id"
    
end

