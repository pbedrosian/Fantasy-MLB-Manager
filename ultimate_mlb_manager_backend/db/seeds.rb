# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

url = "https://#{ENV['API_KEY']}@api.mysportsfeeds.com/v2.1/pull/mlb/current/player_stats_totals.json"
info = HTTParty.get(url)

dodgers = info["playerStatsTotals"].select do |p|
    p["team"]["abbreviation"] == 'LAD' 
end

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

    #stats data 
    avg = p["stats"]["batting"]["battingAvg"]
    runs = p["stats"]["batting"]["runs"]
    hits = p["stats"]["batting"]["hits"]
    hr = p["stats"]["batting"]["homeruns"]
    rbi = p["stats"]["batting"]["runsBattedIn"]
    obp = p["stats"]["batting"]["batterOnBasePct"]
    sp = p["stats"]["batting"]["batterSluggingPct"]

    w = p["stats"]["pitching"]["wins"]
    l = p["stats"]["pitching"]["losses"]
    era = p["stats"]["pitching"]["earnedRunAvg"]
    so = p["stats"]["pitching"]["shutouts"]
    saves = p["stats"]["pitching"]["saves"]
    whip = p["stats"]["pitching"]["walksAndHitsPerInningPitched"]

    stats = player.stats.new(
    batting_avg: avg,
    runs: runs,
    hits: hits,
    homeruns: hr,
    runs_batted_in: rbi,
    on_base_pct: obp,
    slugging_pct: sp,
    wins: w,
    losses: l,
    earn_run_average: era,
    strike_outs: so,
    saves: saves,
    whip: whip
    )

    stats.save
end
