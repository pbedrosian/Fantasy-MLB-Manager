class Player < ApplicationRecord
    has_many :pitching_stats
    has_many :batting_stats
    has_and_belongs_to_many :lineups
end

