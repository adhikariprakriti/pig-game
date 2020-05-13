var scores,roundScore,activePlayer,dice,playGame,winningScore,lastdice;
//start of new game
init();

//on clicking roll dice button
   document.querySelector(".btn-roll").addEventListener("click", function(){  
    //console.log(playGame);
    if(playGame){
         //generate random number
     dice=Math.floor(Math.random()*6)+1;

     //display result in dice
      var diceDOM =document.querySelector(".dice");
     diceDOM.style.display= "block";
     diceDOM.src="dice-"+dice+".png";
 
     //update score
     if(lastdice===6 && dice===6)
     {
       
       scores[activePlayer]=0;
        document.querySelector("#score-" +activePlayer).textContent = scores[activePlayer];
      
        nextPlayer();  

     }
     else if (dice!==1){

      newdice=Math.floor(Math.random()*6)+1;
        
         //add numbers in dice n display
         roundScore +=dice;
         //console.log(roundScore);
         document.querySelector("#current-" + activePlayer).textContent = roundScore;
     }
     else
     {
         nextPlayer();
     }

     lastdice=dice;
     
    }
    });





  //on clicking hold button
  document.querySelector(".btn-hold").addEventListener("click",function()
  {
      if(playGame){
          //add current score to global score
    scores[activePlayer] +=roundScore;

    //update UI
    document.getElementById("score-"+activePlayer).textContent =scores[activePlayer];

    //determine winner
    if(scores[activePlayer] >=winningScore){
      document.getElementById("name-"+activePlayer).textContent ="WINNER!!";
      document.querySelector(".dice").style.display = "none";
      document.querySelector(".player-"+activePlayer+"-panel").classList.add('winner');
      document.querySelector(".player-"+activePlayer+"-panel").classList.remove('active');
      playGame = false;
      console.log(playGame);
      
    }else{
        //next player turn
        nextPlayer();
    }
      }
      
      
  });



//to determine next player
function nextPlayer(){
    //change active player
    activePlayer === 0 ? activePlayer=1 : activePlayer=0;
    //console.log(activePlayer);
       roundScore=0;
       document.getElementById("current-0").textContent ="0";
       document.getElementById("current-1").textContent ="0";

       //hide dice when its new player turn
      document.querySelector(".dice").style.display = "none";

      //change the classname
    if (activePlayer===0){
        document.querySelector(".player-0-panel").className ="player-0-panel active";
        document.querySelector(".player-1-panel").className ="player-1-panel";

         }else{
            document.querySelector(".player-1-panel").className ="player-1-panel active";
            document.querySelector(".player-0-panel").className ="player-0-panel ";
  }
 }
    
   //on clicking new game button
   document.querySelector(".btn-new").addEventListener("click",init);

   function init(){
    playGame=true;

    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    //playGame=true;
     winningScore=prompt("set the wining score");
     document.querySelector(".dice").style.display = "none";
     document.getElementById("score-0").textContent ="0";
     document.getElementById("current-0").textContent ="0";
     document.getElementById("score-1").textContent ="0";
     document.getElementById("current-1").textContent ="0";
     document.getElementById("name-0").textContent ="player-1";
     document.getElementById("name-1").textContent ="player-2";
     document.querySelector(".player-0-panel").classList.remove('winner');
     document.querySelector(".player-1-panel").classList.remove('winner');
     document.querySelector(".player-"+activePlayer+"-panel").classList.remove('active');
     document.querySelector(".player-"+activePlayer+"-panel").classList.add('active');
     
   }