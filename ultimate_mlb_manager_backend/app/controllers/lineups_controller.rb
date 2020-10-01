class LineupsController < ApplicationController
    # before_action :get_lineup, only :show
    def index 
        lineups = Lineup.all
        render json: lineups
    end

    def show
        render json: @lineup
    end

    def create
        game = Game.todays_game #toggle off for testing 
        # game = Game.find_by_id(1) # toggle off when live
        new_lineup = game.lineup.new(lineups_params)
        render json: new_lineup.save ? new_lineup : {message: new_lineup.errors.full_messages}
    end

    def last
        lineup = Lineup.last
        render json: lineup
    end

    private

    def get_lineup
        @lineup = Lineup.find_by_id(params[:id])
    end

    def lineups_params
        params.require(:lineup).permit(
            # :game_id,
            :first_player_id,
            :second_player_id,
            :third_player_id,
            :fourth_player_id,
            :fifth_player_id,
            :sixth_player_id,
            :seventh_player_id,
            :eighth_player_id,
            :ninth_player_id
        )
    end
end
