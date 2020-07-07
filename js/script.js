'use strict';

function playGame(playerInput) {

	clearMessages()

	function getMoveName(argMoveId){
	  if(argMoveId == 1){
	    return 'kamień';
	  } else if (argMoveId == 2){
	  	return 'papier'
	  } else if (argMoveId == 3){
	  	return 'nożyce'
	  } else {
	    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	    return 'nieznany ruch';
	  }
	}

	let randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Wylosowana liczba to: ' + randomNumber);

	let computerMove = getMoveName(randomNumber)

	printMessage('Ruch komputera to: ' + computerMove);

	console.log('Gracz wpisał: ' + playerInput);

	let playerMove = getMoveName(playerInput);
	printMessage('Ruch gracza to: ' + playerMove);

	let result = displayResult(computerMove, playerMove);


	function displayResult(argComputerMove, argPlayerMove) {
		console.log("Test")
		console.log(argComputerMove, argPlayerMove)
	if((argComputerMove == "kamień" && argPlayerMove == "papier") || (argComputerMove == "papier" && argPlayerMove == "nożyce") || (argComputerMove == "nożyce" && argPlayerMove == "kamień")) {
	   printMessage('Wygrana gracza')
	   playerWins++
	   clearMessages2();
	   printMessage2("Wynik gracza: " + playerWins)
	   printMessage2("Wynik komputera: " + computerWins)
	} else if (argComputerMove === argPlayerMove) {
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
   playGame(1);
})
document.getElementById("paper").addEventListener("click", function(){
  playGame(2);
})
document.getElementById("scissors").addEventListener("click", function(){
  playGame(3);
})

let computerWins = 0;
let playerWins = 0;



