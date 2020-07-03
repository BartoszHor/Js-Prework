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

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

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
if( computerMove == "kamień" && playerMove == "papier") {
   printMessage('Wygrana gracza');
} else if (computerMove == "papier" && playerMove == "kamień") {
	printMessage('Wygrywa komputer');
} else if (computerMove == "nożyce" && playerMove == "nożyce") {
	printMessage("Remis");
} else if (computerMove == "kamień" && playerMove == "kamień") {
	printMessage("Remis");
} else if (computerMove == "papier" && playerMove == "papier") {
	printMessage("Remis");
} else if (computerMove == "nożyce" && playerMove == "kamień") {
	printMessage('Wygrana gracza');
} else if (computerMove == "nożyce" && playerMove == "papier") {
	printMessage('Wygrywa komputer');
} else if (computerMove == "kamień" && playerMove == "nożyce") {
	printMessage("Wygrywa komputer");
} else if (computerMove == "papier" && playerMove == "nożyce") {
	printMessage("Wygrana gracza");
} else {
	playerMove;	
	}
}

let result = displayResult(computerMove, playerMove);


