var start = false;
var level = 0;

var userClickedPattern = [];
var gamePattern = [];

var buttonColours = ["red","blue","green","yellow"];

//Start Sequence

$(document).on('keydown', function() {
    if (!start) {
        $("#level-title").text("Level " + level);
        nextSequence();
        start = true;
    }
})

//Saving the information of which button was clicked

$(".btn").click(function(){

    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
})

//Checking the answer

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout (function() {nextSequence()}, 1000);
        }
    } else {
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

//Next Sequence

function nextSequence() {

    userClickedPattern = [];

    level++;

    $("h1").text("Level " + level)

    randomNumber = Math.floor(Math.random() * 4);
    
    var randomChosenColor = buttonColours[randomNumber];

    gamePattern.push(randomChosenColor);

    playSound(randomChosenColor);

    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
}

//Animation

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 100);

}

//Play sound

function playSound(name) {
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

//Start Over

function startOver() {
    level = 0;
    gamePattern = [];
    start = false;
};