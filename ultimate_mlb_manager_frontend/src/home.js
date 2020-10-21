let renderHomepage = () => {
    let nav = document.querySelector('.topnav')
    clearChildren(nav)
    let body = document.querySelector('body')
    let welcome = document.createElement('h1')
    let bodyText = document.createElement('h3')
    bodyText.innerText = "Explore the Dodgers schedule, team, and create lineups for each game. Select a game and create a team!"
    welcome.innerText = "Unofficial Dodger Manager tool"

    body.appendChild(welcome)
    body.appendChild(bodyText)

    // add funcition to display list of games. 
}