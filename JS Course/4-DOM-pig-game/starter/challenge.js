/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var currentPlayer, score, gamePlay, oldDice;

currentPlayer=0;
score=[0 , 0];
roundScore=0;
gamePlay=true;

var winValue= document.getElementById("Win-score").value= " "

function change(){
    if(roundScore == 0 ){
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
        diceDOM.src =`dice-${dice}.png`;
        
        //2. Update the current score (IF dice != 1)
        console.log("dice "+ dice);
        console.log("old dice "+ oldDice);

        if(oldDice == dice && dice == 6){
            score[currentPlayer]= 0;
            document.querySelector("#score-"+ currentPlayer).textContent = score[currentPlayer];
            change();
        }
        
        if (dice == 1){
            roundScore=0;
    
        }else{
            roundScore += dice;
            oldDice=dice;
        }




        document.querySelector("#current-"+ currentPlayer).textContent = roundScore;
        

        //3. Automaticaly change the player

        change();
    }
   
})

// HOLD BUTTON

document.querySelector(".btn-hold").addEventListener("click",function(){
    if(gamePlay){
        score[currentPlayer] += roundScore;
        document.querySelector("#score-"+ currentPlayer).textContent = score[currentPlayer];
        roundScore=0;
        document.querySelector("#current-"+ currentPlayer).textContent = roundScore;
        
        // WINNER PROTOCOL
        if(score[currentPlayer] >= winValue ){
            
            document.querySelector(".player-"+currentPlayer+"-panel").classList.add("winner");
            document.querySelector("#name-"+currentPlayer).textContent= "WINNER";
            gamePlay= false;
    
        }else{
            //Automaticaly change the player
            change();
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

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. 
(Hint: Always save the previous dice roll in a separate variable)

2. Add an input field to the HTML where players can set the winning score, 
so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in 
JavaScript. This is a good oportunity to use google to figure this out :)

3. Add another dice to the game, so that there are two dices now. 
The player looses his current score when one of them is a 1. 
(Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
