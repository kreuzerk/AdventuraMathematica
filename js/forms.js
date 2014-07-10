var picturenames = ["baseball.png","basketball.png","billiardball.png",
"book.png","chocolate.png","football.png","geotriangle.png","gift.png","musictriangle.png",
"rectangle.png","redball.png","square.png","television.png","triangle.png","triangle2.png"];
var forms_numberofrects = 0;
var forms_numberofcircles = 0;
var forms_numberoftriangles = 0;

function createformsgame(){

removeformelements();
clearelements();

forms_numberofrects = 0;
forms_numberofcircles = 0;
forms_numberoftriangles = 0;

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
      .attr("xlink:href", "./images/Forms/" + picturenames[number-1])
      .attr("width", 100)
      .attr("height", 100).attr("x", x).attr("y",y);

forms_countforms(picturenames[number-1]);

}

}//End of the method

function forms_countforms($name){

switch($name){

case "baseball.png":
case "basketball.png":
case "billiardball.png":
case "chocolate.png":
case "football.png":
case "redball.png":
forms_numberofcircles++;
break;
case "book.png":
case "gift.png":
case "rectangle.png":
case "square.png":
case "television.png":
forms_numberofrects++;
break;
case "geotriangle.png":
case "musictriangle.png":
case "triangle.png":
case "triangle2.png":
forms_numberoftriangles++;
break;
 }
}

function clearelements(){

sound_buttonclicked.play();

var input1 = document.getElementById("forminput1");
var input2 = document.getElementById("forminput2");
var input3 = document.getElementById("forminput3");

input1.value = "";
input2.value = "";
input3.value = "";

}

function removeformelements(){
$("#formssvg").empty();

}

function checkformresults(){

sound_buttonclicked.play();

var input1 = document.getElementById("forminput1");
var input2 = document.getElementById("forminput2");
var input3 = document.getElementById("forminput3");

/*
input1.setAttribute("value", forms_numberofrects);
input2.setAttribute("value", forms_numberofcircles);
input3.setAttribute("value", forms_numberoftriangles);
*/

var answer1 = parseInt(input1.value);
var answer2 = parseInt(input2.value);
var answer3 = parseInt(input3.value);



if(answer1 == forms_numberofrects && answer2 == forms_numberofcircles && answer3 == forms_numberoftriangles){
checkorangefields(true);
}
else{
checkorangefields(false);
}




}
