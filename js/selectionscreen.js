
var selectedcharacter = null;
var imageclickedbefore = null;
var item_display_color = "black";
var selected_level;

//Variables for the bananadelivery images
var imagepath_bananadelivery;
var imagepath_deliveryfailure;
var imagepath_deliveryok;
var imagepath_nodelivery;

//Variable that stores the imagepath of the tigerimage
var imagepath_tiger = "url(./images/quizgame/Tiger_Level1.png)";

//Variable for the wallgame background
var imagepath_wallgame;

//Variable for the end of the round
var imagepath_endofround;

var level_operator = "/";
//Global variable for the operators
var operators = {
    '+': function(a, b) { return a + b },
    '-': function(a, b) { return a - b },
    '/': function(a, b) { return a / b },
    '*': function(a, b) { return a * b }
};


//Function that is responsible for initialising the levels
function initialise_levels_selectionsscreen(){

var level = localStorage.getItem("level");

if(level == null){
localStorage.setItem("level", 1);
level = 1;
}

/*
switch(level){

case "1":

//Make the second element uncklickable
document.getElementById("levelimage2").style.backgroundImage = 'url(./images/Level2_locked.png)';
document.getElementById("levelimage2").setAttribute("onclick","alert_locked()");


//Make the third element uncklickable
document.getElementById("levelimage3").style.backgroundImage = 'url(./images/Level3_locked.png)';
document.getElementById("levelimage3").setAttribute("onclick","alert_locked()");

break;

case "2":		//Only the third level is locked

//Make the third element uncklickable
document.getElementById("levelimage3").style.backgroundImage = 'url(./images/Level3_locked.png)';
document.getElementById("levelimage3").setAttribute("onclick","alert_locked()");

break;


}
*/

}

//Function that alerts that an element is locked
function alert_locked(){
alert("Lo sentimos, este artículo está bloqueado. Primer nivel 1 juegos de desbloqueo a la misma");
}

function characterclicked($id){

if(selectedcharacter != null){
  selectedcharacter.style.backgroundColor="white";
}

selectedcharacter = document.getElementById($id);
selectedcharacter.style.backgroundColor='lightskyblue';

}

//Function that is called by the button
function characterselectioncontinue(){

if(selectedcharacter == null || imageclickedbefore == null){
$( "#startscreendialog" ).dialog( "open" );
}
else{
$("#caracterselection").hide();

/*
//Adding an image
svgContainer.append("svg:image")
      .attr("xlink:href", selectedcharacter.getAttribute("src")).attr("id", "Lion")
      .attr("width", 100)
      .attr("height", 100).attr("x", 0).attr("y",680);

*/

setfilename(selectedcharacter.getAttribute("src"));
drawgameboard();	//Function that draws the gameboard
sound_intromusic.pause();
sound_buttonclicked.play();

switch(selected_level){

case "level1":
sound_backgroundmusic_level1.play();
break;
case "level2":
sound_level2.play();
break;
case "level3":
sound_level3.play();
break;

}

$("#maingamesvg").show();
$("#sources-button").hide();
}
}



//Function that is called when a levelimage is clicked
function levelimageclicked($id){

if(imageclickedbefore != null){

switch (imageclickedbefore){

case "levelimage1":
document.getElementById("levelimage1").style.backgroundImage = 'url(./images/Background_gray.png)';
break;
case "levelimage2":
document.getElementById("levelimage2").style.backgroundImage = 'url(./images/Background-Level2_gray.png)';
break;
case "levelimage3":
document.getElementById("levelimage3").style.backgroundImage = 'url(./images/Background-Level3_gray.png)';
break;

 }//End switch case
}//End if

switch($id){

case "levelimage1":
//==============================================================================================

//Set all the properties for level 1

//=============================================================================================

selected_level = "level1";

document.getElementById("levelimage1").style.backgroundImage = 'url(./images/Background.png)';
document.getElementById("maingamesvg").style.backgroundImage = 'url(./images/Background.png)';	//Change the Background of the level

circleData = level1;

//Paths for the bananadelivery images
imagepath_bananadelivery = "url(./images/delivery/level1/bananadelivery.png)";
imagepath_deliveryfailure = "url(./images/delivery/level1/deliveryfailure.png)";
imagepath_deliveryok = "url(./images/delivery/level1/deliveryok.png)";
imagepath_nodelivery = "url(./images/delivery/level1/nodelivery.png)";

//Variable for the wallgame background
imagepath_wallgame = "url(./images/selectiongame/Walls.png)";

//Variable for the end of the round
imagepath_endofround = "url(./images/endofround/Round.png)";

//Path for the tigergame
imagepath_tiger = "url(./images/quizgame/Tiger_Level1.png)";


//Choose the operator for level1
level_operator = "+";

break;
//=======================================================================================

//Set all the properties for level 2

//=============================================================================================
case "levelimage2":

selected_level = "level2";

document.getElementById("levelimage2").style.backgroundImage = 'url(./images/Background-Level2.png)';
circleData = level2;
document.getElementById("maingamesvg").style.backgroundImage = 'url(./images/Background-Level2.png)';

//Paths for the bananadelivery images
imagepath_bananadelivery = "url(./images/delivery/level2/bananadelivery.png)";
imagepath_deliveryfailure = "url(./images/delivery/level2/deliveryfailure.png)";
imagepath_deliveryok = "url(./images/delivery/level2/deliveryok.png)";
imagepath_nodelivery = "url(./images/delivery/level2/nodelivery.png)";

//Variable for the wallgame background
imagepath_wallgame = "url(./images/selectiongame/Walls_level2.png)";

//Variable for the end of the round
imagepath_endofround = "url(./images/endofround/Round_level2.png)";

//Path for the tigergame
imagepath_tiger = "url(./images/quizgame/Tiger_Level2.png)";

//Choose the settings for the display
item_display_color = "white";


//Set the difficulty of the level
level_operator = "-";

break;

//=======================================================================================

//Set all the properties for level 3

//=============================================================================================
case "levelimage3":

selected_level = "level3";

document.getElementById("levelimage3").style.backgroundImage = 'url(./images/Background-Level3.png)';
circleData = level3;
document.getElementById("maingamesvg").style.backgroundImage = 'url(./images/Background-Level3.png)';

//Paths for the bananadelivery images
imagepath_bananadelivery = "url(./images/delivery/level3/bananadelivery.png)";
imagepath_deliveryfailure = "url(./images/delivery/level3/deliveryfailure.png)";
imagepath_deliveryok = "url(./images/delivery/level3/deliveryok.png)";
imagepath_nodelivery = "url(./images/delivery/level3/nodelivery.png)";

//Variable for the wallgame background
imagepath_wallgame = "url(./images/selectiongame/Walls_level3.png)";

//Variable for the end of the round
imagepath_endofround = "url(./images/endofround/Round_level3.png)";

//Path for the tigergame
imagepath_tiger = "url(./images/quizgame/Tiger_Level3.png)";

//Choose the settings for the display
item_display_color = "black";


//Set the difficulty of the level
level_operator = "-";

break;

}

imageclickedbefore = $id;

}
