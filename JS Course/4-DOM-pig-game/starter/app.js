/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var currentPlayer, score, gamePlay;

currentPlayer=0;
score=[0 , 0];
roundScore=0;
gamePlay=true

function change(){
    if(roundScore == 0){
        if(currentPlayer == 0){
            currentPlayer=1;
            document.querySelector(".player-0-panel").classList.toggle("active");
            document.querySelector(".player-1-panel").classList.toggle("active");
        }
        else {
            currentPlayer=0;
            document.querySelector(".player-0-panel").classList.toggle("active");
            document.querySelector(".player-1-panel").classList.toggle("active");
        } 
    }
    
}

document.querySelector(".dice").style.display= "none";

// ROLL DICE BUTTON

document.querySelector(".btn-roll").addEventListener("click",function(){
    if (gamePlay){
        // 1. Roll the dice
        var dice = Math.floor(Math.random()*6)+1;
        var diceDOM = document.querySelector(".dice");
        diceDOM.style.display= "block";
        diceDOM.src =`dice-${dice}.png`
        
        //2. Update the current score (IF dice != 1)

        if (dice == 1){
            roundScore=0;

        }else{
            roundScore += dice;
            
        }
        
        document.querySelector("#current-"+ currentPlayer).textContent = roundScore;
        

        //3. Automaticaly change the player

        change()   
    }
   
})

// HOLD BUTTON

document.querySelector(".btn-hold").addEventListener("click",function(){
    if(gamePlay){
        score[currentPlayer] += roundScore;
        document.querySelector("#score-"+ currentPlayer).textContent = score[currentPlayer];
        roundScore=0
        document.querySelector("#current-"+ currentPlayer).textContent = roundScore;
        
        // WINNER PROTOCOL
        if(score[currentPlayer] >= 100 ){
            
            document.querySelector(".player-"+currentPlayer+"-panel").classList.add("winner");
            document.querySelector("#name-"+currentPlayer).textContent= "WINNER"
            gamePlay= false
    
        }else{
            //Automaticaly change the player
            change()
        }
    }
   
   
})

// NEW GAME BUTTON

document.querySelector(".btn-new").addEventListener("click", function(){
    
    gamePlay=true
    document.querySelector(".player-"+currentPlayer+"-panel").classList.remove("winner");
    document.querySelector("#name-"+currentPlayer).textContent= "PLAYER "+ (currentPlayer + 1);
    if(currentPlayer == 1){
        change();
    }

    score=[0 , 0];
    roundScore=0;

    document.querySelector("#current-0").textContent = roundScore;
    document.querySelector("#score-0").textContent = score[0];
    document.querySelector("#current-1").textContent = roundScore;
    document.querySelector("#score-1").textContent = score[1];


})