var currentfield = 1;
var i;
var diceresult;
var cx;
var cy;
var bananacounter = 0;

//boolean variables
var entered;


function hallo(){

dicesound = new Audio();
dicesound.src = "../sounds/Diceroll.mp3";
dicesound.play();

//Call Methods at the beginning of each dice throw
if(entered){
remove();
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
      .attr("height", 100).attr("x", 290).attr("y",30);

svgContainer.append("text").attr("id", "dicetextone")
      .attr("x", 160)
      .attr("y", 100)
      .text(currentfield + " + ")
      .attr("font-family", "Chalkboard")
      .attr("font-size", "50px")
      .attr("fill", "black");

svgContainer.append("text").attr("id", "diceresult")
      .attr("x", 420)
      .attr("y", 100)
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



/*=================================================================================
Hide function at the beginning of the game
===================================================================================*/

function hide(){

$("#shoptable").hide();
$("#maingamesvg").hide();
$("#krokodiv").hide();
$("#formgame").hide();
$("#endresultgame").hide();
}

/*
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
case "blue":
  //Hide the main game
  $("#maingamesvg").hide();
  $("#shoptable").show();
createexercise();
break;
case "yellow":
  $("#maingamesvg").hide();
  $("#krokodiv").show();
break;
case "orange":
  $("#maingamesvg").hide();
  createformsgame();
  $("#formgame").show();
break;
case "purple":
  $("#maingamesvg").hide();
  createendresultgame();
  $("#endresultgame").show();
break;
}
}


/*=================================================================================
Function for green fields
===================================================================================*/
function green(){
drawimage(3, true);
}

/*=================================================================================
Remove the images from the display
===================================================================================*/
function remove(){

var plusbananaimage = document.getElementById("bananaimage");
var plusbananatext = document.getElementById("bananatext");

//remove the elements
plusbananaimage.parentNode.removeChild(plusbananaimage);
plusbananatext.parentNode.removeChild(plusbananatext);

entered = false;
}


/*=================================================================================
Function for red fields
===================================================================================*/

//Display function
function red(){
drawimage(3, false);
}

/*=================================================================================
Function for blue fields (Shopgame)
===================================================================================*/

function correctblue(){
hideblue();
drawimage(10, true);
alert("Enhorabuena que la respuesta es correcta");
}

function wrongblue(){
hideblue();
drawimage(5, false);
alert("Por desgracia, la respuesta es incorrecta");
}

function hideblue(){
$("#shoptable").hide();
$("#maingamesvg").show();
}

/*=================================================================================
Function for yellow fields (Krokogame)
===================================================================================*/

function checkkrokoanswers($number_correct){

switch($number_correct){

case 0:
  drawimage(10, false);
break;
case 1:
  drawimage(5, true);
break;
case 2:
  drawimage(10, true);
break;
case 3:
  drawimage(15, true);
break;
}

hideyellow();

}

function hideyellow(){
$("#krokodiv").hide();
$("#maingamesvg").show();
}

/*=================================================================================
Function for orange fields
===================================================================================*/

function checkorangefields($number_correct){

switch($number_correct){

case 0:
  drawimage(10, false);
break;
case 1:
  drawimage(5, true);
break;
case 2:
  drawimage(10, true);
break;
case 3:
  drawimage(15, true);
break;
}

hideorange();

}

function hideorange(){
$("#formgame").hide();
$("#maingamesvg").show();
}

/*=================================================================================
Function for purple fields
===================================================================================*/

function checkpurplefields($number_correct){

switch($number_correct){

case 0:
case 1:
case 2:
  drawimage(10, false);
break;
case 3:
  drawimage(15, true);
break;
}

hidepurple();

}

function hidepurple(){
$("#endresultgame").hide();
$("#maingamesvg").show();
}

/*=================================================================================
Function for drawing an image
===================================================================================*/
function drawimage($amount, $positive){

//Display banana
svgContainer.append("svg:image")
      .attr("xlink:href", "./images/bananas.png").attr("id", "bananaimage")
      .attr("width", 100)
      .attr("height", 100).attr("x", 290).attr("y",30);


if($positive){

//Plus
svgContainer.append("text").attr("id", "bananatext")
      .attr("x", 160)
      .attr("y", 100)
      .text(" + " + $amount)
      .attr("font-family", "Chalkboard")
      .attr("font-size", "50px")
      .attr("fill", "black");

var bananaamount = document.getElementById("bananaamount");
bananacounter = bananacounter + $amount;
bananaamount.textContent = "+ " + bananacounter;
}
else{

//Minus
svgContainer.append("text").attr("id", "bananatext")
      .attr("x", 160)
      .attr("y", 100)
      .text(" - " + $amount)
      .attr("font-family", "Chalkboard")
      .attr("font-size", "50px")
      .attr("fill", "red");

var bananaamount = document.getElementById("bananaamount");
if(bananacounter > 0){
bananacounter = bananacounter - $amount;
	}
}

bananaamount.textContent = "+ " + bananacounter;
entered = true;
}





