class Player {
    static allPlayers = []

    constructor(id, firstName, lastName, primary_position, number, bats, throws, image, avg, runs, hits, homeruns, rbi, obs, sp, wins, losses, era, so, saves, whip) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.primary_position = primary_position
        this.number = number
        this.bats = bats
        this.throws = throws
        this.image = image
        this.avg = avg
        this. runs = runs
        this.homeruns = homeruns
        this.hits = hits
        this.rbi = rbi
        this.obs = obs
        this.sp = sp
        this.wins = wins
        this.losses = losses
        this.era = era
        this.so = so
        this.saves = saves
        this.whip = whip
        Player.allPlayers.push(this)
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }

}