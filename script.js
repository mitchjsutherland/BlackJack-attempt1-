/*
deal player number [4, 21]
    check if player win
deal dealer number [2, 11]
ask player for hit
    if hit
        deal player card [2, 11]
        if over 21
            lose
        if 21
            auto stay
        else
            ask for hit
    else
        stay
after player
    if dealer < 17
        deal dealer card [2, 11]
    else if dealer > 21
        dealer loses
    else if 17 < dealer < 21
        dealer stays
check closest to 21
*/


// -----------------------------------------------------------------------------

let playerScore = 0
let dealerScore = 0

function newCard(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// console.log(newCard(4, 21))


const offerHit = function() {
    alert('Would you like to hit?') 
}

function playgame() {
    playerScore += newCard(4, 21);
    if (playerScore == 21) {
        alert('Player wins!');
    } else {
        console.log(`You now have ${playerScore}`)
        dealerScore += newCard(2, 11);
        console.log(`The dealer has ${dealerScore}`)
    }
    offerHit()
}

console.log(playgame())
