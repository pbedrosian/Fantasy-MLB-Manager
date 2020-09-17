class GamesController < ApplicationController
    def index
        games = Game.all
        render json: games
    end

    def today
        game = Game.todays_game
        render json: game
    end
end
