// load players

function loadPlayers() {
    fetch(PLAYERS)
    .then(responce => responce.json()).then(values => renderPlayerCards(values))
   }

function filterPlayers(e) {
    document.getElementById('cards').querySelectorAll('*').forEach(n => n.remove());
    fetch(SEARCH + e)
    .then(responce => responce.json()).then(values => renderPlayerCards(values))
}
