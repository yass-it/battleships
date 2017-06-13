var nextPlayer = true;
var movesState = [
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

	function play(box) {
	var row = box.parentElement.getAttribute('row');
	var cell = box.getAttribute('column');
	if(movesState[row][cell] == null) {	
		if(nextPlayer) {
			movesState[row][cell] = 'x'; // its mean hit
			//box.innerHTML = "x"; 
		} else {
			movesState[row][cell] = 'o'; // its mean miss
			//box.innerHTML ="o";
		}
		nextPlayer = !nextPlayer;
		console.log(movesState);	
		populateBoard();
		
	} else {
		alert('grow up. you can\'t do that')
	};
};
function buildBoard() {
	var board = document.getElementById('Battleship');
	var row;
	var cell;
	for(var i = 0; i < 9; i++) {
		row = board.insertRow(i);
		row.setAttribute('row', i);
		for(var j = 0; j < 9; j++) {
			cell = row.insertCell(j); 
			cell.innerHTML = movesState[i][j];
			cell.setAttribute('column', j);
			cell.setAttribute('onclick', 'play(this)');
		};
	};
};


function populateBoard() {
	var board = document.getElementById('Battleship').children[0].children;
	
	var row;
	var cell;
	for(var i = 0; i < 9; i++) { 
		row = board[i].children;
		for(var j = 0; j < 9; j++) {
			cell = row[j];
			cell.innerHTML = movesState[i][j];
		};
	};
};