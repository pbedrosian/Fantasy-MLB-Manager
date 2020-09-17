// load players

function loadPlayers() {
    fetch(PLAYERS)
    .then(responce => responce.json()).then(values => createAndDisplayPlayers(values))
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