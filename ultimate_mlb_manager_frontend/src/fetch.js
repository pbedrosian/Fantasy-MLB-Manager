// load players

function loadPlayers() {
    fetch(PLAYERS)
    .then(responce => responce.json()).then(values => renderPlayerCards(values))
   }

function filterPlayers(e) {
    fetch(SEARCH + e)
    .then(responce => responce.json()).then(values => console.log(values))
}
