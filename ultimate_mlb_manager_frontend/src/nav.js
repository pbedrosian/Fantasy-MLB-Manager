function openNav() {
    let button = document.querySelector('.sB')
    document.getElementById("mySidenav").style.width = "20%";
    let nav = document.querySelector('.navHeading')

    if (newLineup === undefined || newLineup.length == 0) {
        nav.innerText = "Set Lineup Now"
        button.style.display = 'none'
    } else {
        nav.innerText = 'Current Lineup:'
        button.style.display = ''
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
