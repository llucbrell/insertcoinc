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
      console.log(counter);
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

   
   counter++;
   // here console prompt


  }
}
/**
* @function diuce
* when nobody wins
*/
function deuce(){
	alert('the game ended, nobody wins!!!');
	//endgame();
}


var counter=0;
var columns=7;
var rows=6;
var maxima= columns*rows;

var nuevogrid= grid(6, 7);



newTurn(1);
newTurn(2);
newTurn(1);
newTurn(1);
newTurn(4);
console.log(nuevogrid.getGrid());
	

	


