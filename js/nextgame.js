var pattern1 = ["rectblue", "circleyellow", "circlegreen", "rectblue", "circleyellow", "circlegreen", "rectblue", "circleyellow", "circlegreen", "rectblue"];

var pattern1_drawn = 4;

function nextsvg_drawselections(){


var colors = ["blue","yellow","red"];

//Drawing the exercise part
//=======================================================================================



for(var i = 0; i < pattern1_drawn; i++){
  

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

function drawfigure($form, $color){

alert($form + " " + $color);

}

