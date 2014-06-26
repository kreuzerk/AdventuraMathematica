var currentfield = 1;
var movevalue;
var diceresult;
var cx;
var cy;
var bananacounter = 0;
var moneycounter = 0;
var filename;
var goldentered = false;
var blackentered = false;
var endofround = false;
var round = 1;
var dicethrown = false;
var deletearrow = true;

var width = 1200;
var height = 820;

var circleData;

//Circle Data Set
var level1 = [
  { "cx": 50, "cy": 770, "radius": 30, "color" : "snow", "fontcolor" : "black", "number" : 1 },
  { "cx": 120, "cy": 700, "radius": 30, "color" : "lavender", "fontcolor" : "white", "number" : 2}, 
  { "cx": 190, "cy": 700, "radius": 30, "color" : "lavender", "fontcolor" : "white", "number" : 3},
  { "cx": 260, "cy": 700, "radius": 30, "color" : "lavender", "fontcolor" : "white", "number" : 4},
  { "cx": 330, "cy": 720, "radius": 30, "color" : "lavender", "fontcolor" : "white", "number" : 5},
  { "cx": 400, "cy": 720, "radius": 30, "color" : "lavender", "fontcolor" : "white", "number" : 6},
  { "cx": 470, "cy": 720, "radius": 30, "color" : "lavender", "fontcolor" : "black", "number" : 7},
  { "cx": 540, "cy": 720, "radius": 30, "color" : "lavender", "fontcolor" : "black", "number" : 8},
  { "cx": 610, "cy": 720, "radius": 30, "color" : "lavender", "fontcolor" : "white", "number" : 9},
  { "cx": 680, "cy": 720, "radius": 30, "color" : "lavender", "fontcolor" : "white", "number" :10},
  { "cx": 750, "cy": 700, "radius": 30, "color" : "purple", "fontcolor" : "black", "number" : 11},
  { "cx": 820, "cy": 680, "radius": 30, "color" : "greenyellow", "fontcolor" : "black", "number" : 12},
  { "cx": 890, "cy": 660, "radius": 30, "color" : "greenyellow", "fontcolor" : "white", "number" : 13},
  { "cx": 880, "cy": 590, "radius": 30, "color" : "lavender", "fontcolor" : "black", "number" : 14},
  { "cx": 810, "cy": 580, "radius": 30, "color" : "greenyellow", "fontcolor" : "white", "number" : 15},
  { "cx": 740, "cy": 580, "radius": 30, "color" : "mediumaquamarine", "fontcolor" : "black", "number" : 16},
  { "cx": 670, "cy": 580, "radius": 30, "color" : "green", "fontcolor" : "black", "number" : 17},
  { "cx": 600, "cy": 580, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 18},
  { "cx": 530, "cy": 580, "radius": 30, "color" : "mediumaquamarine", "fontcolor" : "black", "number" : 19},
  { "cx": 460, "cy": 580, "radius": 30, "color" : "silver", "fontcolor" : "black", "number" : 20},
  { "cx": 390, "cy": 580, "radius": 30, "color" : "mediumaquamarine", "fontcolor" : "black", "number" : 21},
  { "cx": 320, "cy": 580, "radius": 30, "color" : "skyblue", "fontcolor" : "black", "number" : 22},
  { "cx": 320, "cy": 510, "radius": 30, "color" : "blue", "fontcolor" : "white", "number" : 23},
  { "cx": 390, "cy": 500, "radius": 30, "color" : "yellow", "fontcolor" : "black", "number" : 24},
  { "cx": 460, "cy": 500, "radius": 30, "color" : "green", "fontcolor" : "white", "number" : 25},
  { "cx": 520, "cy": 500, "radius": 30, "color" : "mediumaquamarine", "fontcolor" : "black", "number" : 26},
  { "cx": 590, "cy": 500, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 27},
  { "cx": 660, "cy": 500, "radius": 30, "color" : "orange", "fontcolor" : "black", "number" : 28},
  { "cx": 730, "cy": 500, "radius": 30, "color" : "purple", "fontcolor" : "black", "number" : 29},
  { "cx": 800, "cy": 500, "radius": 30, "color" : "yellow", "fontcolor" : "black", "number" : 30},
  { "cx": 870, "cy": 500, "radius": 30, "color" : "blue", "fontcolor" : "white", "number" : 31},
  { "cx": 950, "cy": 480, "radius": 30, "color" : "mediumaquamarine", "fontcolor" : "black", "number" : 32},
  { "cx": 1020, "cy": 460, "radius": 30, "color" : "lavender", "fontcolor" : "black", "number" : 33},
  { "cx": 1070, "cy": 390, "radius": 30, "color" : "lavender", "fontcolor" : "black", "number" : 34},
  { "cx": 1090, "cy": 320, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 35},
  { "cx": 1070, "cy": 250, "radius": 30, "color" : "gold", "fontcolor" : "black", "number" : 36},
  { "cx": 1050, "cy": 180, "radius": 30, "color" : "orange", "fontcolor" : "black", "number" : 37},
  { "cx": 980, "cy": 140, "radius": 30, "color" : "skyblue", "fontcolor" : "black", "number" : 38},
  { "cx": 920, "cy": 110, "radius": 30, "color" : "mediumaquamarine", "fontcolor" : "black", "number" : 39},
  { "cx": 850, "cy": 100, "radius": 30, "color" : "midnightblue", "fontcolor" : "white", "number" : 40},
  { "cx": 780, "cy": 100, "radius": 30, "color" : "yellow", "fontcolor" : "black", "number" : 41},
  { "cx": 550, "cy": 170, "radius": 30, "color" : "orange", "fontcolor" : "black", "number" : 42},
  { "cx": 620, "cy": 170, "radius": 30, "color" : "green", "fontcolor" : "white", "number" : 43},
  { "cx": 690, "cy": 170, "radius": 30, "color" : "blue", "fontcolor" : "black", "number" : 44},
  { "cx": 760, "cy": 170, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 45},
  { "cx": 830, "cy": 180, "radius": 30, "color" : "midnightblue", "fontcolor" : "white", "number" : 46},
  { "cx": 900, "cy": 190, "radius": 30, "color" : "orange", "fontcolor" : "white", "number" : 47},
  { "cx": 970, "cy": 220, "radius": 30, "color" : "green", "fontcolor" : "white", "number" : 48},
  { "cx": 970, "cy": 290, "radius": 30, "color" : "midnightblue", "fontcolor" : "black", "number" : 49},
  { "cx": 920, "cy": 340, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 50},
  { "cx": 850, "cy": 340, "radius": 30, "color" : "blue", "fontcolor" : "black", "number" : 51},
  { "cx": 780, "cy": 330, "radius": 30, "color" : "orange", "fontcolor" : "black", "number" : 52},
  { "cx": 710, "cy": 330, "radius": 30, "color" : "khaki", "fontcolor" : "black", "number" : 53},
  { "cx": 640, "cy": 330, "radius": 30, "color" : "yellow", "fontcolor" : "black", "number" : 54},
  { "cx": 570, "cy": 330, "radius": 30, "color" : "red", "fontcolor" : "black", "number" : 55},
  { "cx": 500, "cy": 330, "radius": 30, "color" : "blue", "fontcolor" : "white", "number" : 56},
  { "cx": 430, "cy": 330, "radius": 30, "color" : "skyblue", "fontcolor" : "white", "number" : 57},
  { "cx": 360, "cy": 330, "radius": 30, "color" : "midnightblue", "fontcolor" : "white", "number" : 58},
  { "cx": 290, "cy": 350, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 59},
  { "cx": 220, "cy": 420, "radius": 30, "color" : "green", "fontcolor" : "white", "number" : 60},
  { "cx": 170, "cy": 490, "radius": 30, "color" : "pink", "fontcolor" : "black", "number" : 61},
  { "cx": 130, "cy": 560, "radius": 30, "color" : "blue", "fontcolor" : "white", "number" : 62},
  { "cx": 140, "cy": 630, "radius": 30, "color" : "snow", "fontcolor" : "black", "number" : 63}];

//Datas for the second level
var level2 = [
  { "cx": 50, "cy": 770, "radius": 30, "color" : "snow", "fontcolor" : "black", "number" : 1 },
  { "cx": 70, "cy": 660, "radius": 30, "color" : "green", "fontcolor" : "black", "number" : 2}, 
  { "cx": 70, "cy": 590, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 3},
  { "cx": 70, "cy": 520, "radius": 30, "color" : "blue", "fontcolor" : "white", "number" : 4},
  { "cx": 70, "cy": 450, "radius": 30, "color" : "dodgerblue", "fontcolor" : "white", "number" : 5},
  { "cx": 70, "cy": 380, "radius": 30, "color" : "orange", "fontcolor" : "black", "number" : 6},
  { "cx": 70, "cy": 310, "radius": 30, "color" : "yellow", "fontcolor" : "black", "number" : 7},
  { "cx": 70, "cy": 240, "radius": 30, "color" : "skyblue", "fontcolor" : "black", "number" : 8},
  { "cx": 140, "cy": 210, "radius": 30, "color" : "blue", "fontcolor" : "white", "number" : 9},
  { "cx": 210, "cy": 210, "radius": 30, "color" : "red", "fontcolor" : "white", "number" :10},
  { "cx": 230, "cy": 280, "radius": 30, "color" : "midnightblue", "fontcolor" : "white", "number" : 11},
  { "cx": 240, "cy": 350, "radius": 30, "color" : "silver", "fontcolor" : "black", "number" : 12},
  { "cx": 240, "cy": 420, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 13},
  { "cx": 240, "cy": 490, "radius": 30, "color" : "silver", "fontcolor" : "black", "number" : 14},
  { "cx": 240, "cy": 570, "radius": 30, "color" : "blue", "fontcolor" : "white", "number" : 15},
  { "cx": 240, "cy": 640, "radius": 30, "color" : "orange", "fontcolor" : "black", "number" : 16},
  { "cx": 310, "cy": 670, "radius": 30, "color" : "skyblue", "fontcolor" : "black", "number" : 17},
  { "cx": 380, "cy": 670, "radius": 30, "color" : "blue", "fontcolor" : "white", "number" : 18},
  { "cx": 450, "cy": 670, "radius": 30, "color" : "green", "fontcolor" : "black", "number" : 19},
  { "cx": 520, "cy": 670, "radius": 30, "color" : "mediumaquamarine", "fontcolor" : "black", "number" : 20},
  { "cx": 590, "cy": 670, "radius": 30, "color" : "green", "fontcolor" : "black", "number" : 21},
  { "cx": 660, "cy": 670, "radius": 30, "color" : "mediumaquamarine", "fontcolor" : "black", "number" : 22},
  { "cx": 730, "cy": 670, "radius": 30, "color" : "green", "fontcolor" : "black", "number" : 23},
  { "cx": 800, "cy": 670, "radius": 30, "color" : "mediumaquamarine", "fontcolor" : "white", "number" : 24},
  { "cx": 870, "cy": 670, "radius": 30, "color" : "mediumaquamarine", "fontcolor" : "black", "number" : 25},
  { "cx": 950, "cy": 670, "radius": 30, "color" : "green", "fontcolor" : "white", "number" : 26},
  { "cx": 950, "cy": 600, "radius": 30, "color" : "mediumaquamarine", "fontcolor" : "black", "number" : 27},
  { "cx": 950, "cy": 530, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 28},
  { "cx": 880, "cy": 530, "radius": 30, "color" : "orange", "fontcolor" : "black", "number" : 29},
  { "cx": 810, "cy": 500, "radius": 30, "color" : "purple", "fontcolor" : "black", "number" : 30},
  { "cx": 860, "cy": 430, "radius": 30, "color" : "yellow", "fontcolor" : "black", "number" : 31},
  { "cx": 930, "cy": 400, "radius": 30, "color" : "blue", "fontcolor" : "white", "number" : 32},
  { "cx": 1000, "cy": 350, "radius": 30, "color" : "mediumaquamarine", "fontcolor" : "black", "number" : 33},
  { "cx": 1070, "cy": 300, "radius": 30, "color" : "lavender", "fontcolor" : "black", "number" : 34},
  { "cx": 1070, "cy": 230, "radius": 30, "color" : "lavender", "fontcolor" : "black", "number" : 35},
  { "cx": 1000, "cy": 200, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 36},
  { "cx": 930, "cy": 180, "radius": 30, "color" : "gold", "fontcolor" : "black", "number" : 37},
  { "cx": 860, "cy": 180, "radius": 30, "color" : "orange", "fontcolor" : "black", "number" : 38},
  { "cx": 790, "cy": 160, "radius": 30, "color" : "skyblue", "fontcolor" : "black", "number" : 39},
  { "cx": 720, "cy": 180, "radius": 30, "color" : "mediumaquamarine", "fontcolor" : "black", "number" : 40},
  { "cx": 650, "cy": 220, "radius": 30, "color" : "midnightblue", "fontcolor" : "white", "number" : 41},
  { "cx": 580, "cy": 240, "radius": 30, "color" : "yellow", "fontcolor" : "black", "number" : 42},
  { "cx": 510, "cy": 260, "radius": 30, "color" : "orange", "fontcolor" : "black", "number" : 43},
  { "cx": 440, "cy": 280, "radius": 30, "color" : "green", "fontcolor" : "white", "number" : 44},
  { "cx": 370, "cy": 270, "radius": 30, "color" : "blue", "fontcolor" : "black", "number" : 45},
  { "cx": 370, "cy": 200, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 46},
  { "cx": 440, "cy": 150, "radius": 30, "color" : "midnightblue", "fontcolor" : "white", "number" : 47},
  { "cx": 530, "cy": 150, "radius": 30, "color" : "orange", "fontcolor" : "white", "number" : 48},
  { "cx": 600, "cy": 150, "radius": 30, "color" : "green", "fontcolor" : "white", "number" : 49},
  { "cx": 670, "cy": 120, "radius": 30, "color" : "midnightblue", "fontcolor" : "black", "number" : 50},
  { "cx": 720, "cy": 50, "radius": 30, "color" : "snow", "fontcolor" : "white", "number" : 51},];


/*====================================================================================================
/*====================================================================================================
Code for drawing the gameboard*/

function drawgameboard(){

//Add circles to the svgContainer
var circles = svgContainer.selectAll("circle")
                           .data(circleData)
                           .enter()
                           .append("circle");

//Add the circle attributes
var circleAttributes = circles
                       .attr("cx", function (d) { return d.cx; })
                       .attr("cy", function (d) { return d.cy; })
                       .attr("r", function (d) { return d.radius; })
                       .style("fill", function (d) { return d.color; }).attr("stroke","black");

//Add the SVG Text Element to the svgContainer
var text = svgContainer.selectAll("text")
                        .data(circleData)
                        .enter()
                        .append("text");

//Add SVG Text Element Attributes
var textLabels = text
                 .attr("x", function(d) { return d.cx-5; })
                 .attr("y", function(d) { return d.cy+5; })
                 .text(function(d) { return d.number; })
                 .attr("font-family", "Chalkboard")
                 .attr("font-size", "20px")
                 .attr("fill", function(d) { return d.fontcolor; });

//Adding an image
svgContainer.append("svg:image")
      .attr("xlink:href", filename).attr("id", "Lion")	//Filename is specified in the mainscript
      .attr("width", 100)
      .attr("height", 100).attr("x", 0).attr("y",680);


//Adding the cube
svgContainer.append("svg:image")
      .attr("xlink:href", "./images/cube.png").attr("onclick","hallo()")
      .attr("width", 100)
      .attr("height", 100).attr("x", 20).attr("y",20);

//Adding the arrow that shows that you need to click on the dice
svgContainer.append("svg:image").attr("id", "click_arrow")
      .attr("xlink:href", "./images/arrow.png")
      .attr("width", 200)
      .attr("height", 200).attr("x", 150).attr("y",0);

//=============================================
//RIGHT BOTTOM
//=============================================


//Adding the bananaimage
svgContainer.append("svg:image")
      .attr("xlink:href", "./images/bananas.png").attr("onclick","hallo()")
      .attr("width", 80)
      .attr("height", 80).attr("x", width-130).attr("y",height-120);

//Adding the Bananatext
svgContainer.append("text").attr("id", "bananaamount")
      .attr("x", width-250)
      .attr("y", height-50)
      .text("0 x")
      .attr("font-family", "Chalkboard")
      .attr("font-size", "50px")
      .attr("fill", item_display_color);

//Adding the moneyimage
svgContainer.append("svg:image")
      .attr("xlink:href", "./images/money.png").attr("onclick","hallo()")
      .attr("width", 80)
      .attr("height", 80).attr("x", width-360).attr("y",height-120);

//Adding the moneytext
svgContainer.append("text").attr("id", "moneyamount")
      .attr("x", width-440)
      .attr("y", height-50)
      .text("0 x")
      .attr("font-family", "Chalkboard")
      .attr("font-size", "50px")
      .attr("fill", item_display_color);

/*
//=============================================
//Images on the map
//=============================================
svgContainer.append("svg:image")
      .attr("xlink:href", "./images/house.png")
      .attr("width", 80)
      .attr("height", 80).attr("x", 600).attr("y",420);

svgContainer.append("svg:image")
      .attr("xlink:href", "./images/Hippopotamus.png")
      .attr("width", 150)
      .attr("height", 150).attr("x", 190).attr("y",460);
*/
}


/*====================================================================================================
/*====================================================================================================*/

//boolean variables
var entered;

function setfilename($file){
 filename = $file;
}


function hallo(){

//Play the sound for the diceroll
sound_diceroll.play();

if(deletearrow){
var arrow = document.getElementById("click_arrow");
arrow.parentNode.removeChild(arrow);
deletearrow = false;
}

if(dicethrown == false){

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

//Change the level_operator
switch(level_operator){

case "+":
level_operator = "-";
break;
case "-":
level_operator = "+";
break;
case "*":
level_operator = "/";
break;
case "/":
level_operator = "*";
break;

}


drawcube(filename);

movevalue=currentfield;
move();
}//End if
}

function move(){

  dicethrown = true;

  if(movevalue<(currentfield+diceresult) && goldentered == false && endofround == false && blackentered == false){
    window.setTimeout("move()",1000);
    movevalue++;

    cx = circleData[movevalue-1].cx;
    cy = circleData[movevalue-1].cy;

    //Delete the lion
    deletelion();


    //Draw the lion
    drawlion(cx,cy);

    if(circleData[movevalue-1].color == "gold"){
	goldentered = true;
    }

    if(circleData[movevalue-1].color == "black"){
	blackentered = true;
    }

    if(circleData[movevalue-1].number >= circleData.length){
	endofround = true;
    }



  }
  else{
  
  //Needs to be the first ifStatement otherwise it will not work
  if(!goldentered && !endofround && !blackentered){
  currentfield = diceresult + currentfield;
  }

  if(blackentered){
  currentfield = movevalue;
  blackentered = false; //Because we are going to leave the gold field
  }
  

  if(endofround == true){
  currentfield = 1;
  endofround = false;
  }

  if(goldentered){
  currentfield = movevalue;
  goldentered = false; //Because we are going to leave the gold field
  }
  
  removedicedisplay();
  checkfield();
  dicethrown = false;
 }
}


function drawlion($cx, $cy){

//Play the move sound
sound_blop.play();

svgContainer.append("svg:image")
      .attr("xlink:href", filename).attr("id", "Lion")
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
      .attr("fill", item_display_color);

svgContainer.append("text").attr("id", "diceresult")
      .attr("x", 420)
      .attr("y", 100)
      .text("= " + (currentfield+diceresult))
      .attr("font-family", "Chalkboard")
      .attr("font-size", "50px")
      .attr("fill", item_display_color);

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

$("#shopdiv").hide();
$("#maingamesvg").hide();
$("#krokodiv").hide();
$("#formgame").hide();
$("#endresultgame").hide();
$("#whatisnextgame").hide();
$("#cheese").hide();
$("#tengame").hide();
$("#divisiongame").hide();
$("#bananadelivery").hide();
$("#slidergame").hide();
$("#wallgame").hide();
$("#endofround").hide();
$("#sourcediv").hide();
$("#circlegame").hide();
$("#multiplikationtablediv").hide();
$("#gridaddition").hide();
$("#sharinggame").hide();
$("#memorygame").hide();
$("#castlegame").hide();
$("#bossquiz").hide();
$("#tigerdiv").hide();
//$("#caracterselection").hide();

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

//Play the zip sound and pause the background music
sound_zip.play();
sound_backgroundmusic_level1.pause();

//Say which method needs to be called. Corresponding to the color the caracter is standing on.
switch(currentcolor){
case "green":
  green();
break;
case "red":
  red();
break;
case "blue":		//Blue = Shop Game
  //Hide the main game
  $("#maingamesvg").hide();
  sound_shopbackground.play();	//Play the background music for the shopgame
  $("#shopdiv").show("Clip");
createexercise();
break;
case "yellow":		//Yellow = Krokogame
  $("#maingamesvg").hide();
  sound_background_krokogame.play();
  $("#krokodiv").show();
break;
case "orange":		//Orange == formgame
  $("#maingamesvg").hide();
  sound_background1.play();
  createformsgame();
  $("#formgame").show();
break;
case "purple":		//Purple == Endresultgame
  $("#maingamesvg").hide();
  sound_background1.play();
  createendresultgame();
  $("#endresultgame").show();
break;
case "pink":		//Pink == whatisnextgame
$("#maingamesvg").hide();
nextsvg_drawexercise();
$("#whatisnextgame").show();
break;
case "lavender":	//Lavender == Cheesegame
$("#maingamesvg").hide();
initialisecheesegame();
$("#cheese").show();
break;
case "skyblue":		//Skyblue == Tengame
$("#maingamesvg").hide();
initialisetennumber();
$("#tengame").show();
break;
case "mediumaquamarine":	//Mediumaquamarine == Sharegame
$("#maingamesvg").hide();
initialisedivisiongame();
$("#divisiongame").show();
break;
case "gold":		//Gold - Dliver the bananas
$("#maingamesvg").hide();
initialise_delivery_screen();
$("#bananadelivery").show();
break;
case "khaki":	   	//Khaki - Slidergame
$("#maingamesvg").hide();
initialiseslidergame();
$("#slidergame").show();
break;
case "midnightblue":	//Midnightblue fields - Wallgame
$("#maingamesvg").hide();
initialisewallgame();
$("#wallgame").show();
break;
case "snow":
$("#maingamesvg").hide();
document.getElementById("endofround").style.backgroundImage = imagepath_endofround;
$("#endofround").show();
break;
case "turquoise":	//Turquoise fields - Circlegame
$("#maingamesvg").hide();
initialisecirclegame();
$("#circlegame").show();
break;
case "salmon":	//Salmon fields - Mathtable
$("#maingamesvg").hide();
initialise_math_table();
$("#multiplikationtablediv").show();
break;
case "greenyellow":		//Greenyellow fields => Grid addition
$("#maingamesvg").hide();
initialise_grid_adi_game();
$("#gridaddition").show();
break;
case "dodgerblue":		//Dodgerblue fields => Share game
$("#maingamesvg").hide();
initialise_sharinggame();
$("#sharinggame").show();
break;
case "chocolate":		//Chocolate fields => Memorygame
$("#maingamesvg").hide();
initialise_memory_game();
$("#memorygame").show();
break;
case "silver":			//Silver fields => Castlegame
$("#maingamesvg").hide();
 castlegame_resetlives();
castlegame_initialise();
$("#castlegame").show();
break;
case "black":			//Check the black fields
$("#maingamesvg").hide();
initialise_tiger_div();
$("#tigerdiv").show();
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
}

function wrongblue(){
hideblue();
drawimage(5, false);
}

function hideblue(){
$("#shopdiv").hide();
sound_shopbackground.pause();
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
  sound_background_krokogame.pause();
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
  sound_background1.pause();
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
  sound_background1.pause();
$("#maingamesvg").show();
}


/*=================================================================================
Function for pink fields
===================================================================================*/
function checkpinkfields($is_correct){

hidepink();

if($is_correct){
  drawimage(10,true);
}
else{
  drawimage(10,false);
}

}

function hidepink(){
$("#whatisnextgame").hide();
$("#maingamesvg").show();
}

/*=================================================================================
Function for lavender fields
===================================================================================*/
function checklavenderfields($numberoftrys){

hidelavender();

switch($numberoftrys){
case 1:
  drawimage(15, true);
break;
case 2:
  drawimage(10, true);
break;
case 3:
  drawimage(5, true);
break;
default:
  drawimage(20, false);
break;
}

}

function hidelavender(){
$("#cheese").hide();
$("#maingamesvg").show();
}


/*=================================================================================
Function for skyblue fields
===================================================================================*/
function checkskybluefields($is_correct){

hideskyblue();

if($is_correct){
  drawimage(10,true);
}
else{
  drawimage(10,false);
}

}

function hideskyblue(){
$("#tengame").hide();
$("#maingamesvg").show();
}

/*=================================================================================
Function for mediumaquamarine fields
===================================================================================*/
function checkmediumaquamarinefields($is_correct){

hidemediumaquamarine();

if($is_correct){
  drawimage(10,true);
}
else{
  drawimage(10,false);
}

}

function hidemediumaquamarine(){
$("#divisiongame").hide();
$("#maingamesvg").show();
}

/*=================================================================================
Function for golden fields
===================================================================================*/
function checkgoldenfields($deliver){

hidegold();

if($deliver){
  drawmoney(1,true);
}

}

function hidegold(){
$("#bananadelivery").hide();
$("#maingamesvg").show();
}


/*=================================================================================
Function for khaki fields
===================================================================================*/
function checkkhakifields($correct){

hidekhaki();

if($correct){
  drawimage(10,true);
}
else{
  drawimage(10,false);
}

}

function hidekhaki(){
$("#slidergame").hide();
$("#maingamesvg").show();
}

/*=================================================================================
Function for midnightblue fields
===================================================================================*/
function checkmidnightbluefields($correct){

hidekmidnightblue();

if($correct){
  drawimage(15,true);
}

}

function hidekmidnightblue(){
$("#wallgame").hide();
$("#maingamesvg").show();
}

/*=================================================================================
Function for snow fields
===================================================================================*/
function hidesnowfield(){
$("#endofround").hide();
$("#maingamesvg").show();
}

/*=================================================================================
Function for turqois fields
===================================================================================*/
function checkturquoisfields($correct){

hideturquois();

if($correct){
  drawimage(10,true);
}
else
{
  drawimage(10, false);
}

}

function hideturquois(){
$("#circlegame").hide();
$("#maingamesvg").show();
}

/*=================================================================================
Function to check the salmon fields
===================================================================================*/
function checksalmonfields($correct){

hidesalmon();

if($correct){
  drawimage(10,true);
}
else
{
  drawimage(10, false);
}

}

function hidesalmon(){
$("#multiplikationtablediv").hide();
$("#maingamesvg").show();
}

/*=================================================================================
Function to check the greenyellow fields
===================================================================================*/
function checkgreenyellowfields($numberoftries){

hidegreenyellow();

if($numberoftries == 0){
  drawimage(10,true);
}

if($numberoftries == 1){
  drawimage(5,true);
}

if($numberoftries > 1){
  drawimage(10,false);
}


}

function hidegreenyellow(){
$("#gridaddition").hide();
$("#maingamesvg").show();
}

/*=================================================================================
Function to check the dodgerblue fields
===================================================================================*/
function checkdodgerblue($correct){

hidedodgerblue();

if($correct){
  drawimage(10,true);
}
else
{
  drawimage(10, false);
}

}

function hidedodgerblue(){
$("#sharinggame").hide();
$("#maingamesvg").show();
}

/*=================================================================================
Function to check the chocolate fields
===================================================================================*/
function checkchocolate($correct){

hidechocolate();

if($correct){
  drawimage(10,true);
}
else
{
  drawimage(10, false);
}

}

function hidechocolate(){
$("#memorygame").hide();
$("#maingamesvg").show();
}

/*=================================================================================
Function for silver fields
===================================================================================*/
function checksilver($is_correct){

hidesilver();

if($is_correct){
  drawimage(10,true);
}
else{
  drawimage(10,false);
}

}

function hidesilver(){
$("#castlegame").hide();
$("#maingamesvg").show();
}

/*=================================================================================
Function for tiger game	/ Black fields
===================================================================================*/
function checkblackfields($result){

hideblack();

switch($result){

case -1:
drawimage(30, false);
break;
case 0:
drawimage(10, false);
break;
case 1:
drawimage(0, true);
break;

}
}

function hideblack(){
$("#tigerdiv").hide();
$("#maingamesvg").show();
}

/*=================================================================================
Function for drawing the banana
===================================================================================*/
function drawimage($amount, $positive){

sound_backgroundmusic_level1.play();

//Display banana
svgContainer.append("svg:image")
      .attr("xlink:href", "./images/bananas.png").attr("id", "bananaimage")
      .attr("width", 100)
      .attr("height", 100).attr("x", 290).attr("y",30);


if($positive){

//Play the banana up sound
sound_bananaup.play();

//Plus
svgContainer.append("text").attr("id", "bananatext")
      .attr("x", 160)
      .attr("y", 100)
      .text(" + " + $amount)
      .attr("font-family", "Chalkboard")
      .attr("font-size", "50px")
      .attr("fill", item_display_color);

var bananaamount = document.getElementById("bananaamount");
bananacounter = bananacounter + $amount;
bananaamount.textContent = "+ " + bananacounter;
}
else{

sound_bananalost.play(); //Play the lost banana sound

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

/*=================================================================================
Function for drawing the money
===================================================================================*/
function drawmoney($amount, $positive){

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
      .text(" - " + 50)
      .attr("font-family", "Chalkboard")
      .attr("font-size", "50px")
      .attr("fill", item_display_color);

var moneyamount = document.getElementById("moneyamount");
moneycounter = moneycounter + $amount;
moneyamount.textContent = "+ " + moneycounter;

if(moneycounter >= 5){
localStorage.setItem("level", 2);	//Set the amount of levels
}

//Reduce the bananas

var bananaamount = document.getElementById("bananaamount");
bananacounter = bananacounter - 50;
bananaamount.textContent = "+ " + bananacounter;

}
else{

//Minus
svgContainer.append("text").attr("id", "moneytext")
      .attr("x", 160)
      .attr("y", 100)
      .text(" - " + $amount)
      .attr("font-family", "Chalkboard")
      .attr("font-size", "50px")
      .attr("fill", "red");

var moneyamount = document.getElementById("moneyamount");
if(moneycounter > 0){
moneycounter = moneycounter - $amount;
	}
}

moneyamount.textContent = "+ " + moneycounter;
entered = true;
}

/*==================================================================
Function that shows the sources
=======================================================*/
function showsources(){
$("#caracterselection").hide();
$("#sourcediv").show();
}

function backfromsource(){
$("#sourcediv").hide();
$("#caracterselection").show();
}


