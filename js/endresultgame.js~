var endgame_operators = ["+","-"];
var endgame_colors = ["blue", "green", "red", "yellow", "orange"];
var endgame_result = 0;
var operators;

function createendresultgame(){

cleaninputs();

var elements = [document.getElementById("number1"),document.getElementById("number2"),document.getElementById("number3"),document.getElementById("number4")];

//Variable to store the operators
operators = new Array(3);
var numbers = [0,0,0,0];

//Set the operators
for(var i = 0; i<operators.length; i++){
  var randomoperator = Math.floor(Math.random()* endgame_operators.length) + 1;
  operators[i] = endgame_operators[randomoperator-1];
}

//Set the values
for(var i = 0; i< elements.length; i++){
var number = Math.floor(Math.random() * 12) + 1;

var randomcolor = Math.floor(Math.random() * endgame_colors.length) + 1;

elements[i].setAttribute("color", endgame_colors[randomcolor]);
elements[i].innerHTML = number;
numbers[i] = number;



} //End for loop


endgame_result = numbers[0];

for(var i = 0; i<operators.length; i++){
  
switch(operators[i]){

case "+":
 endgame_result = endgame_result + numbers[i+1];
break;
case "-":
 endgame_result = endgame_result - numbers[i+1];
break;
}//End Switch case
}


//Set the result
var randomcolor = Math.floor(Math.random() * endgame_colors.length) + 1;

var result = document.getElementById("endgame_result");

result.setAttribute("color", endgame_colors[randomcolor]);
result.innerHTML = endgame_result;
}

//Function for cleaning the inputs
function cleaninputs(){

sound_buttonclicked.play();

var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");

input1.value = "";
input2.value = "";
input3.value = "";

}

//Function for checking the results
function endgame_checkresults(){

sound_buttonclicked.play();

var inputs = [document.getElementById("input1"), document.getElementById("input2"), document.getElementById("input3")];

var correct = 0;

for(var i = 0; i < operators.length; i++){

  if(inputs[i].value == operators[i]){
	correct++;
  }
}

checkpurplefields(correct);
}
