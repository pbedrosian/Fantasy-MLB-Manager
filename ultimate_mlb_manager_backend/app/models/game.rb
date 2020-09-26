class Game < ApplicationRecord
    has_and_belongs_to_many :players
    # belongs_to :lineup
    has_one :lineup 


    def self.todays_game
        if self.find{|g| g.date.to_date == Time.now.to_date }
            self.find{|g| g.date.to_date == Time.now.to_date }
        end
    end
    
end
