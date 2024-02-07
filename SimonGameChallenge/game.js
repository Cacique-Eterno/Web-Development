var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

//This variable make sure that the sequence will only be initiated if game has not started yet
start = false;
level = 0;

//Starting the Game
$(document).on("keypress", function(event){
    console.log(event.key);
    if(!start) {
        nextSequence();
        start = true;
    };

})

//Detecting botton click
$(".btn").click(function(){
    console.log(this.id);
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    //Play song and animate the botton
    playSound(userChosenColor);
    animatePress(userChosenColor);
    //Calling checkAnswer
    checkAnswer(userClickedPattern.length-1);

})

//Function checkAnswer
function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("sucess");
        //Comparing if the sequence is finished and start a new sequence in 1000 milisecond (1 second)
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("failure");
        //Animate and play song when players responde is wrong
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

//Sequence section
function nextSequence() {
    //Very importart, reset the player pattern
    userClickedPattern = [];
    //Increasing level by 1 every time nextSequence is called
    level++;
    $("h1").text("Level " + level)
    //Determining a random color
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor)
    //Animation of the sequence
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    //Sound of the sequence
    playSound(randomChosenColor)
}

//Play sound
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

//Button animation when clicked
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){ //The functions will only be called after 
        $("#" + currentColour).removeClass("pressed");
    }, 100) //100 miliseconds
}

//Start over
function startOver(){
    level = 0;
    gamePattern = [];
    start = false;
}