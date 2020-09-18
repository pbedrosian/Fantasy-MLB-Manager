// load players

function loadPlayers() {
    fetch(PLAYERS)
    .then(responce => responce.json()).then(values => createAndDisplayPlayers(values))
   }

function addLineup(players) {
    debugger
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

 function todaysGame() {
    fetch(TODAYS_GAME)
    .then(responce => responce.json()).then(value => displayGame(value))
 }

 function loadLineups() {
    fetch(LINEUPS)
    .then(responce => responce.json()).then(value => displayLineup(value))
 }

 function displayLineup(lineup) {
    document.querySelector('#cards').style.display = "none"
    document.querySelector('#currentGame').innerText = "Past Lineups:"
    for (const l of lineup) {
        let cards = document.querySelector('.lineups')

        const figure = document.createElement('figure')
        figure.setAttribute('class', `card card--player`)

        const figcaption = document.createElement('figcaption')
        figcaption.setAttribute('class', 'card__caption')

        const title = document.createElement('h1')
        title.setAttribute('class', 'card__name')
        title.innerText = `VS. ${l.game.team_against}`

        const postition = document.createElement('h3')
        postition.setAttribute('class', 'card__type')


        let date = l.game.date

        let d = new Date(date);

        debugger
        postition.innerText = d.toDateString();

        let ol = document.createElement('ol')

        let arr = Object.values(l).slice(1)

        // creates player list
        for (const p of arr) {
            let li = document.createElement('li')
            li.innerText = `${p.primary_position} - ${p.first_name} ${p.last_name}`
            ol.appendChild(li)
        }

        figure.appendChild(figcaption)
        figcaption.appendChild(title)
        figcaption.appendChild(postition)
        figcaption.appendChild(ol)

        cards.appendChild(figure)
    }

 }  

 