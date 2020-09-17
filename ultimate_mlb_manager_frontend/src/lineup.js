class Lineup {


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

        result.game_id = game_id
        addLineup(result)
    }

}