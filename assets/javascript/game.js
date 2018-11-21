
var imgArray = ["./assets/images/bluestone.jpg", "./assets/images/whitestone.jpg", "./assets/images/greenstone.jpg", "./assets/images/pinkstone.jpg"]
var intArray = [];

// Create a random number for the player to try to match.

$(document).ready(function() {

      var random = Math.floor(Math.random() * 102 ) + 19;
      $("#randomNumber").text(random);

    });

// <!-- Add clickable images of crystals, these need to be given random numbers (between 1-12) each time the game restarts, and they will be hidden -->
    for(var i = 0; i < 4; i++) {
        var imgsrc = imgArray[i];
        var crystal = '<img id="'+i+'" src="'+imgsrc+'" class="crystal">';
        $("#crystals").append(crystal);
        var num = getRandomNumber();
        intArray.push[num];
        console.log(num);
    }

    function getRandomNumber(){
        return Math.floor(Math.random() * 11 ) + 1;
    }

// <!-- If the players "Wins"(defined by getting the exact random number and not going over), add 1 increment to "Wins". -->

// <!-- Else, the player "Loses" and adds 1 increment to "Losses" -->

// <!-- Total current Score box, needs to add up each time a crystal is clicked. Reset after each game -->
    var currentScore = $('crystal').append(crystal)
