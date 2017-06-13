//place a guess
//was the guess a hit or not 
//game over : win ? lose ?
//see hit to miss ratio

// part 1
var boardState = [
	[null, null, null,null,null,null,null,null,null],
	[null, null, null,null,null,null,null,null,null],
	[null, null, null,null,null,null,null,null,null],
	[null, null, null,null,null,null,null,null,null],
	[null, null, null,null,null,null,null,null,null],
	[null, null, null,null,null,null,null,null,null],
	[null, null, null,null,null,null,null,null,null],
	[null, null, null,null,null,null,null,null,null],
	[null, null, null,null,null,null,null,null,null]
	];
function buildBoard() {
	var board = document.getElementById('Battelship');
	var row;
	var cell;
	for(var i = 0; i < 9; i++) {
		row = board.insertRow(i);
		row.setAttribute('row', i);
		for(var j = 0; j < 9; j++) {
			cell = row.insertCell(j); 
			cell.innerHTML = boardState[i][j];
			cell.setAttribute('column', j);
			cell.setAttribute('onclick', 'play(this)');
		};
	};
};

//var massage= prompt("Wait please");
//window.addEventListener('DOMContentLoaded', function() {
//	buildBoard();
//});








