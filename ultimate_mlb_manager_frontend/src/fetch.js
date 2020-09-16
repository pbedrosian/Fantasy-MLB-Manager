// load players

function loadPlayers() {
    fetch(PLAYERS)
    .then(responce => responce.json()).then(values => renderPlayerCards(values))
   }

// function filterPlayers(p) {
//     document.getElementById('cards').querySelectorAll('*').forEach(n => n.remove());
//     // fetch(SEARCH + e)
//     // .then(responce => responce.json()).then(values => renderPlayerCards(values))
//     arr = Player.allPlayers.find(x => x.position == p)
//     renderPlayerCards(arr)
// }

function addLineup(e) {
    fetch(LINEUPS, {
        method: "POST", 
        body: JSON.stringify(data)
      }).then(res => {
        console.log("Request complete! response:", res);
      });
}
