class Player < ApplicationRecord

    has_many :stats

    has_and_belongs_to_many :games
    
    has_many :first_players, class_name: "Lineup", foreign_key: "first_player_id"
    has_many :second_players, class_name: "Lineup", foreign_key: "second_player_id"
    has_many :third_players, class_name: "Lineup", foreign_key: "third_player_id"
    has_many :fourth_players, class_name: "Lineup", foreign_key: "fourth_player_id"
    has_many :fifth_players, class_name: "Lineup", foreign_key: "fifth_player_id"
    has_many :sixth_players, class_name: "Lineup", foreign_key: "sixth_player_id"
    has_many :seventh_players, class_name: "Lineup", foreign_key: "seventh_player_id"
    has_many :eighth_players, class_name: "Lineup", foreign_key: "eighth_player_id"
    has_many :ninth_players, class_name: "Lineup", foreign_key: "nineth_player_id"
    
    def self.search(params)
        players = Player.select {|p| p.primary_position == params[:position].upcase}
    end

    def self.find_or_update
        api = "https://#{ENV['API_KEY']}@api.mysportsfeeds.com/v2.1/pull/mlb/current/player_stats_totals.json?team=lad"
        player_data = HTTParty.get(api)
        player_data["playerStatsTotals"].each do |p|

            if Player.find_by(api_id: p["player"]["id"]) && p["player"]["primaryPosition"] == 'P'

                player = Player.find_by(api_id: p["player"]["id"])

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

                player.stats.update(
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
            elsif Player.find_by(api_id: p["player"]["id"])

                player = Player.find_by(api_id: p["player"]["id"])

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

                player.stats.update(
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
            else

                changedBases = ['1B', '2B', '3B']
                api_id = p["player"]["id"]
                first_name = p["player"]["firstName"]
                last_name = p["player"]["lastName"]
                if changedBases.include?(p["player"]["primaryPosition"])
                    primary_position = p["player"]["primaryPosition"].reverse
                else
                    primary_position = p["player"]["primaryPosition"]
                end
                # primary_position = p["player"]["primaryPosition"]
                number = p["player"]["jerseyNumber"]
                current_team = p["player"]["currentTeam"]["abbreviation"]
                bats = p["player"]["handedness"]["bats"]
                throws = p["player"]["handedness"]["throws"]
            
                if p["player"]["officialImageSrc"] == nil
                    image = "assets/images/blank-profile-picture.jpg"
                else
                    image = p["player"]["officialImageSrc"]
                end
            
                player = Player.new(api_id: api_id,
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
        end
    end

end

