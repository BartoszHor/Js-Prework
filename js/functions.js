function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function printMessage2(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('result').appendChild(div);
}

function clearMessages2(){
	document.getElementById('result').innerHTML = '';
}

function rerunGame(){
	if ((computerWins >= 5) || (playerWins >= 5)) {
	clearMessages2()
	computerWins = 0;
	playerWins = 0;
	}
}