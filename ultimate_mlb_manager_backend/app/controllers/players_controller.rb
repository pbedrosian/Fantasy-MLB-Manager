class PlayersController < ApplicationController
    before_action :set_player, only: :show

    def home
        url = "https://#{ENV['API_KEY']}@api.mysportsfeeds.com/v2.1/pull/mlb/current/games.json?team=lad"
        info = HTTParty.get(url)
        binding.pry
        render json: info
    end

    def index
        players = Player.all

        render json: players
    end

    def show
        render json: @player
    end

    private
    def set_player
        @player = Player.find_by_id(params[:id])
    end

end
