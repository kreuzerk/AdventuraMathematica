var currentfield = 1;
var i;
var diceresult;
var cx;
var cy;
var bananacounter = 0;

//boolean variables
var green_entered;
var red_entered;

function hallo(){

dicesound = new Audio();
dicesound.src = "../sounds/Diceroll.mp3";
dicesound.play();

//Call Methods at the beginning of each dice throw
if(green_entered){
removegreen();
}

if(red_entered){
removered();
}


diceresult = Math.floor(Math.random() * 6) + 1;

var filename;
//Draw the corresponding image to the diceresult
switch(diceresult){
case 1:
	filename = "One";
break;
case 2:
	filename = "Two";
break;
case 3:
	filename = "Three";
break;
case 4:
	filename = "Four";
break;
case 5:
	filename = "Five";
break;
case 6:
	filename = "Six";
break;
}

drawcube(filename);

i=currentfield;
move();
}

function move(){

  if(i<=(currentfield+diceresult)){
    window.setTimeout("move()",1000);

    cx = circleData[i-1].cx;
    cy = circleData[i-1].cy;

    //Delete the lion
    deletelion();


    //Draw the lion
    drawlion(cx,cy);

    i++;
  }
  else{
  currentfield = diceresult + currentfield;
  removedicedisplay();
  checkfield();
 }
}

function drawlion($cx, $cy){

svgContainer.append("svg:image")
      .attr("xlink:href", "./images/Lion.png").attr("id", "Lion")
      .attr("width", 100)
      .attr("height", 100).attr("x", $cx-50).attr("y",$cy-90);
}

function deletelion(){

var lion = document.getElementById("Lion");
lion.parentNode.removeChild(lion);
}

function drawcube($filename){

/* evtl. noch ein Rechteck dazu zeichnen
svgContainer.append("rect")
                            .attr("x", (width/2)-300)
                            .attr("y", (height/2)-100)
                            .attr("width", 500)
			    .attr("fill", "white")
                            .attr("height", 150);
*/

svgContainer.append("svg:image")
      .attr("xlink:href", "./images/" + $filename +".png").attr("id", "diceimage")
      .attr("width", 100)
      .attr("height", 100).attr("x", (width/2)-80).attr("y",(height/2)-50);

svgContainer.append("text").attr("id", "dicetextone")
      .attr("x", (width/2)-200)
      .attr("y", (height/2)+20)
      .text(currentfield + " + ")
      .attr("font-family", "Chalkboard")
      .attr("font-size", "50px")
      .attr("fill", "black");

svgContainer.append("text").attr("id", "diceresult")
      .attr("x", (width/2)+ 50)
      .attr("y", (height/2)+20)
      .text("= " + (currentfield+diceresult))
      .attr("font-family", "Chalkboard")
      .attr("font-size", "50px")
      .attr("fill", "black");

}

//Remove the dice display in the middle of the window
function removedicedisplay(){

var dicetextone = document.getElementById("dicetextone");
var diceimage = document.getElementById("diceimage");
var diceresult = document.getElementById("diceresult");

//remove the elements
dicetextone.parentNode.removeChild(dicetextone);
diceimage.parentNode.removeChild(diceimage);
diceresult.parentNode.removeChild(diceresult);
}

/*
function hide(){
$("svg").hide();
}

function show(){
$("svg").show();
}
*/


/*=================================================================================
Function that detects on which field the caracter is standing
===================================================================================*/

function checkfield(){

var currentcolor = circleData[currentfield-1].color;

//Say which method needs to be called. Corresponding to the color the caracter is standing on.
switch(currentcolor){
case "green":
green();
break;
case "red":
red();
break;
}
}


/*=================================================================================
Function for green fields
===================================================================================*/
function green(){

//Display banana
svgContainer.append("svg:image")
      .attr("xlink:href", "./images/bananas.png").attr("id", "plusbananaimage")
      .attr("width", 100)
      .attr("height", 100).attr("x", (width/2)-80).attr("y",(height/2)-50);

//Display the amount of Bananas
svgContainer.append("text").attr("id", "plusbananatext")
      .attr("x", (width/2)-200)
      .attr("y", (height/2)+20)
      .text(" + 3")
      .attr("font-family", "Chalkboard")
      .attr("font-size", "50px")
      .attr("fill", "black");

var bananaamount = document.getElementById("bananaamount");
bananacounter = bananacounter + 3;
bananaamount.textContent = "+ " + bananacounter;

green_entered = true;

}

//Remove the images from the display
function removegreen(){

var plusbananaimage = document.getElementById("plusbananaimage");
var plusbananatext = document.getElementById("plusbananatext");

//remove the elements
plusbananaimage.parentNode.removeChild(plusbananaimage);
plusbananatext.parentNode.removeChild(plusbananatext);

green_entered = false;
}


/*=================================================================================
Function for red fields
===================================================================================*/

//Display function
function red(){

//Display banana
svgContainer.append("svg:image")
      .attr("xlink:href", "./images/bananas.png").attr("id", "minusbananaimage")
      .attr("width", 100)
      .attr("height", 100).attr("x", (width/2)-80).attr("y",(height/2)-50);

//Display the amount of Bananas
svgContainer.append("text").attr("id", "minusbananatext")
      .attr("x", (width/2)-200)
      .attr("y", (height/2)+20)
      .text(" - 3")
      .attr("font-family", "Chalkboard")
      .attr("font-size", "50px")
      .attr("fill", "red");

var bananaamount = document.getElementById("bananaamount");
if(bananacounter > 0){
bananacounter = bananacounter - 3;
}

bananaamount.textContent = "+ " + bananacounter;

red_entered = true;
}

//Removefunction
function removered(){

var minusbananaimage = document.getElementById("minusbananaimage");
var minusbananatext = document.getElementById("minusbananatext");

//remove the elements
minusbananaimage.parentNode.removeChild(minusbananaimage);
minusbananatext.parentNode.removeChild(minusbananatext);

red_entered = false;
}


