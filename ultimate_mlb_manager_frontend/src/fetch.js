// load players

function loadPlayers() {
    fetch(PLAYERS)
    .then(responce => responce.json()).then(values => renderPlayerCards(values))
   }

function filterPitchers() {
    fetch(PLAYERS)
    .then(responce => responce.json()).then(values => renderPlayerCards(values))
}
