const BASE_URL = "http://localhost:3000"
const PLAYERS = BASE_URL + "/players", 
 LINEUPS = BASE_URL + "/lineups", 
 GAMES = BASE_URL + "/games"


 document.addEventListener('DOMContentLoaded', loadPlayers)

 function loadPlayers() {
  fetch(PLAYERS)
  .then(responce => responce.json()).then(values => renderPlayerCards(values))
 }

 function renderPlayerCards(arr) {
  for (const player of arr) {
    const body = document.querySelector('body')

    const cardDiv = document.createElement('div')
    cardDiv.setAttribute('id', 'cards')

    const figure = document.createElement('figure')
    figure.setAttribute('class', 'card card--normal')

    const imageDiv = document.createElement('div')
    imageDiv.setAttribute('class', 'card__image-container')

    const playerImg = document.createElement('img')
    playerImg.src = player.image_url
    playerImg.setAttribute('class', 'card__image')

    const figcaption = document.createElement('figcaption')
    figcaption.setAttribute('class', 'card__caption')

    const nameHeader = document.createElement('h1')
    nameHeader.setAttribute('class', 'card__name')
    nameHeader.innerText = `${player.first_name} ${player.last_name}`

    const postition = document.createElement('h3')
    postition.setAttribute('class', 'card__type')
    postition.innerText = player.primary_position


    // creates the table for stats
    const table = document.createElement('table')
    table.setAttribute('class', 'card__stats')

    const tableBody = document.createElement('tbody')
    const tr1 = document.createElement('tr')
    const th1 = document.createElement('th')
    th1.innerText = 'AVG'
    const td1 = document.createElement('td')
    td1.innerText = player.stats[0].avg


    cardDiv.appendChild(figure)
    figure.appendChild(imageDiv)
    imageDiv.appendChild(playerImg)
    figure.appendChild(figcaption)
    figcaption.appendChild(nameHeader)
    figcaption.appendChild(postition)
    figcaption.appendChild(table)
    table.appendChild(tableBody)
    tableBody.appendChild(tr1)
    tr1.appendChild(th1)
    tr1.appendChild(td1)
    body.appendChild(cardDiv)


    debugger
  }
 }