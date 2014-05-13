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

alert(diceresult);

//Set the new currentfield
alert(currentfield + " + " + diceresult + " = " + (diceresult + currentfield));

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
