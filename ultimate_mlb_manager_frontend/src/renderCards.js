const bodySection = document.querySelector('body')

const cardDiv = document.createElement('div')
cardDiv.setAttribute('id', 'cards')


function renderPlayerCards(arr) {
    for (const player of arr) {
  
      const figure = document.createElement('figure')
      figure.setAttribute('class', 'card card--water')
  
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
  
  
      generateStats(Object.entries(player.stats[0]), tableBody)
  
      cardDiv.appendChild(figure)
      figure.appendChild(imageDiv)
      imageDiv.appendChild(playerImg)
      figure.appendChild(figcaption)
      figcaption.appendChild(nameHeader)
      figcaption.appendChild(postition)
      figcaption.appendChild(table)
      table.appendChild(tableBody)
  
      // tableBody.appendChild(tr1) // how to append 
       
      document.querySelector('body').appendChild(cardDiv)

      const button = document.createElement('button')
      button.innerText = 'Add To Lineup'
      button.setAttribute('class', 'myBtn')
      button.setAttribute('id', player.id)
      button.addEventListener('click', addToLineup) // calls finction within the addPlayer.js file


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

const players = []

// Added player to lineup menu

function addToLineup (e) {
    e.preventDefault()
    const player = document.createElement('li')

    players.push(e.target.id)

    player.innerText = e.target.parentElement.firstChild.innerText + " - " + e.target.parentElement.children[1].innerText

    document.getElementById('playerList').appendChild(player)

    e.target.disabled = true;
    e.target.innerText = 'In Lineup'
    console.log(e.target.parentElement.firstChild.innerText)
}

function playerSearch() {
  
}
 

 