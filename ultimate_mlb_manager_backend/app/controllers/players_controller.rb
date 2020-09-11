class PlayersController < ApplicationController

    def home
        render json: "this is home"
        url = "https://#{ENV['API_KEY']}@api.mysportsfeeds.com/v2.1/pull/mlb/current/player_stats_totals.json"
        info = HTTParty.get(url)
        dodgers = info["playerStatsTotals"].select do |p|
            p["team"]["abbreviation"] == 'LAD' 
        end
        binding.pry
    end

end
