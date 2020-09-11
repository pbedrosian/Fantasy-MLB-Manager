class PlayersController < ApplicationController
    before_action :set_player, only: :show

    def home
        render json: Player.find_by_id(3).stats
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
