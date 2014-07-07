var wallgame_result;
var firstlivalue;
var secondlivalue;
var wallgame_firstliselected = false;
var wallgame_secondliselected = false;
var id1;
var id2;
var wallgame_counter;
var numberoflis;

function initialisewallgame(){

document.getElementById("wallgame").style.backgroundImage = imagepath_wallgame;

numberoflis = 6;
var exerciserange = 12;
wallgame_result = new Array(numberoflis);

wallgame_counter = 0;

switch(level_operator){

case "*","/":
exerciserange = 12;
break;
case "+", "-":
exerciserange = 50;
break;

}

//For loop for the first elements

for(var i=1; i<=numberoflis; i++){

do{		//We want only division with whole number results

var moduloiszero = false;

var number1 = Math.floor(Math.random() * exerciserange) + 1;
var number2 = Math.floor(Math.random() * exerciserange) + 1;

if(number1 % number2 == 0 && number1 - number2 > 0){
moduloiszero = true;
}

}
while(moduloiszero == false);



var li = document.getElementById("wallgameli1_" + i);

li.innerHTML = number1 + " " + level_operator + " " + number2;		//Create the exercise
li.setAttribute("result", operators[level_operator](number1,number2));	//Set the result as attribute

$("#" + li.getAttribute("id")).show();

wallgame_result[i-1] = operators[level_operator](number1,number2);

 }//End for loop

randomizeresultarray();

for(var i = 1; i<=numberoflis; i++){

var li = document.getElementById("wallgameli2_" + i);
li.innerHTML = wallgame_result[i-1];
li.setAttribute("result", wallgame_result[i-1]);
$("#" + li.getAttribute("id")).show();

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

wallgame_firstliselected = true;

var ol1 = document.getElementById("selectable1").children;

child1 = ol1[$index];

firstlivalue = child1.getAttribute("result");
id1 = child1.getAttribute("id");

}//End first if
else{

wallgame_secondliselected = true;

var ol2 = document.getElementById("selectable2").children;
var child2 = ol2[$index];
id2 = child2.getAttribute("id");

secondlivalue = child2.getAttribute("result");
}

//Check if both are selectd
if(wallgame_firstliselected == true && wallgame_secondliselected == true){
  if(firstlivalue == secondlivalue){
    wallgame_firstliselected = false;
    wallgame_secondliselected = false;

    sound_blop.play();

    $("#" + id1).hide();
    $("#" + id2).hide();

    wallgame_counter++;
  }

  if(wallgame_counter == numberoflis){
	checkmidnightbluefields(true);
  }
}

}

