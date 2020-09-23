class PlayersController < ApplicationController
    before_action :set_player, only: :show

    def home
        Player.find_or_update
        render json: "this is home"
    end

    def index
        Player.find_or_update
        players = Player.all

        render json: players
    end

    def show
        render json: @player
    end

    def search
        players = Player.search(params)
        render json: players
    end

    private
    def set_player
        @player = Player.find_by_id(params[:id])
    end

    def update_stats
        
    end

end
