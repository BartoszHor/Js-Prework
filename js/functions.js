const printMessage = function(id, msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById(id).appendChild(div);
}

const clearMessages = function(id) {
	document.getElementById(id).innerHTML = '';
}



