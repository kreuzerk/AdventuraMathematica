var wallgame_result;
var firstlivalue;
var secondlivalue;

function initialisewallgame(){

var numberoflis = 8;
var exerciserange = 80;
wallgame_result = new Array(numberoflis);


//For loop for the first elements

for(var i=1; i<=numberoflis; i++){

var number1 = Math.floor(Math.random() * exerciserange) + 1;
var number2 = Math.floor(Math.random() * exerciserange) + 1;

var li = document.getElementById("wallgameli1_" + i);

li.innerHTML = number1 + " + " + number2;		//Create the exercise
li.setAttribute("result", (number1 + number2));	//Set the result as attribute

wallgame_result[i-1] = (number1 + number2);

 }//End for loop

randomizeresultarray();

for(var i = 1; i<=numberoflis; i++){

var li = document.getElementById("wallgameli2_" + i);
li.innerHTML = wallgame_result[i-1];
li.setAttribute("result", wallgame_result[i-1]);

}

}


//Function to randomize the order in the array
function randomizeresultarray(){

for(var i = 0; i<20; i++){
  var randomnumber1 = Math.floor(Math.random() * numberoflis) + 1;
  var randomnumber2 = Math.floor(Math.random() * numberoflis) + 1;

  var temp = wallgame_result[randomnumber1-1];
  wallgame_result[randomnumber1-1] = wallgame_result[randomnumber2-1];
  wallgame_result[randomnumber2-1] = temp;
}

}


//Function that is called if a li is selected
function liselected($ulone, $index){


if($ulone){
var ul = document.getElementById("selectable1");
var children = ul.getElementsByTagName("li");

firstlivalue = children[0].getAttribute("result");

}
else{

}


}

