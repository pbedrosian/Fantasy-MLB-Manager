// load players

function loadPlayers() {
    fetch(PLAYERS)
    .then(responce => responce.json()).then(values => createAndDisplayPlayers(values))
   }

// function addLineup(players) {
//     fetch(LINEUPS, {
//         method: "POST", 
//         body: JSON.stringify(players)
//       }).then(res => {
//         console.log("Request complete! response:", res);
//       });
// }

function addLineup(players) {
  const configObj = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(players)
  }
  fetch(LINEUPS, configObj)
  .then(res => res.json()).then(obj => {
      if (obj.message){
          alert("This didn't work")
      } else {
          renderPlayerCards(Player.allPlayers)
      }     
  })
}

// function addPlayer(players) {
//     fetch(LINEUPS, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify(players)
//     }).then(resp => {
//         return resp.json()
//     }).then(obj => {
//         if (obj.message) {
//             alert(obj.message)
//         } else {
//             renderPlayer(obj)
//         }
//     })
// }