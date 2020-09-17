class Game {

    static allGames = []

    constructor(id, vs, homeGame, date) {
        this.id = id
        this.vs = vs
        this.homeGame = homeGame
        this.date = date 
        Game.allGames.push(this)       
    }
    
}