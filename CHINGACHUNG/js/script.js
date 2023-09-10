let chingaChung = document.querySelector(".game_result")
let players = document.querySelectorAll(".play")
let button = document.getElementById("btn")
let points = document.querySelectorAll(".points")

let signs = [ "SCISSORS", "ROCK", "PAPER" ]

// ՖՈՒՆԿՑԻԱ signs ԶԱՆԳՎԱԾԻ ՀԱՄԱՐ ՊԱՏԱՀԱԿԱՆ ԻՆԴԵՔՍԻ ՍՏԱՆԱԼՈՒ ՆՊԱՏԱԿՈՎ

function getIndex1 () {
    let index = Math.floor(Math.random()*(signs.length))
    
    return index
}

// ՖՈՒՆԿՑԻԱ signs ԶԱՆԳՎԱԾԻ ՀԱՄԱՐ ՊԱՏԱՀԱԿԱՆ ԻՆԴԵՔՍԻ ՍՏԱՆԱԼՈՒ ՆՊԱՏԱԿՈՎ

function getIndex2 () {
    let index = Math.floor(Math.random()*(signs.length))
    
    return index
}

// ՖՈՒՆԿՑԻԱ, ՈՐԸ ԿԱՆՉՎՈՒՄ Է ՍԿՍԻՐ ԽԱՂԸ BUTTON-Ը ՍԵՂՄԵԼՈՒՑ ՀԵՏՈ, ԵՎ ՈՐԸ ԱՇԽԱՏԱՑՆՈՒՄ Է ՈՂՋ ԽԱՂԸ

function startGame () {
    
    setTimeout(() => {
        chingaChung.innerText = "CHIN"
    }, 500)

    setTimeout(() => {
        chingaChung.innerText = "GA"
    }, 1000)

    setTimeout(() => {
        chingaChung.innerText = "CHUNG"
    }, 1500)

    setTimeout (() => {
       
        let indexPlayer1 = getIndex1 ()
        let indexPlayer2 = getIndex2 ()

        players.forEach((val, index) => {
            if(index === 0) {
                val.innerText = signs[indexPlayer1]
            }else {
                val.innerText = signs[indexPlayer2]
            }
        })

        setTimeout(() => {
        
        if(players[0].innerText === "SCISSORS" && players[1].innerText === "ROCK" ||
           players[0].innerText === "ROCK" && players[1].innerText === "PAPER" ||
           players[0].innerText === "PAPER" && players[1].innerText === "SCISSORS"){
            
            chingaChung.innerText = "PLAYER 2 WON"
        
        }else if(players[0].innerText === "SCISSORS" && players[1].innerText === "PAPER" ||
                 players[0].innerText === "ROCK" && players[1].innerText === "SCISSORS" ||
                 players[0].innerText === "PAPER" && players[1].innerText === "ROCK"){

            chingaChung.innerText = "PLAYER 1 WON"

        }else {

            chingaChung.innerText = "NOBODY WON"

        }

        setTimeout(() => {

             if(chingaChung.innerText === "PLAYER 1 WON") {

                 points[0].innerText = `${+(points[0].innerText) + 1}` 
     
             }else if(chingaChung.innerText === "PLAYER 2 WON"){

                 points[1].innerText = `${+(points[1].innerText) + 1}`
     
             }

       }, 800)

     }, 1500)
    
    }, 1500)
}

// ՍԿՍԻՐ ԽԱՂԸ button-ի ՀԱՄԱՐ

button.onclick = startGame