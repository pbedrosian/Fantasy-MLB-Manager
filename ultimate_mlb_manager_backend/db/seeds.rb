Player.delete_all
Stat.delete_all

players = "https://#{ENV['API_KEY']}@api.mysportsfeeds.com/v2.1/pull/mlb/current/player_stats_totals.json"
games = "https://#{ENV['API_KEY']}@api.mysportsfeeds.com/v2.1/pull/mlb/current/games.json?team=lad"

#start of games seed

game_data = HTTParty.get(games)

game_data["games"].each do |g|
    if g["schedule"]["awayTeam"]["abbreviation"] == "LAD"
        versus = g["schedule"]["homeTeam"]["abbreviation"]
        home_game = false
    else g["schedule"]["awayTeam"]["abbreviation"] == "LAD"
        versus = g["schedule"]["awayTeam"]["abbreviation"]
        home_game = true
    end

    date = g["schedule"]["startTime"]

    game = Game.new(team_against: versus, home_game: home_game, date: date)
    game.save(validate: false)
end

#end of games seed

player_data = HTTParty.get(players)

dodgers = player_data["playerStatsTotals"].select do |p|
    p["team"]["abbreviation"] == 'LAD' 
end

#Start of seeind players
dodgers.each do |p|

    # player data

    first_name = p["player"]["firstName"]
    last_name = p["player"]["lastName"]
    primary_position = p["player"]["primaryPosition"]
    number = p["player"]["jerseyNumber"]
    current_team = p["player"]["currentTeam"]["abbreviation"]
    bats = p["player"]["handedness"]["bats"]
    throws = p["player"]["handedness"]["throws"]

    if p["player"]["officialImageSrc"] == nil
        image = "https://ibb.co/9HVY1QD"
    else
        image = p["player"]["officialImageSrc"]
    end

    player = Player.new(
    first_name: first_name,
    last_name: last_name,
    primary_position: primary_position,
    number: number,
    current_team: current_team,
    bats: bats,
    throws: throws,
    image_url: image
    )
    player.save

    if player.primary_position == "P"
        
        #pitching stats data
        w = p["stats"]["pitching"]["wins"] 
        l = p["stats"]["pitching"]["losses"]
        era = p["stats"]["pitching"]["earnedRunAvg"] 
        so = p["stats"]["pitching"]["shutouts"]
        saves = p["stats"]["pitching"]["saves"] 
        whip = p["stats"]["pitching"]["walksAndHitsPerInningPitched"] 

        avg = p["stats"]["batting"]["battingAvg"] 
        runs = p["stats"]["batting"]["runs"] 
        hits = p["stats"]["batting"]["hits"] 
        hr = p["stats"]["batting"]["homeruns"] 
        rbi = p["stats"]["batting"]["runsBattedIn"] 
        obp = p["stats"]["batting"]["batterOnBasePct"] 
        sp = p["stats"]["batting"]["batterSluggingPct"] 
        # binding.pry

    else 

        #batting stats data 
        avg = p["stats"]["batting"]["battingAvg"] 
        runs = p["stats"]["batting"]["runs"] 
        hits = p["stats"]["batting"]["hits"] 
        hr = p["stats"]["batting"]["homeruns"] 
        rbi = p["stats"]["batting"]["runsBattedIn"] 
        obp = p["stats"]["batting"]["batterOnBasePct"] 
        sp = p["stats"]["batting"]["batterSluggingPct"] 

        w = nil
        l = nil
        era = nil
        so = nil
        saves = nil
        whip = nil

    end

    stats = player.stats.new(
            wins: w,
            losses: l,
            era: era,
            strike_outs: so,
            saves: saves,
            whip: whip,
            avg: avg,
            runs: runs,
            hits: hits,
            homeruns: hr,
            rbi: rbi,
            on_base_pct: obp,
            slugging_pct: sp
        )
        stats.save
        
end
