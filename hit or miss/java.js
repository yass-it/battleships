var view={
showMessage:function(msg){
    var message=document.getElementById('message');
    message.innerHTML = msg;
},

showHit:function(location){
    var cell=document.getElementById(location);
    cell.setAttribute('class','hit');
},

showMiss:function(location){
    var cell=document.getElementById(location);
    cell.setAttribute('class','miss');
}
}

var model = {
boardSize:7,
numShips:3,
shipsSunk:3,
ships:[{location:[00,01,02], hits:['','','']},
{location:[10,11,12], hits:['','','']},
{location:[20,21,22], hits:['','','']}],

fire:function(guess){
    for(var i=0; i<this.numShips; i++){
        var ship = this.ships[i];
        var index=ship.location.indexOf(guess);
        if(index>=0){
            ship.hits[index]='hit';
            view.showHit(guess);
        }
    }
}
};

model.fire(10);
model.fire(11);
model.fire(12);
model.fire(20);
model.fire(21);    
model.fire(22);
model.fire(00);
model.fire(01);
model.fire(02);