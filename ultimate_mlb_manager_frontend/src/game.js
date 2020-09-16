class Game {

    static allGames = []

    constructor(vs, homeGame, date) {
        this.vs = vs
        this.homeGame = homeGame
        this.date = date 
        Game.allGames.push(this)       
    }

    
}