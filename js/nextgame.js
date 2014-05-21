var pattern1 = ["rectblue", "circleyellow", "circlegreen", "rectblue", "circleyellow", "circlegreen", "rectblue", "circleyellow", "circlegreen", "rectblue"];
var solution = new Array(10);

var pattern1_drawn = 4;
var next_x = -80;
var next_y = 120;
var aftercircle = false;
var drawncounter = -1;


function nextsvg_drawselections(){


var colors = ["blue","yellow","green"];

//Drawing the exercise part
//=======================================================================================

next_x = -80;
next_y = 120;

var drawingcolor;

for(var i = 0; i < pattern1_drawn; i++){

if(pattern1[i].indexOf("blue") >= 0){
  drawingcolor = "blue";
}

if(pattern1[i].indexOf("yellow") >= 0){
  drawingcolor = "yellow";
}

if(pattern1[i].indexOf("green") >= 0){
  drawingcolor = "green";
}

if(pattern1[i].indexOf("rect") >= 0){
   drawnextelement(drawingcolor, true);
}
else
{
  drawnextelement(drawingcolor, false);
}

}



//Drawing the Selection part
//========================================================================================

var x = 85;
var y = 150;

//Draw the rectangles
for(var i = 0; i < colors.length; i++){

  selectsvg.append("rect").attr("onclick", "drawfigure($(this).attr('form'),$(this).attr('fill'))")
                            .attr("x", x)
                            .attr("y", y)
                            .attr("width", 100)
                            .attr("height", 100).attr("form", "rect")
			    .attr("fill", colors[i]).attr("stroke","black");

  x = x + 185;
}

x = 690;
y = 200


//Draw the circles
for(var i = 0; i < colors.length; i++){


  selectsvg.append("circle").attr("onclick", "drawfigure($(this).attr('form'),$(this).attr('fill'))")
                         .attr("cx", x)
                         .attr("cy", y)
                         .attr("r", 50).attr("form","circle")
			 .attr("fill", colors[i]).attr("stroke","black");

  x = x + 185;
 }
}//End of function nextsvg_drawselections

/*================================================================================================
Function for drawing the next element
==============================================================================================*/

function drawnextelement($drawingcolor, $rect){

drawncounter++;


if($rect){
next_y = 120;

if(aftercircle == false){
next_x = next_x + 116;
}
else
{
next_x = next_x + 76;
}

nextsvg.append("rect")
                            .attr("x", next_x)
                            .attr("y", next_y)
                            .attr("width", 80)
                            .attr("height", 80).attr("form", "rect")
			    .attr("fill", $drawingcolor).attr("stroke","black");

//Add the drawn form to the solution array
solution[drawncounter] = "rect" + $drawingcolor;

//Say that the next form is not after a circle
aftercircle = false;

}
else
{

next_y = 160;

if(aftercircle == false){
next_x = next_x + 156;
}
else{
next_x = next_x + 116;
}

nextsvg.append("circle")
                         .attr("cx", next_x)
                         .attr("cy", next_y)
                         .attr("r", 40).attr("form","circle")
			 .attr("fill", $drawingcolor).attr("stroke","black");

//Add the drawn form to the solution
solution[drawncounter] = "circle" + $drawingcolor;

aftercircle = true;		//Say that the next form is drawn after a circle
}



//Do the correction of the exercise

if(drawncounter == 9){		//9 because it begins with zero at the first iteration
 
 var formiscorrect = true;

 //Check if everything is correct
 for(var i=0; i < solution.length; i++){
	if(solution[i] != pattern1[i]){
		formiscorrect = false;
		break;
	}

 }

 alert(formiscorrect);

}

}


/*========================================================
Function for handling the click on an element
==========================================================*/
function drawfigure($form, $color){

if($form == "rect"){
  drawnextelement($color, true);
}
else
{
  drawnextelement($color, false);
}

}








