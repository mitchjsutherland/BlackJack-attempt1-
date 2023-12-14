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

const hitPlayer = function() {
    playerScore += newCard(4, 21);
}

const hitPlayerLow = function() {
    playerScore += newCard(4, 11);
}

// console.log(newCard(4, 21))

let gameConfirmed = confirm('Would you like to play a game?');

function offerHit() {
    return confirm('Would you like to hit?')
}

function dealerPlay() {
    dealerScore += newCard(4, 11);
    alert(`The dealer now has ${dealerScore}`);
    console.log(`The dealer now has ${dealerScore}`);
    while (dealerScore < 18) {
        dealerScore += newCard(4, 11);
        alert(`The dealer now has ${dealerScore}`);
        console.log(`The dealer has ${dealerScore}`)
    }

    if (dealerScore >= 18 && dealerScore <= 21) {
        alert(`The dealer stays at ${dealerScore}`)
        console.log(`The dealer stays at ${dealerScore}`)
    } else {
        alert(`The dealer has bust with ${dealerScore}`)
        console.log(`The dealer has bust with ${dealerScore}`)
        }
}


function playgame() {
    /* VERSION 1 ----------------------------------------------------- Both OK and CANCEL buttons on confirm box acting is OK
    if (gameConfirmed) {
        hitPlayer();
        if (playerScore == 21) {
            alert('Player wins!');
        } else {
            console.log(`You now have ${playerScore}`)
            dealerScore += newCard(2, 11);
            console.log(`The dealer has ${dealerScore}`)
        }
    }

        while (playerScore > 0 && playerScore < 21) {
        offerHit();
        if (true) {
            hitPlayerLow();
            if (playerScore == 21) {
                alert(`Player wins. You have ${playerScore}!`);
            } else if (playerScore > 21) {
                alert(`Player loses with ${playerScore}`);
            } else {
                console.log(`You now have ${playerScore}`);
            }
        } else {
            alert(`Player ends with ${playerScore}`)
        }
        ---------------------------------------------------------------
    */


    // VERSION 2 ----------------------------------------------------- Each confirm pop up is repeating twice
    if (confirm('Would you like to play a game?') == true) {
        hitPlayer();
        if (playerScore == 21) {
            alert('Player wins!');
        } else {
            console.log(`You now have ${playerScore}`)
            dealerScore += newCard(2, 11);
            console.log(`The dealer has ${dealerScore}`)
        }
    } else {
        alert('Maybe next time!');
    }

    while (playerScore > 0 && playerScore < 21) {
        if (confirm('Would you like to hit?') == true) {
            hitPlayerLow();
            if (playerScore == 21) {
                alert(`Player wins. You have ${playerScore}!`);
            } else if (playerScore > 21) {
                alert(`Player loses with ${playerScore}`);
            } else {
                console.log(`You now have ${playerScore}`);
                }
        } else {
                alert(`Player ends with ${playerScore}`)
                dealerPlay()
                break;
            }
        }
    //---------------------------------------------------------



}

console.log(playgame())


/* BROKEN CODE - INCLUDES PREVIOUS ATTEMPTS 

    while (playerScore < 21) {
        offerHit();
        if (true) {
            hitPlayerLow();
            if (playerScore == 21) {
                alert(`Player wins. You have ${playerScore}!`);
            } else if (playerScore > 21) {
                alert(`Player loses with ${playerScore}`);
            } else {
                console.log(`You now have ${playerScore}`);
            }
        }
        
        if (false) {
            alert(`Player ends with ${playerScore}`)
            // Attempted to address this in the version below but not currently working.
        }
    }
}



/* REVIEW THIS WITH TA TO UNDERSTAND WHY IT WILL NOT WORK AND/OR HOW TO INCORPORATE CANCEL BUTTON FROM CONFIRM BOX (FALSE) TO EXECUTE.

while (playerScore < 21) {
    offerHit();

    if (offerHit() === true) {
        hitPlayer(4, 11);
        if (playerScore == 21) {
            alert('Player wins!');
        } else if (playerScore > 21) {
            alert(`Player loses with ${playerScore}`)
        } else {
            console.log(`You now have ${playerScore}`)
        }
    }
    
    if (offerHit() === false) {
        alert(`Player ends with ${playerScore}`)
    }
}
*/


