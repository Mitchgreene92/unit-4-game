$(document).ready(function(){
  // Generates random number 19-120
  var random=Math.floor(Math.random()*102+19)
  
  // Display random number
  $('#matchScore').text(random);
  
  //Generate random number for each crystal
  var crys1= Math.floor(Math.random()*12+1)
  var crys2= Math.floor(Math.random()*12+1)
  var crys3= Math.floor(Math.random()*12+1)
  var crys4= Math.floor(Math.random()*12+1)
  
  // User Statistics/Variables
  var playerTotal= 0; 
  var wins= 0;
  var losses= 0;
  

$('#wins').text(wins);
$('#losses').text(losses);

// Resets the game
function reset(){
      random=Math.floor(Math.random()*102+19);
      console.log(random)
      $('#matchScore').text(random);
      crys1= Math.floor(Math.random()*12+1);
      crys2= Math.floor(Math.random()*12+1);
      crys3= Math.floor(Math.random()*12+1);
      crys4= Math.floor(Math.random()*12+1);
      playerTotal= 0;
      $('#totalScore').text(playerTotal);
      } 

// Show a win
function win(){
alert("You won the game!");
  wins++; 
  $('#wins').text(wins);
  reset();
}
// Show a loss
function lose(){
alert ("Sorry try again next time!");
  losses++;
  $('#losses').text(losses);
  reset()
}

//Code for Crystals
  $('.crystal1').on ('click', function(){
    playerTotal = playerTotal + crys1;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal); 
        if (playerTotal==random){
          win();
        }
        else if (playerTotal > random){
          lose();
        }   
  })  
  $('.crystal2').on ('click', function(){
    playerTotal = playerTotal + crys2;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal); 
        if (playerTotal==random){
          win();
        }
        else if (playerTotal>random){
          lose();
        } 
  })  
  $('.crystal3').on ('click', function(){
    playerTotal = playerTotal + crys3;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal);
          if (playerTotal==random){
          win();
        }
        else if (playerTotal>random){
          lose();
        } 
  })  
  $('.crystal4').on ('click', function(){
    playerTotal = playerTotal + crys4;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal); 
      
          if (playerTotal==random){
          win();
        }
        else if (playerTotal>random){
          lose();
        }
  });   
}); 
