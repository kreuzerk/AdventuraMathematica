
var selectedcharacter = null;
var imageclickedbefore = null;

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
$("#maingamesvg").show();
$("#sources-button").hide();
}
}



//Function that is called when a levelimage is clicked
function levelimageclicked($id){

if(imageclickedbefore != null){

switch (imageclickedbefore){

case "levelimage1":
document.getElementById("levelimage1").style.backgroundImage = 'url(../images/Background_gray.png)';
break;
case "levelimage2":
document.getElementById("levelimage2").style.backgroundImage = 'url(../images/Background-Level2_gray.png)';
break;
	}//End switch case
   }//End if

switch($id){

case "levelimage1":
document.getElementById("levelimage1").style.backgroundImage = 'url(../images/Background.png)';
document.getElementById("maingamesvg").style.backgroundImage = 'url(../images/Background.png)';	//Change the Background of the level

break;
case "levelimage2":
document.getElementById("levelimage2").style.backgroundImage = 'url(../images/Background-Level2.png)';
circleData = level2;
document.getElementById("maingamesvg").style.backgroundImage = 'url(../images/Background-Level2.png)';
break;

}

imageclickedbefore = $id;

}
