'use strict';
{
	const playGame = function(playerInput) {

	clearMessages("messages");

	let randomNumber = Math.floor(Math.random() * 3 + 1);
	let computerMove = getMoveName(randomNumber);
	let playerMove = getMoveName(playerInput);

	function getMoveName(argMoveId){
		if(argMoveId == 1){
		    return 'kamień';
		} else if (argMoveId == 2){
		  	return 'papier';
		} else if (argMoveId == 3){
		  	return 'nożyce'
		} else {
			printMessage("messages", 'Nie znam ruchu o id ' + argMoveId + '.');
			return 'nieznany ruch';
			}
		}

	printMessage("messages", 'Ruch komputera to: ' + computerMove);
	printMessage("messages", 'Ruch gracza to: ' + playerMove);

	let result = displayResult(computerMove, playerMove);

		function displayResult(x, y) {
			console.log("Test")
			console.log(x, y)
		if((x == "kamień" && y == "papier") || (x == "papier" && y == "nożyce") || (x == "nożyce" && y == "kamień")) {
		   printMessage("messages", 'Wygrana gracza')
		   playerWins++
		   clearMessages("result");
		   printMessage("result","Wynik gracza: " + playerWins)
		   printMessage("result", "Wynik komputera: " + computerWins)
		} else if (x === y) {
			printMessage("messages", 'Remis');
		} else {
			printMessage("messages", 'Wygrana komputera');
			computerWins++;
			clearMessages("result");
			printMessage("result", "Wynik gracza: " + playerWins)
			printMessage("result", "Wynik komputera: " + computerWins)
			}
		}
	} 

	let computerWins = 0;
	let playerWins = 0;

	function rerunGame(){		
		if ((computerWins > 4) || (playerWins > 4)) {
			clearMessages("result") 
			printMessage("result", "Wynik gracza: " + playerWins)
			printMessage("result", "Wynik komputera: " + computerWins)
			console.log (playerWins, computerWins);
			if (computerWins == 5) {
				clearMessages("result");
				printMessage("result", "Wygrywa komputer");
			} else {
				clearMessages("result");
				printMessage("result", "Wygrywa gracz");
			} computerWins = 0;
			  playerWins = 0;
		}
	}

	const rock = document.getElementById("rock"),
	paper = document.getElementById("paper"),
	scissors = document.getElementById("scissors");

	rock.addEventListener("click", function(){
	   playGame(1)
	   rerunGame()
	})
	paper.addEventListener("click", function(){
	  playGame(2)
	  rerunGame()
	})
	scissors.addEventListener("click", function(){
	  playGame(3)
	  rerunGame()
	})
}

