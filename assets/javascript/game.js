
$(document).ready(function(){
var mainNumber = Math.floor(Math.random() * 101) + 19;
$("#mainNumber").text("$" + mainNumber);
var box1 = Math.floor(Math.random() * 12) + 1;
var box2 = Math.floor(Math.random() * 12) + 1;
var box3 = Math.floor(Math.random() * 10) + 1;
var box4 = Math.floor(Math.random() * 12) + 1;
var wins = 0;
var losses = 0;
var guesses = 0;
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);
initializeGame();
buttons(); 
function initializeGame() {
    mainNumber = Math.floor(Math.random() * 101) + 30;
    $("#mainNumber").text("$" + mainNumber);
    box1 = Math.floor(Math.random() * 12) + 1;
    box2 = Math.floor(Math.random() * 12) + 1;
    box3 = Math.floor(Math.random() * 10) + 1;
    box4 = Math.floor(Math.random() * 12) + 1;
    guesses = 0;
    $("#guessNumber").text("$" + guesses); 
    // $("#button-1").off("click");
    // $("#button-2").off("click");
    // $("#button-3").off("click");
    // $("#button-4").off("click");
 } 

 function buttons(){
    $("#button-1").on('click', function() {
          guesses += box1;
          $("#guessNumber").text("$" + guesses);
          if (guesses === mainNumber) {
              win();
            }
            else if (guesses > mainNumber){
              lose();
            }
      })
  
  $("#button-2").on('click', function() {
          guesses += box2;
          $("#guessNumber").text("$" + guesses);
          if (guesses === mainNumber){
              win();
            }
            else if (guesses > mainNumber){
              lose();
            }
  })
  
  $("#button-3").on('click', function() {
          guesses += box3;
          $('#guessNumber').text("$" + guesses);
          if (guesses === mainNumber){
              win();
            }
            else if (guesses > mainNumber){
              lose();
            }
  })
  
  $("#button-4").on('click', function() {
          guesses += box4;
          $('#guessNumber').text("$" + guesses);
          if (guesses === mainNumber){
              win();
            }
            else if (guesses > mainNumber){
              lose();
            }
  })
  }
  
 function win() {
   wins++;
   alert("You won!");
   $("#wins").text("Wins: " + wins);
   initializeGame();
} 

function lose(){
   losses++;
   alert("You lost!");
   $("#losses").text("Losses: " + losses);
   initializeGame();
}

})


// function score() {
//      if (guesses === mainNumber){
//     wins++;
//     alert("You won!");
//     $("#wins").text("wins: " + wins);
//     initializeGame();
    
// } else if (guesses > mainNumber){
//     losses=losses+1;
//     alert("You lost!");
//     $("#losses").text("Losses: " + losses);
//     initializeGame();
// }
//  }





