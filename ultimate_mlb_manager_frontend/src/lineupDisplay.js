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

 function clear() {
     document.reload()
 }