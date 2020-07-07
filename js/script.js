'use strict';

function playGame(playerInput) {

	clearMessages()

let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = getMoveName(randomNumber)

let playerMove = getMoveName(playerInput);

	function getMoveName(argMoveId){
	  if(argMoveId == 1){
	    return 'kamień';
	  } else if (argMoveId == 2){
	  	return 'papier';
	  } else if (argMoveId == 3){
	  	return 'nożyce'
	  } else {
	    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	    return 'nieznany ruch';
	  }
	}

	//console.log('Wylosowana liczba to: ' + randomNumber);

	printMessage('Ruch komputera to: ' + computerMove);

	//console.log('Gracz wpisał: ' + playerInput);

	printMessage('Ruch gracza to: ' + playerMove);

	let result = displayResult(computerMove, playerMove);

	function displayResult(x, y) {
		console.log("Test")
		console.log(x, y)
	if((x == "kamień" && y == "papier") || (x == "papier" && y == "nożyce") || (x == "nożyce" && y == "kamień")) {
	   printMessage('Wygrana gracza')
	   playerWins++
	   clearMessages2();
	   printMessage2("Wynik gracza: " + playerWins)
	   printMessage2("Wynik komputera: " + computerWins)
	} else if (x === y) {
		printMessage('Remis');
	} else {
		printMessage('Wygrana komputera');
		computerWins++
		clearMessages2();
		printMessage2("Wynik gracza: " + playerWins)
		printMessage2("Wynik komputera: " + computerWins)
		}
	}
} 

document.getElementById("rock").addEventListener("click", function(){
   playGame(1)
   rerunGame()
})
document.getElementById("paper").addEventListener("click", function(){
  playGame(2)
  rerunGame()
})
document.getElementById("scissors").addEventListener("click", function(){
  playGame(3)
  rerunGame()
})

let computerWins = 0;
let playerWins = 0;

function rerunGame(){
	if ((computerWins > 4) || (playerWins > 4)) {
	clearMessages2()
	computerWins = 0;
	playerWins = 0; 
	printMessage2("Wynik gracza: " + playerWins)
	printMessage2("Wynik komputera: " + computerWins)
	} else if ((computerWins >= 4) && (playerWins < 4)) {
		clearMessages2();
		printMessage2("Wygrywa komputer");
	} else if ((computerWins < 4) && (playerWins >= 4)) {
		clearMessages2();
		printMessage2("Wygrywa gracz");
	}
}


