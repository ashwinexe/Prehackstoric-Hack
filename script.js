var character = document.getElementById("character");
var obstacle = document.getElementById("obstacle");
var score = 0;
var highScore = 0
var stopScore = false;
var gameOverScreen = document.getElementById("gameOverScreen");

// function moveObstacle(){
function keyPressed(event){
    var key = event.keyCode;

    //jumps if key is spacebar, upArrow or 'w'
    if(key == 32 || key == 38 || key == 87){
        jump();
    }

}

function jump(){

    if(character.classList.contains("animate")) {return};
    character.classList.add("animate");
    setTimeout(
        () => character.classList.remove("animate"), 800
    );
}

var checkDead = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    //if character and obstacle touches
    // alert("Game Over");
    if(characterTop >= 130 && obstacleLeft <= 20 && obstacleLeft >= -20)
    {
        stopScore = true;
        obstacle.style.animation = "none";
        gameOverScreen.style.display = "block";
        document.getElementById("scoreSpan2").innerHTML = Math.floor(score/100);
        //set new highScore 
        if(score > highScore) highScore = score;
        score = 0;
        console.log(highScore);
        document.getElementById("highScore").innerHTML = Math.floor(highScore/100);
            
    }
    else if(stopScore == false) 
    {
            score++;
            document.getElementById("scoreSpan").innerHTML = Math.floor(score/100);
    }


    }, 10);

    function restart(){
        document.location.reload();
    }