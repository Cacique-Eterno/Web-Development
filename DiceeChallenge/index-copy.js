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

//Need to find a way to don't losse the var cheat wen reload the page
//Or make the game only begin when the key Enter is pressed, this will use a while or for loop
//Idea, maybe if you use a invisible emoji is discord dice, is possible to cheat on d20 with a viced dice

//Random Dice Section
if (cheat === "0") {
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);

    var randomImageSource = "./images/dice" + randomNumber1 + ".png";

    document.querySelector(".img1").setAttribute("src" , randomImageSource);

    var randomNumber2 = Math.floor(Math.random() * 6 + 1);

    var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";

    document.querySelector(".img2").setAttribute("src" , randomImageSource2);

//Cheat Dice Section
} else if (cheat === "1") {
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);

    var randomImageSource = "./images/dice" + randomNumber1 + ".png";

    document.querySelector(".img1").setAttribute("src" , randomImageSource);

//Cheating for Player 1 win
    if (randomNumber1 === 6) {
        var randomNumber2 = Math.floor(Math.random() * 5 + 1);
    } else if (randomNumber1 === 5) {
        randomNumber2 = Math.floor(Math.random() * 4 + 1);
    } else if (randomNumber1 === 4) {
        randomNumber2 = Math.floor(Math.random() * 3 + 1);
    } else if (randomNumber1 === 3) {
        randomNumber2 = Math.floor(Math.random() * 2 + 1);
    } else if (randomNumber1 === 2) {
        randomNumber2 = Math.floor(Math.random() * 1 + 1);
    } else {
        randomNumber2 = 1;
    }

    var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";

    document.querySelector(".img2").setAttribute("src" , randomImageSource2);

//Cheating for Player 2 win
}  else if (cheat === "2") {
        var randomNumber2 = Math.floor(Math.random() * 6 + 1);
    
        var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";
    
        document.querySelector(".img2").setAttribute("src" , randomImageSource2);
        if (randomNumber2 === 6) {
            var randomNumber1 = Math.floor(Math.random() * 5 + 1);
        } else if (randomNumber2 === 5) {
            randomNumber1 = Math.floor(Math.random() * 4 + 1);
        } else if (randomNumber2 === 4) {
            randomNumber1 = Math.floor(Math.random() * 3 + 1);
        } else if (randomNumber2 === 3) {
            randomNumber1 = Math.floor(Math.random() * 2 + 1);
        } else if (randomNumber2 === 2) {
            randomNumber1 = Math.floor(Math.random() * 1 + 1);
        } else {
            randomNumber1 = 1;
        }
    
        var randomImageSource = "./images/dice" + randomNumber1 + ".png";
    
        document.querySelector(".img1").setAttribute("src" , randomImageSource);
    }

//Winner Selector Section

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerText = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerText = "Draw!";
}