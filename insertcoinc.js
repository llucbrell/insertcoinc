/******************************************************
         

                    INSERT COINC         
              
                  
               JavaScript Connect4 Game 
            

******************************************************/
/**
* insert coinc
* @file 'grid.js' object-factory for the grid
* @author llucbrell/Lucas_C/hobbescode@gmail.com
* @license MIT -llucbrell 2015-
*/



/**
* @function Grid
* grid objects factory
* @method getGrid -- returns the grid object at this moment
* @method setCoin -- sets a new coin into the grid
*/


 function grid(gridRowNumber, gridColumnNumber){
//for building different sizes
var _numberRows= gridRowNumber;
var _numberColumns= gridColumnNumber;
var _grid= newGrid(_numberRows, _numberColumns);

return{
   getCoins: function(){ return _arraycoins;}
,  getGrid: function(){ return _grid;}   
,  setCoin: function (coin, columnNumber, rowNumber){ setCoin(coin, columnNumber, rowNumber);}
};


/**
* @function newGrid
* creates a grid matrix
* @parmam _numberRows -- the number of rows of the matix
* @parma _numberComumns -- the number of columns of the matrix 
*/

function newGrid(_numberRows, _numberColumns){
	 var _matriz =[];

	 for (var i=0; i<_numberColumns; i++){
	 	_matriz[i]=[];
	 }
  	
   return _matriz;

}
/**
* @function setCoin
* set a coin into the grid. also test if there is too much coins
* @parmam coin-- object coin {player: 'color'} only 'r' for console
* @parma column -- column where player insert coin
*/

  function setCoin(coin, columns){
  
  	_grid[columns].push(coin);

  }
}

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
   //control the the possible overflow of the grid
   if(counter>maxima){
    deuce();
   }
   else{
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

    if(_testgrid[k][m] && _testgrid[k+1][m]&& _testgrid[k+2][m]&& _testgrid[k+3][m]){
      _winner=true;
      _color=_testgrid[k][m];
     //console.log('line');
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
        //console.log('vertical');
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

    if(_testgrid[k][m] && _testgrid[k+1][m+1]&& _testgrid[k+2][m+2]&& _testgrid[k+3][m+3]){
      _winner=true;
      _color=_testgrid[k][m];
      //console.log('diagonal');
     }
  }
 
  //diagonal from right to left


if(_testgrid[k] && _testgrid[k-1] && _testgrid[k-2] && _testgrid[k-3]){
    //if all columns are defined

    if(_testgrid[k][m] && _testgrid[k-1][m-1]&& _testgrid[k-2][m-2]&& _testgrid[k-3][m-3]){
      _winner=true;
      _color=_testgrid[k][m];
      //console.log('diagonal');
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
* @function diuce
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

  console.log('Congratulations '+ colorWinner+' wins!!!!!');
 
}


var counter=0;
var columns=7;
var rows=6;
var maxima= columns*rows;

var nuevogrid= grid(6, 7);


//EASY TESTS LINE, HORIZONTAL AND DIAGONAL MATCHS
/* 
//HORIZONTAL
newTurn(2);
newTurn(2);
newTurn(3);
newTurn(1);
newTurn(4);*/

//DIAGONAL
newTurn(0);//r
newTurn(1);//y
newTurn(1);//r
newTurn(2);//y
newTurn(6);//r
newTurn(2);//y
newTurn(2);//r
newTurn(3);//y
newTurn(3);//r
newTurn(3);//y
newTurn(3);//r

//VERTICAL
/*
newTurn(0);
newTurn(5);
newTurn(0);

newTurn(1);
newTurn(2);
newTurn(1);
newTurn(1);
newTurn(4);
newTurn(0);
newTurn(2);
newTurn(0);
newTurn(2);


newTurn(1);
newTurn(1);
newTurn(4);
console.log(nuevogrid.getGrid());
	
*/
	


