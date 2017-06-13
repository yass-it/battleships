
//part 2 ==>>>>ship state array of arrays
var nextPlayer1 = true;
var shipState = [
	[null, null, null,null,null,null,null,null,null],
	[null, null, null,null,1,1,1,1,null],
	[1, null, null,null,null,null,null,null,null],
	[1, null, null,null,null,null,null,null,null],
	[null, null, null,1,null,null,null,null,null],
	[null, null, null,1,null,null,null,null,null],
	[null, null, null,1,null,null,null,null,null],
	[null, null, null,null,null,null,null,null,null],
	[null, null, null,null,null,null,null,null,null]
	];//	 1 boat4; 2 boat3 and  boat 2
//from nas
	/*function putShip(){
		shipState[0][2]="x";
		shipState[1][2]="x";
		shipState[2][2]="x";
		}*/


	function hitOrmiss(box){
		var row = box.parentElement.getAttribute('row');
	    var cell = box.getAttribute('column');
		if(shipState[row][cell] == null){
			
		       shipState[row][cell] = 'missed'; // its mean missed
		// we have to use populate in the DOM
		} 

		if(shipState[row][cell] == 1){
			   shipState[row][cell] == 'hited'; // its mean hited
		// we have to use populate in the DOM

		}
		
		console.log(shipState);
		populateHitandMiss();

				} else {
		alert('grow up. you can\'t do that')
		};
	};

	function populateHitandMiss() {
	var board = document.getElementById('Battleship').children[0].children;
	
	var row;
	var cell;
	for(var i = 0; i < 9; i++) { 
		row = board[i].children;
		for(var j = 0; j < 9; j++) {
			cell = row[j];
			cell.innerHTML = shipState[i][j];
		};
	};
};





//--------------------------------------
/*var nextPlayer = true;
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