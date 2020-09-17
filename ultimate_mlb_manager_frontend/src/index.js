const BASE_URL = "http://localhost:3000"
const PLAYERS = BASE_URL + "/players", 
 LINEUPS = BASE_URL + "/lineups", 
 GAMES = BASE_URL + "/games", 
 SEARCH = BASE_URL + '/players/search/'

const LIST = document.getElementById('playerList')

document.addEventListener('DOMContentLoaded', startUp)


function startUp() {
    loadPlayers()
    loadGames()
}

