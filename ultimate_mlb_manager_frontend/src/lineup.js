class Lineup {

    static allLineups =[]

    constructor(game, first, second, third, fourth, fifth, sixth, seventh, eighth, ninth) {
        this.game = game
        this.first = first
        this.second = second
        this.third = third
        this.fourth = fourth
        this.fifth = fifth
        this.sixth = sixth
        this.seventh = seventh
        this.eighth = eighth
        this.ninth = ninth
        Lineup.allLineups.push(this)
    }




    static save(game_id) {
        let result = {}
        const keys = ['first_player_id',
            'second_player_id',
            'third_player_id',
            'fourth_player_id',
            'fifth_player_id',
            'sixth_player_id',
            'seventh_player_id',
            'eighth_player_id',
            'ninth_player_id']
    
        keys.forEach((key, i) => result[key] = newLineup[i]);

        result.game_id = game_id // toggle off for testing

        // result.game_id = 55 // toggele on for testing

        addLineup(result)
    }

}