function renderPlayerCards(arr) {
    for (const player of arr) {
  
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
  
    }
   }

   function generateStats(arr, table) {
    for (stat of arr) {
      let tr = document.createElement('tr')
      let th = document.createElement('th')
      let td = document.createElement('td')

      th.innerText = stat[0]
      td.innerText = stat[1]

      tr.appendChild(th)
      tr.appendChild(td)

      table.appendChild(tr)

    }
 }