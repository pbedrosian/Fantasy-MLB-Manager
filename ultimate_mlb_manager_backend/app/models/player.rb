class Player < ApplicationRecord
    has_many :pitching_stats
    has_many :batting_stats
    has_and_belongs_to_many :lineups

    def stats
        if self.pitching_stats.empty?
            self.batting_stats
        else
            self.pitching_stats
        end
    end
end

