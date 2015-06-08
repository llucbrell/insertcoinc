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
    var initInterval=setInterval(redraw, 1000 / fps);
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
  lastArmPos=x+58 -amountArm;
  context.drawImage(images["mouth"], x+80 ,y-10);
  //draw the grid
  drawColumn(200,col0PosY, 12, 0);
  drawColumn(240,col1PosY, 13, 1);
  drawColumn(280,col2PosY, 13, 2);
  drawColumn(320,col3PosY, 14, 3);
  drawColumn(360,col4PosY, 14, 4);
  drawColumn(400,col5PosY, 15, 5);
  drawColumn(440,col6PosY, 14, 6);
  //draw the rest of images
  context.drawImage(images["eyes"], x+56 ,y);
  context.drawImage(images["rarm"], x+56, y+20 - amountArm);
  lastRArmPos=y+20 - amountArm;
  context.drawImage(images["eye"], x+50-amount, y-30 -amount);
  lastEyePosX=x+50-amount;
  lastEyePosY=y-30 -amount;

  

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
     drawOne(x, y, radius, _color, 'black');
     }

}

/**
* @function drawOne 
* controls the circle drawings over the character
*/

function drawOne(x,y, radius, color, stroke){

      //var radius = 15;
      context.beginPath();
      context.arc(x, y, radius, 0, 2 * Math.PI, false);
      context.fillStyle = color;
      context.fill();
      context.lineWidth = 3;
      context.strokeStyle = stroke;
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

/**
* @function animateCoin
* stops the normal animation and shoot the coinAnimation
*
*/
function insertCoin(column){
  var imagesCoin={};
  stopGame();
  

  loadImage('monsterbody2');
  loadImage('eye');
  loadImage('arm');
  loadImage('mouth');
  loadImage('eyes');
  loadImage('rarm');

//animation images
  
  loadImage('espi3');
  loadImage('riman');
  loadImage('yiman');
  

function loadImage(name) {

  imagesCoin[name] = new Image();
  imagesCoin[name].onload = function() { 
      resourceLoaded();
  };
  imagesCoin[name].src = "./imagenes/" + name + ".png";
}



var totalResources = 8;
var numResourcesLoaded = 0;
var fps = 30;

function resourceLoaded() {

  numResourcesLoaded += 1;
  if(numResourcesLoaded === totalResources) {
    setInterval(redrawCoin, 1000 / fps);
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



var incrementIman = 1;
var imanDir = -1;
var amountIman=0;
var imanInterval = setInterval(updateIman, 100 / fps);
var maxIman=100;



function redrawCoin() {


//position of the image on the canvas 
  var x = gridX;
  var y = gridY;

  backgroundCanvas.width = backgroundCanvas.width; // clears the canvas 
                      
  context.drawImage(imagesCoin["monsterbody2"], x ,y);
  context.drawImage(imagesCoin["arm"], lastArmPos ,y);
  context.drawImage(imagesCoin["mouth"], x+80 ,y-10);
  //draw the grid 
  
  drawColumn(200,col0PosY, 12, 0);
  drawColumn(240,col1PosY, 13, 1);
  drawColumn(280,col2PosY, 13, 2);
  drawColumn(320,col3PosY, 14, 3);
  drawColumn(360,col4PosY, 14, 4);
  drawColumn(400,col5PosY, 15, 5);
  drawColumn(440,col6PosY, 14, 6);
  //draw the rest of images
  context.drawImage(imagesCoin["eyes"], x+56 ,y);
  context.drawImage(imagesCoin["rarm"], x+56, lastRArmPos);
  context.drawImage(imagesCoin["eye"], lastEyePosX, lastEyePosY);

//if it red or yellow the coin

 if(counter%2===0){
context.drawImage(imagesCoin["riman"], x-100+amountIman, y+320);
 
 }
 else{
context.drawImage(imagesCoin["yiman"], x-100+amountIman, y+320);
 
}

//alterate img.width and height
context.drawImage(imagesCoin["espi3"], x-10-amountEspi, y+325+ amountEspi  ,imagesCoin["espi3"].width - amountEspi, imagesCoin["espi3"].height -amountEspi);





}


function updateIman() { 


  if (imanDir === 1) {  
    amountIman -= incrementIman;
    if (amountIman < -maxIman) {
      imanDir = -1;
       //window.clearInterval(imanInterval);
       stopGame();
       //we must to call the newTurn function of the engine
       newTurn(column);
       //rstart the game
       loadGame();
    }
  } 
  else {  
    amountIman += incrementIman;
    if(amountIman > maxIman) {
      imanDir = 1;

    }
  }
}

var incrementEspi = 2;
var imanDir = -1;
var amountEspi=0;
var espiInterval = setInterval(updateEspiral, 100 / fps);
var maxEspi=80;


function updateEspiral(){
   if (imanDir === -1) {  
    amountEspi -= incrementEspi;
    if(amountIman > maxIman){
      amountEspi += incrementEspi;
    }
  } 
  else {  
    amountEspi += incrementEspi;
     if(amountEspi > maxEspi) {
     amountEspi -= incrementEspi;

    
  }
    }
   
}



function drawColumn(x, y, radius, columnNumber){
  var _color;
  for(var i=0; i<6; i++, y-=36){
    _color=testPosition(columnNumber, i);
     drawOne(x, y, radius, _color);
     }

}



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



function stopGame(){
 var interval_id = window.setInterval("", 9999); // Get a reference to the last
                                                // interval +1
for (var i = 1; i < interval_id; i++){ window.clearInterval(i);
}

}



