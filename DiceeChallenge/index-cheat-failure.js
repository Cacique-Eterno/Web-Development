//My first trial of a cheat, i didn't has the knowledge to do this yet
var cheat = "0";
console.log(cheat)
//Detecting keyboard press

document.addEventListener("keydown", function(event) { 
    if (event.key === "0" || event.key === "1" || event.key === '2') {
        cheat = event.key;
        console.log(cheat)
    } else {
        cheat = "0";
    }
})

//Random Dice Section
if (cheat === "0") {
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);

    var randomImageSource = "./images/dice" + randomNumber1 + ".png";

    document.querySelector(".img1").setAttribute("src" , randomImageSource);

    var randomNumber2 = Math.floor(Math.random() * 6 + 1);

    var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";

    document.querySelector(".img2").setAttribute("src" , randomImageSource2);

//Cheating for Player 1 win
} else if (cheat === "1") {
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);

    var randomImageSource = "./images/dice" + randomNumber1 + ".png";

    document.querySelector(".img1").setAttribute("src" , randomImageSource);

    cheatFunc(randomNumber1, randomNumber2, randomImageSource2);

//Cheating for Player 2 win
}  else if (cheat === "2") {
        var randomNumber2 = Math.floor(Math.random() * 6 + 1);
    
        var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";
    
        document.querySelector(".img2").setAttribute("src" , randomImageSource2);

        cheatFunc(randomNumber2, randomNumber1, randomImageSource);
    }

//Winner Selector Section

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerText = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerText = "Draw!";
}

//I made a function to shorten the cheat code
function cheatFunc(winnerNumber, loserNumber, loserImage) {
    if (winnerNumber === 6) {
        var loserNumber = Math.floor(Math.random() * 5 + 1);
    } else if (winnerNumber === 5) {
        loserNumber = Math.floor(Math.random() * 4 + 1);
    } else if (winnerNumber === 4) {
        loserNumber = Math.floor(Math.random() * 3 + 1);
    } else if (winnerNumber === 3) {
        loserNumber = Math.floor(Math.random() * 2 + 1);
    } else if (winnerNumber === 2) {
        loserNumber = Math.floor(Math.random() * 1 + 1);
    } else {
        loserNumber = 1;
    }

    var loserImage = "./images/dice" + loserNumber + ".png";

    document.querySelector(".img2").setAttribute("src" , loserImage);

};