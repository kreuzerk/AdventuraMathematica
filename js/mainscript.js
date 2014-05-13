var currentfield = 1;

function hallo(){

dicesound = new Audio();
dicesound.src = "../sounds/Diceroll.mp3";
dicesound.play();



var diceresult = Math.floor(Math.random() * 6) + 1;

alert(diceresult);

//Set the new currentfield
alert(currentfield + " + " + diceresult + " = " + (diceresult + currentfield));
currentfield = diceresult+currentfield;

var cx = circleData[currentfield-1].cx;
var cy = circleData[currentfield-1].cy;

drawlion(cx, cy);

height = 200;
width = 200;

}


function drawlion($cx, $cy){

svgContainer.append("svg:image")
      .attr("xlink:href", "./images/Lion.png")
      .attr("width", 100)
      .attr("height", 100).attr("x", $cx-50).attr("y",$cy-90);
}
