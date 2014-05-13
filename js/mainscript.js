var currentfield = 1;
var i;
var diceresult;
var cx;
var cy;

function hallo(){

dicesound = new Audio();
dicesound.src = "../sounds/Diceroll.mp3";
dicesound.play();



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
      .attr("xlink:href", "./images/" + $filename +".png").attr("id", "One")
      .attr("width", 100)
      .attr("height", 100).attr("x", (width/2)-80).attr("y",(height/2)-50);

svgContainer.append("text")
      .attr("x", (width/2)-200)
      .attr("y", (height/2)+20)
      .text(currentfield + " + ")
      .attr("font-family", "Chalkboard")
      .attr("font-size", "50px")
      .attr("fill", "black");

svgContainer.append("text")
      .attr("x", (width/2)+ 50)
      .attr("y", (height/2)+20)
      .text("= " + (currentfield+diceresult))
      .attr("font-family", "Chalkboard")
      .attr("font-size", "50px")
      .attr("fill", "black");

}


