const BASE_URL = "http://localhost:3000"
const PLAYERS = BASE_URL + "/players", 
 LINEUPS = BASE_URL + "/lineups", 
 GAMES = BASE_URL + "/games"

const bodySection = document.querySelector('body')

const cardDiv = document.createElement('div')
cardDiv.setAttribute('id', 'cards')

 document.addEventListener('DOMContentLoaded', loadPlayers)

 