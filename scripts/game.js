var character = document.getElementById("character");
var obstacle = document.getElementById("obstacle");
var score = 0;
var highScore = 0
var stopScore = false;
var gameOverScreen = document.getElementById("gameOverScreen");

// checks which key is pressed
function whichKey(event){
    var key = event.keyCode;

    //jumps if key is spacebar, upArrow or 'w'
    if(key == 32 || key == 38 || key == 87){
        jump();
    }

}

//makes the character jump
function jump(){

    if(character.classList.contains("animate")) {return};
    character.classList.add("animate");
    setTimeout(
        () => character.classList.remove("animate"), 800
    );
}

//checks if character is touching obstacle
var checkDead = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    if(characterTop >= 130 && obstacleLeft <= 20 && obstacleLeft >= -20)
    {
        stopScore = true; //stop incrementing score if game is over
        obstacle.style.animation = "none"; //stop obstacles
        gameOverScreen.style.display = "block"; //display game over screen
        document.getElementById("scoreSpan2").innerHTML = Math.floor(score/100); //display score
        //set new highScore 
        if(score > highScore) highScore = score;
        // score = 0;
        console.log(highScore);
        document.getElementById("highScore").innerHTML = Math.floor(highScore/100);
            
    }
    //if not touching, increment score as obstacle passes below it
    else if(stopScore == false) 
    {
            let displayScore = incrementScore();
            document.getElementById("scoreSpan").innerHTML = displayScore;
    }


    }, 10);

//restart page on clicking restart button
function restart(){
    // document.location.reload();
    obstacle.style.animation = "obstacle 1s linear infinite";
    score = 0; 
    gameOverScreen.style.display = "none";
    stopScore = false; 
}

function incrementScore() {
    score++;
    let displayScore = Math.floor(score/100);
    if(displayScore  >= 3){
        character.classList.add("level0");
    }

    return displayScore;
}
