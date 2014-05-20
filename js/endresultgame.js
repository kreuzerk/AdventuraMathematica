var endgame_operators = ["+","-"];
var endgame_colors = ["blue", "green", "red", "yellow", "orange"];
var endgame_result = 0;

function createendresultgame(){


var elements = [document.getElementById("number1"),document.getElementById("number2"),document.getElementById("number3"),document.getElementById("number4")];

//Variable to store the operators
var operators = new Array(3);
var numbers = [0,0,0,0];

//Set the operators
for(var i = 0; i<operators.length; i++){
  var randomoperator = Math.floor(Math.random()* endgame_operators.length) + 1;
  operators[i] = endgame_operators[randomoperator];
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
