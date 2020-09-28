const bodySection = document.querySelector('body')

const cardDiv = document.createElement('div')
cardDiv.setAttribute('id', 'cards')

let buttons = document.getElementsByTagName('button')

let newLineup = []


function createAndDisplayPlayers(arr) {
  for (const player of arr) {
    
    let [id, firstName, lastName, primary_position, number, bats, throws, image] = Object.values(player)
    // let [avg, hits, runs, hr, rbi, obs, sp, wins, losses, era, so, saves, whip] = Object.values(player.stats[0])
    let [avg, hits, runs, hr, rbi, obp, sp, wins, losses, era, so, saves, whip] = Object.values(player.stats[0])


    let newPlayer = new Player(id, firstName, lastName, primary_position, number, bats, throws, image,
    avg, runs, hits, hr, rbi, obp, sp, wins, losses, era, so, saves, whip) 
  }
  renderPlayerCards(Player.allPlayers)
}


function renderPlayerCards(arr) {

    for (const player of arr) {
      let cards = document.getElementById('cards')
      let [id, firstName, lastName, primary_position, number, bats, throws, image, avg, hits, runs, hr, rbi, obs, sp, wins, losses, era, so, saves, whip ] = Object.values(player)

      const figure = document.createElement('figure')
      figure.setAttribute('class', `card card--player` )
      figure.setAttribute('id', primary_position)
  
      const imageDiv = document.createElement('div')
      imageDiv.setAttribute('class', 'card__image-container')
  
      const playerImg = document.createElement('img')
      playerImg.src = image
      playerImg.setAttribute('class', 'card__image')
  
      const figcaption = document.createElement('figcaption')
      figcaption.setAttribute('class', 'card__caption')
  
      const nameHeader = document.createElement('h1')
      nameHeader.setAttribute('class', 'card__name')
      nameHeader.innerText = `${player.fullName()}`
  
      const postition = document.createElement('h3')
      postition.setAttribute('class', 'card__type')
      postition.innerText = primary_position
  
  
      // creates the table for stats
      const table = document.createElement('table')
      table.setAttribute('class', 'card__stats')
      const tableBody = document.createElement('tbody')
  
  
      generateStats(player.stats(), tableBody)
  
      cardDiv.appendChild(figure)
      figure.appendChild(imageDiv)
      imageDiv.appendChild(playerImg)
      figure.appendChild(figcaption)
      figcaption.appendChild(nameHeader)
      figcaption.appendChild(postition)
      figcaption.appendChild(table)
      table.appendChild(tableBody)
         
      document.querySelector('body').appendChild(cardDiv)

      const button = document.createElement('button')
      button.innerText = 'Add To Lineup'
      button.setAttribute('class', 'myBtn')
      button.setAttribute('id', id)
      button.addEventListener('click', addToLineup) // calls below function

      figcaption.appendChild(button)
    }
   }

   function generateStats(arr, table) {
    for (stat of arr) {
      let tr = document.createElement('tr')
      let th = document.createElement('th')
      let td = document.createElement('td')
      let space = document.createElement('td')
      let dash = document.createElement('td')
      let spaceOne = document.createElement('td')
      
      th.innerText = stat[0]
      td.innerText = stat[1]
      dash.innerText = '-'
      td.setAttribute('style', 'float: right') 

      tr.appendChild(th)
      tr.appendChild(space)
      tr.appendChild(dash)
      tr.appendChild(spaceOne)
      tr.appendChild(td)

      table.appendChild(tr)

    }
 }

// Added player to lineup menu

function addToLineup (e) {
    e.preventDefault()
    const player = document.createElement('li')
    player.setAttribute('style', 'cursor: pointer;')
    player.setAttribute('title', 'Click to remove player.')
    let close = document.createElement('span')

    if (newLineup.length < 9) {
      newLineup.push(parseInt(e.target.id))
      player.innerText = e.target.parentElement.firstChild.innerText + " - " + e.target.parentElement.children[1].innerText
      player.setAttribute('id', e.target.id)
      player.addEventListener('click', removePlayer)
      document.getElementById('playerList').appendChild(player)
      e.target.disabled = true;
      e.target.innerText = 'In Lineup'
      openNav()
    } else {
      console.log('You have maxed your lineup')
      maxLineup()
      console.log(newLineup)
    }
    closeNav()
}

function getAllPlayers() {
  document.getElementById('cards').querySelectorAll('*').forEach(n => n.remove());
  loadPlayers()
}

function maxLineup() {
  if (confirm("You have maxed your lineup. Do you want to submit it now?")) {
    openNav()
  } else {
    console.log("Cancelled submit.")
  }
}

function clearList() {
  newLineup = []
  const list = document.getElementById('playerList')
  clearChildren(list)
  let buttons = document.querySelectorAll('.myBtn')
  buttons.forEach(btn => btn.disabled = false)
  // toggleCards()
}

function displayGame(obj) {
  if (obj != null) {
      let game = document.getElementById('currentGame')
      game.innerText = `Welcome! Set Lineup VS. ${obj.team_against}`

      let date = document.createElement('h5')
      let newDate = obj.date
      let d = new Date(newDate);
      date.innerText = d.toDateString();
      game_id = obj.id

      game.appendChild(date)

  } else { // toggle this off for testing
      document.getElementById('currentGame').innerText = 'No game today. Check back tomorrow'
      for (const b of buttons) {
          b.style.display = "none"
      };

  }
}

let toggleCards = () => {
  const playerCards = document.querySelector('#cards')
  const lineupCards = document.querySelector('.lineups')
  const header = document.querySelector('#currentGame')
  const links = document.querySelectorAll('.navLink')
  const lineup = document.querySelector('.lineup')

  if (playerCards.style.display != "none") {
    header.innerText = "Past Games:"
    playerCards.style.display = "none "
    lineupCards.style.display = ""
    for (const l of links) {
      l.classList.add('isDisabled')
    }
    lineup.classList.add('active')
    lineup.innerText = "Set Lineup"


  } else {
    todaysGame()
    lineupCards.style.display = "none"
    playerCards.style.display = ""
    for (const l of links) {
      l.classList.remove('isDisabled')
    }
    lineup.classList.remove('active')
    lineup.innerText = "Past Lineups"

  }
}

const removePlayer = (e) => {
  let index = newLineup.indexOf(parseInt(e.target.id));
  newLineup.splice(index, 1)
  e.target.remove()
  document.querySelector(`button[id="${e.target.id}"]`).disabled = false
  openNav()
}







 

 