/******************************************************
         

                    INSERT COINC         
              
                  
               JavaScript Connect4 Game 
            

******************************************************/
/**
* insert coinc
* @file 'views.js' Javascript simple Interface
* @author llucbrell/Lucas_C/hobbescode@gmail.com
* @license MIT -llucbrell 2015-
*/


/**
* @function loadGame
* start the visual parts of the game
*
*/

function loadGame(){
  var images={};
  loadImage('monsterbody2');
  loadImage('eye');
  loadImage('arm');
  loadImage('mouth');
  loadImage('eyes');
  loadImage('rarm');
  
/**
* @function loadImage
* loads the images
*/

function loadImage(name) {

  images[name] = new Image();
  images[name].onload = function() { 
      resourceLoaded();
  }
  images[name].src = "./imagenes/" + name + ".png";
}


/**
* @function resourceLoaded
* checks if the resources ar loaded
*/

var totalResources = 6;
var numResourcesLoaded = 0;
var fps = 30;

function resourceLoaded() {

  numResourcesLoaded += 1;
  if(numResourcesLoaded === totalResources) {
    setInterval(redraw, 1000 / fps);
  }
}


var context = document.getElementById('backgroundCanvas').getContext("2d");

//variable for rendering in medium screen sizes

var gridX = 10;
var gridY = 20;
var col0PosY=495;
var col1PosY=498;
var col2PosY=501;
var col3PosY=501;
var col4PosY=499;
var col5PosY=497;
var col6PosY=494;

var increment = 0.1;
var eyeDir = -1;
var amount= 0;
var max = 12;
var eyeInterval = setInterval(updateEye, 1000 / fps);


var incrementArm = 0.1;
var armDir = 1;
var amountArm=0;
var armInterval = setInterval(updateArm, 1000 / fps);
var maxArm=4;

/**
* @function redraw
* redraw the canvas 
*/
  
function redraw() {


//position of the image on the canvas 
  var x = gridX;
  var y = gridY;

  backgroundCanvas.width = backgroundCanvas.width; // clears the canvas 
                      
  context.drawImage(images["monsterbody2"], x ,y);
  context.drawImage(images["arm"], x+58 -amountArm ,y);
  context.drawImage(images["mouth"], x+80 ,y-10);
  //draw the grid
  drawColumn(200,col0PosY, 12, 0);
  drawColumn(240,col0PosY, 13, 1);
  drawColumn(280,col0PosY, 13, 2);
  drawColumn(320,col0PosY, 14, 3);
  drawColumn(360,col0PosY, 14, 4);
  drawColumn(400,col0PosY, 15, 5);
  drawColumn(440,col0PosY, 14, 6);
  //draw the rest of images
  context.drawImage(images["eyes"], x+56 ,y);
  context.drawImage(images["rarm"], x+56, y+20 - amountArm);
  context.drawImage(images["eye"], x+50-amount, y-30 -amount);

}


/**
* @function updateEye
* make changes for the movement of the eye
*
*/

function updateEye() { 
                        
  if (eyeDir === 1) {  
    amount -= increment;
    if (amount < -max) {
      eyeDir = -1;
    }
  } 
  else {  
    amount += increment;
    if(amount > max) {
      eyeDir = 1;
    }
  }
}


/**
* @function updateArm
* make changes for the movement or the arms
*
*/

function updateArm() { 
                        
  if (armDir === 1) {  
    amountArm -= incrementArm;
    if (amountArm < -maxArm) {
      armDir = -1;
    }
  } 
  else {  
    amountArm += incrementArm;
    if(amountArm > maxArm) {
      armDir = 1;
    }
  }
}


/**
* @function drawColumn
* draw the columns every frame using a for loop
*/

function drawColumn(x, y, radius, columnNumber){
  var _color;
  for(var i=0; i<6; i++, y-=36){
    _color=testPosition(columnNumber, i);
     drawOne(x, y, radius, _color);
     }

}

/**
* @function drawOne 
* controls the circle drawings over the character
*/

function drawOne(x,y, radius, color){

      //var radius = 15;
      context.beginPath();
      context.arc(x, y, radius, 0, 2 * Math.PI, false);
      context.fillStyle = color;
      context.fill();
      context.lineWidth = 3;
      context.strokeStyle = 'black';
      context.stroke();


}

/**
* @function testPosition
* look at one position of the grid array
* @return color of the array if it's not undefined
*/

function testPosition(columnNumber, i){
  var _testGrid= nuevogrid.getGrid();
 if (_testGrid[columnNumber] && _testGrid[columnNumber][i]){

    var _coin= _testGrid[columnNumber][i];
   
   if(_coin==='r'){return 'red';}
   if(_coin==='y'){return 'yellow';}


   // return _coin.player;
 }
  else{
    return 'white';
  }


}


}


