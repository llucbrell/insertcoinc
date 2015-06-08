/******************************************************
         

                    INSERT COINC         
              
                  
               JavaScript Connect4 Game 
            

******************************************************/
/**
* insert coinc
* @file 'engine.js' Javascript connect4 game engine
* @author llucbrell/Lucas_C/hobbescode@gmail.com
* @license MIT -llucbrell 2015-
*/

/**
* @function newCoin
* creates a new coin object
* @parmam counter-- counter if it's pair-- newcoin returns red
*  
*/

function newCoin(counter){
	var _color;
  
      if(counter%2===0){
      _color='r';
      //at this moment we use only r for a better vision
      //{player: 'red'};
      }
      else{ 
      	_color='y';
       //use y in substituion for better console view
      	//{player: 'yellow'};
      }
     
      	counter+=counter;
        return  _color;      	
   
}

/**
* @function newTurn
* controls the game turn flow
* @parmam usercolumn the user input
*/

function newTurn(usercolumn){
  var _testgrid= nuevogrid.getGrid();
   if(_testgrid[usercolumn] && _testgrid[usercolumn].length>rows-1){

      alert('This column is full');
   }
   //control the the possible overflow of the grid
   else if(counter>maxima){
    deuce();
   }
   else{
    changeColor();
   var _coin=newCoin(counter);
   nuevogrid.setCoin(_coin, usercolumn);
   //testwinner
   testWinner();
   
   counter++;
   // here console prompt


  }
}

/**
* @function testWinner
* test if there is a winner
* 
*/

function testWinner(){
 var _testgrid= nuevogrid.getGrid();
 var _winner=false;
 var _color;

/**
* @function lineWin
* test the coins horizontally using for loops
*/
function lineWin(k){
 
 for(var m=0; m<_testgrid.length; m++){
 //console.log(_testgrid[k+1]);
  if(_testgrid[k] && _testgrid[k+1] && _testgrid[k+2] && _testgrid[k+3]){
    //if all coins are defined

    if(_testgrid[k][m] !== undefined && _testgrid[k][m] === _testgrid[k+1][m]&& _testgrid[k][m] ===_testgrid[k+2][m]&& _testgrid[k][m] === _testgrid[k+3][m]){
      _winner=true;
      _color=_testgrid[k][m];
     console.log('line');
     }
  }
 }


}


/**
* @function verticalWin
* test the coins vertically
*/

function verticalWin(k){

   for(var l=0; l<_testgrid[k].length; l++){
    if(_testgrid[k]){//if is not undefined
        if (_testgrid[k][l] === _testgrid[k][l+1] && _testgrid[k][l] === _testgrid[k][l+2] && _testgrid[k][l] === _testgrid[k][l+3]){
        _winner=true;
        _color=_testgrid[k][l];
        console.log('vertical');
        //test every coin
       }
    }
   }
}
 

/**
* @function diagonalWin
* test the coins diagonally
*/

function diagonalWin(k){

 for(var m=0; m<_testgrid.length; m++){
 //console.log(_testgrid[k+1]);
  //diagonal from left to wright
  if(_testgrid[k] && _testgrid[k+1] && _testgrid[k+2] && _testgrid[k+3]){
    //if all coins are defined

    if(_testgrid[k][m] !== undefined && _testgrid[k][m]=== _testgrid[k+1][m+1]&&  _testgrid[k][m]=== _testgrid[k+2][m+2]&&  _testgrid[k][m]===  _testgrid[k+3][m+3]){
      _winner=true;
      _color=_testgrid[k][m];
      console.log('diagonal');
     }
  }
 
  //diagonal from right to left


if(_testgrid[k] && _testgrid[k-1] && _testgrid[k-2] && _testgrid[k-3]){
    //if all columns are defined

    if(_testgrid[k][m] !== undefined && _testgrid[k][m]===_testgrid[k-1][m+1]&& _testgrid[k][m]=== _testgrid[k-2][m+2]&& _testgrid[k][m]===_testgrid[k-3][m+3]){
      _winner=true;
      _color=_testgrid[k][m];
      console.log('diagonal');
     }
  }

 }


}

 for(var k=0; k<_testgrid.length; k++){
  //console.log(_testgrid[0]);
 
verticalWin(k);
lineWin(k);
diagonalWin(k);
} 
      
  
if(_winner===false){ //continue playing

}
else{
  endGame(_color);
}

}

/**
* @function deuce
* when nobody wins
*/
function deuce(){
	alert('the game ended, nobody wins!!!');
	
}

/**
* @function endgame
* run the end of game actions as store, send or close data
* transfer
*/
function endGame(colorWinner){

  alert('Congratulations '+ colorWinner+ ' wins!!!!!');
  console.log('Congratulations '+ colorWinner+' wins!!!!!');
  document.getElementById('buttons').style.visibility='hidden';
   document.getElementById('buttons2').style.visibility='hidden';
  setData();
  showButtonSave();
  //document.getElementsByTagName('button').style.visibility='hidden';
 
}
/**
* @function showControls
* show the red or yellow buttons at the begginnig of the 
* game 
*/

function showControls(){
  document.getElementById('buttons2').style.visibility='hidden';
 document.getElementById('buttons').style.visibility='visible';
}

/**
* @function changeColor
* changes form red controls to yellow and viceversa 
*
*/
function changeColor(){

if(counter%2===0){

 document.getElementById('buttons').style.visibility='hidden';
 document.getElementById('buttons2').style.visibility='visible';
}
else{
 document.getElementById('buttons2').style.visibility='hidden';
 document.getElementById('buttons').style.visibility='visible';
}

}

/**
* @function newgame
* Start a new game
*
*/
function newGame(){
  nuevogrid= grid(rows, columns);
  changeColor();
  hideButtonSave();
  counter++;
   }

/**
* @function getBack
* calls for a correct undo capability
*
*/

function getBack(){
  nuevogrid.popOne();
  changeColor();
  counter--;

}

/**
* @function setData
* sends game data (historyStack) and (counter) -> this for a correct color restoring mapping
* to the server
*
*/


function setData(){
var date= Date();
  document.getElementById("gameDate").value = date; 
  document.getElementById("counterData").value = counter;
//alert(document.getElementById("counterData").value);
  document.getElementById("gameData").value = nuevogrid.getHistory();

}

/**
* @function showButtonSave and hideButtonSave
* change the style inline of the saveDiv
*
*/
function showButtonSave(){
  document.getElementById('saveDiv').style.visibility= 'visible';
}

function hideButtonSave(){
  document.getElementById('saveDiv').style.visibility= 'hidden';
}
