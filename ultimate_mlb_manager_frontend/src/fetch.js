// load players

function loadPlayers() {
    fetch(PLAYERS)
    .then(responce => responce.json()).then(values => createAndDisplayPlayers(values)).then(todaysGame)
   }

function addLineup(players) {
    fetch(LINEUPS, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(players)
    }).then(resp => {
        return resp.json()
    }).then(obj => {
        if (obj.message) {
            alert(obj.message)
        } else {
            new Lineup(obj.game, 
                obj.first_player, 
                obj.second_player, obj.third_player, 
                obj.fourth_player, obj.fifth_player, 
                obj.sixth_player, obj.sixth_player, 
                obj.seventh_player, obj.eighth_player, 
                obj.ninth_player)
            renderPlayerCards(Player.allPlayers)
        }
    })
    clearList()
}

function loadGames() {
  fetch(GAMES)
  .then(responce => responce.json()).then(values => {
    for (const game of values) {
      let [id, vs, homeGame, date] = Object.values(game)

      new Game(id, vs, homeGame, date)
    }
  })
 }

 function todaysGame() {
    fetch(TODAYS_GAME)
    .then(responce => responce.json()).then(value => displayGame(value))
 }


function loadLineups() {
    fetch(LINEUPS)
    .then(responce => responce.json()).then(value => {
        for (const lineup of value.reverse()) {
            let [game, first, second, third, fourth, fifth, sixth, seventh, eighth, ninth] = Object.values(lineup)
            new Lineup(game, first, second, third, fourth, fifth, sixth, seventh, eighth, ninth)
        }
        displayLineup(Lineup.allLineups)
    }
    )
}



 