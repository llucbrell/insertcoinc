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
var _historyStack=[];

return{
   getGrid: function(){ return _grid;}   
,  setCoin: function (coin, columnNumber){ setCoin(coin, columnNumber);}
,  popOne: function(){ popOne();}
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
    _historyStack.push(columns);
  	_grid[columns].push(coin);

  }



function popOne(){
  var _last= _historyStack.pop();
 console.log(_last);
  _grid[_last].pop();

}




}

