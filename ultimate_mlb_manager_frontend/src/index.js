const BASE_URL = "http://localhost:3000"
const PLAYERS = BASE_URL + "/players", 
 LINEUPS = BASE_URL + "/lineups", 
 GAMES = BASE_URL + "/games", 
 SEARCH = BASE_URL + '/players/search/',
 TODAYS_GAME = BASE_URL + "/games/today"

const LIST = document.getElementById('playerList')

document.addEventListener('DOMContentLoaded', startUp)


function startUp() {
    loadPlayers()
    loadGames()
    todaysGame()
}

function displayGame(obj) {
    debugger
}
