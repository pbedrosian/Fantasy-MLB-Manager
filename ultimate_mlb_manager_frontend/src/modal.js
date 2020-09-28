
let openModal = () => {
    clearList()
    closeNav()
    let modal = document.getElementById("myModal");
    let modalContent = document.querySelector('.modal-content')
    let ol = document.querySelector('.lineupList')

    let lastLineup = Lineup.allLineups[0]
    // let last = Lineup.allLineups[Lineup.allLineups.length - 1];
    let players = Object.values(lastLineup).slice(1)

    let vs = document.querySelector('.vs')
    vs.innerText = "Lineup vs. " + lastLineup.game.team_against

    let dateDisplay = document.querySelector('.date')
    let date = lastLineup.game.date
    let d = new Date(date);
    dateDisplay.innerText = d.toDateString();
    clearChildren(ol)
    for (const p of players) {
        let li = document.createElement('li')
        li.innerText = `${p.primary_position} - ${p.first_name} ${p.last_name}`
        ol.appendChild(li)
    }

    modal.style.display = "block";
}

let closeModal = () => {
    let modal = document.getElementById("myModal");
    let span = document.getElementsByClassName("close")[0];
    modal.style.display = "none";
}
