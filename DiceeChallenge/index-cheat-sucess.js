var cheat = 0;

//Starting the Game

$(document).on("keypress", function(){
    if (cheat === 0) {
        rollDice(player1)
        rollDice(player2)
        winnerSelector()
    } else if (cheat === 1) {
        cheatDice(player1, player2)
        winnerSelector()        
    } else {
        cheatDice(player2, player1)
        winnerSelector()
    }
    
})

//Verifying Cheat

$(document).on("keypress", function(event){
    if(event.key == "c") {
        cheat = 1;
        console.log("cheat 1")
    }
    else if(event.key == "v") {
        cheat = 2;
        console.log("cheat 2")
    }
    else if(event.key == "b") {
        cheat = 0;
        console.log("cheat 0")
    }
})

//Player Section

const player1 = {
    dice: 0,
    img: "1",
};
const player2 = {    
    dice: 0,
    img: "2",
};

//Random Dice Section

function randomDice() {
    var randomNumber = Math.floor(Math.random() * 6 + 1);
    return randomNumber;
}

function randomImage(imgNumber, diceNumber) {
    document.querySelector(".img" + imgNumber).setAttribute("src","./images/dice" + diceNumber + ".png");
}

function rollDice(player) {
    player.dice = randomDice()
    randomImage(player.img, player.dice)
}

//Winner Selector Section

function winnerSelector() {
    if (player1.dice > player2.dice) {
        document.querySelector("h1").innerText = "Player 1 Wins!";
    } else if (player2.dice > player1.dice) {
        document.querySelector("h1").innerText = "Player 2 Wins!";
    } else {
        document.querySelector("h1").innerText = "Draw!";
    }
}

//Cheat Section

function cheatDice(winner, loser) {
    winner.dice = 0;
    loser.dice = 0;
    while (winner.dice <= loser.dice) {
        winner.dice = randomDice()
        loser.dice = randomDice()
    }
    randomImage(winner.img, winner.dice)
    randomImage(loser.img, loser.dice)
}