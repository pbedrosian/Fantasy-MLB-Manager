class LineupController < ApplicationController
    before_action :get_lineup, only :show
    def index 
        lineups = Lineup.all
        render json: lineups
    end

    def show
        render json: @lineup
    end

    private

    def get_lineup
        @lineup = Lineup.find_by_id(params[:id])
    end
end
