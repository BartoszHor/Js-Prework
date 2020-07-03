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

	/*
	if(randomNumber == 1){
	  computerMove = 'kamień';
	} else if (randomNumber == 2) {
	  computerMove = "papier"
	} else if (randomNumber == 3) {
	  computerMove = "nożyce"
	}
	*/

	printMessage('Ruch komputera to: ' + computerMove);

	/*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

	console.log('Gracz wpisał: ' + playerInput);

	let playerMove = getMoveName(playerInput)

	/*
	if(playerInput == '1'){
	  playerMove = 'kamień';
	} else if (playerInput == "2") {
	  playerMove = "papier"
	} else if (playerInput == "3") {
	  playerMove = "nożyce"
	}
	*/
	printMessage('Ruch gracza to: ' + playerMove);

	function displayResult(argComputerMove, argPlayerMove) {
		console.log("Test")
		console.log(argComputerMove, argPlayerMove)
	if((computerMove == "kamień" && playerMove == "papier") || (computerMove == "papier" && playerMove == "nożyce") || (computerMove == "nożyce" && playerMove == "kamień")) {
	   printMessage('Wygrana gracza');
	} else if ((computerMove == "kamień" && playerMove == "nożyce") || (computerMove == "papier" && playerMove == "kamień") || (computerMove == "nożyce" && playerMove == "papier")) {
		printMessage('Wygrana komputera');
	} else if (computerMove === playerMove) {
		printMessage('Remis');
		}
	}

	let result = displayResult(computerMove, playerMove);
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
 

