const BASE_URL = "http://localhost:3000"
const PLAYERS = BASE_URL + "/players", 
 LINEUPS = BASE_URL + "/lineups", 
 GAMES = BASE_URL + "/games", 
 SEARCH = BASE_URL + '/players/search/',
 TODAYS_GAME = BASE_URL + "/games/today"

let game_id = null

const LIST = document.getElementById('playerList')

document.addEventListener('DOMContentLoaded', startUp)


function startUp() {
    loadPlayers()
    loadGames()
    todaysGame()
}

function displayGame(obj) {
    document.getElementById('currentGame').innerText = `Set Lineup VS. ${obj.team_against}`
    game_id = obj.id
}
