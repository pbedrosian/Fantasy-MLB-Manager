const bodySection = document.querySelector('body')

const cardDiv = document.createElement('div')
cardDiv.setAttribute('id', 'cards')

let newLineup = []


function createAndDisplayPlayers(arr) {
  for (const player of arr) {
    let [id, firstName, lastName, primary_position, number, bats, throws, image] = Object.values(player)
    let [avg, hits, runs, hr, rbi, obs, sp, wins, losses, era, so, saves, whip] = Object.values(player.stats[0])

    let newPlayer = new Player(id, firstName, lastName, primary_position, number, bats, throws, image,
    avg, runs, hr, hits, rbi, obs, sp, wins, losses, era, so, saves, whip) 
  }
  renderPlayerCards(Player.allPlayers)
}


function renderPlayerCards(arr) {

    for (const player of arr) {
      let cards = document.getElementById('cards')
      // removeAllChildNodes()
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

    if (newLineup.length < 9) {
      // addedPlayer = Player.allPlayers.find(x => x.id == e.target.id)
      newLineup.push(parseInt(e.target.id))
      player.innerText = e.target.parentElement.firstChild.innerText + " - " + e.target.parentElement.children[1].innerText
      document.getElementById('playerList').appendChild(player)
      e.target.disabled = true;
      e.target.innerText = 'In Lineup'
      console.log(e.target.parentElement.firstChild.innerText + " - " + e.target.id)
    } else {
      console.log('You have maxed your lineup')
      maxLineup()
      console.log(newLineup)
    };
  
}

function getAllPlayers() {
  document.getElementById('cards').querySelectorAll('*').forEach(n => n.remove());
  loadPlayers()
}

function maxLineup() {
  if (confirm("You have maxed your lineup. Do you want to submit it now?")) {
    console.log("Lineup for ```ADD GAME``` has been submitted.")
    openNav()
  } else {
    console.log("Cancelled submit.")
  }
}

function clearList() {
  newLineup = []
  const list = document.getElementById('playerList')
  while (list.firstChild) {
      list.removeChild(list.firstChild);
  }
  let buttons = document.querySelectorAll('.myBtn')
  buttons.forEach(btn => btn.disabled = false)
}


 

 