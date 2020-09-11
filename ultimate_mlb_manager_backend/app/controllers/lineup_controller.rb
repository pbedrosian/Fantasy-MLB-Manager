class LineupController < ApplicationController
    before_action :get_lineup, only :show
    def index 
        lineups = Lineup.all
        render json: lineups
    end

    def show
        render json: @lineup
    end

    def create
        new_lineup = Lineup.new(lineup_params)
        new_lineup.save
    end

    private

    def get_lineup
        @lineup = Lineup.find_by_id(params[:id])
    end

    def lineup_params
        params.require(:lineup).permit(
            :first_player_id,
            :second_player_id,
            :third_player_id,
            :fourth_player_id,
            :fifth_player_id,
            :sixth_player_id,
            :seventh_player_id,
            :eighth_player_id,
            :nineth_layer_id
        )
    end
end
