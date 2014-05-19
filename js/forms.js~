var picturenames = ["baseball.png","basketball.png","billiardball.png",
"book.png","chocolate.png","football.png","geotriangle.png","gift.png","musictriangle.png",
"rectangle.png","redball.png","square.png","television.png","triangle.png","triangle2.png"];
var numberofrects = 0;
var numberofcircles = 0;
var numberoftriangles = 0;

function createformsgame(){

var x = 40;
var y = -100;

//Draw 20 images to the screen
for(var i = 0; i < 20; i++){

var number = diceresult = Math.floor(Math.random() * picturenames.length) + 1;

if(i%4 == 0){ //If true == End of the row
y = y + 140;
x = 40;
}
else{
x = x + 140;
}

formsvg.append("svg:image")
      .attr("xlink:href", "./images/Forms/" + picturenames[number])
      .attr("width", 100)
      .attr("height", 100).attr("x", x).attr("y",y);

countforms(picturenames[number]);

}

/*
alert("rects " + numberofrects);
alert("circles " + numberofcircles);
alert("triangles " + numberoftriangles);
*/

}//End of the method

function countforms($name){

switch($name){

case "baseball.png":
case "basketball.png":
case "billiardball.png":
case "chocolate.png":
case "football.png":
case "redball.png":
numberofcircles++;
break;
case "book.png":
case "gift.png":
case "rectangle.png":
case "square.png":
case "telvision.png":
numberofrects++;
break;
case "geotriangle.png":
case "musictriangle.png":
case "triangle.png":
case "triangle2.png":
numberoftriangles++;
break;
 }
}

function clearelements(){

var input1 = document.getElementById("forminput1");
var input2 = document.getElementById("forminput2");
var input3 = document.getElementById("forminput3");

input1.value = "";
input2.value = "";
input3.value = "";

}

function checkformresults(){

var input1 = document.getElementById("forminput1");
var input2 = document.getElementById("forminput2");
var input3 = document.getElementById("forminput3");

//input1.setAttribute("value", numberofrects);
input2.setAttribute("value", numberofcircles);
input3.setAttribute("value", numberoftriangles);

var answer1 = input1.value;
var answer2 = input2.value;
var answer3 = input3.value;

var correctanswers = 0;

if(answer1 == numberofrects){
correctanswers++;
}

if(answer2 == numberofcircles){
correctanswers++;
}

if(answer3 == numberoftriangles){
correctanswers++;
}



}
