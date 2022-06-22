
//Equation variable/console log for both dice

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var player1= "images/dice" + randomNumber1 + ".png";
var player2= "images/dice" + randomNumber2 + ".png";

//querySelector for .img1 (dice #1) & .img2 (dice #2)

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

// h1 winner display

  if (randomNumber1 === randomNumber2) {
    document.querySelector(".container h1").innerHTML="Draw!";
  } else if (randomNumber1>randomNumber2) {
    document.querySelector(".container h1").innerHTML="🚩 Player 1 Wins!";
  } else if (randomNumber2>randomNumber1) {
    document.querySelector(".container h1").innerHTML="Player 2 Wins! 🚩";
  }
