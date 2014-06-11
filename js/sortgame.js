var sortgame_range = 20;
var sortgame_numberoflis = 7;
var resultarray = new Array(sortgame_numberoflis);


function initialisedivisiongame(){

for(var z = 1; z<=sortgame_numberoflis; z++){

var moduloiszero = false;

do{		//We want only division with whole number results
var number1 = Math.floor(Math.random() * sortgame_range) + 1;
var number2 = Math.floor(Math.random() * sortgame_range) + 1;

if(number1 % number2 == 0){
var alreadyexists = false;

//Make sure that the result of this devision does not already exists
for(var j = 0; j<resultarray.length; j++){
  if(resultarray[j] == (operators[level_operator](number1, number2))){
   	alreadyexists =true;
	break;
  }
}

if(!alreadyexists){
  moduloiszero = true;
}
}//End if
}while(moduloiszero == false);

resultarray[z-1] = operators[level_operator](number1, number2);

var divisionli = document.getElementById("divisionli" + z);
divisionli.innerHTML = number1 + " " + level_operator + " " + number2;
divisionli.setAttribute("result", operators[level_operator](number1, number2));

 }//End for loop
}//End function

/*====================================================================
Function for reseting the arrays
=====================================================================*/
function resetdivisiongame(){
resultarray.length = 0;
}


/*====================================================================
Function for controlling the results
=====================================================================*/
function controldivisiongame(){

//Sort the numbers
resultarray.sort(function(a, b){return a-b});

var correct = true;

//Itearte through the Li elements
var ul = document.getElementById("sortable");
var items = ul.getElementsByTagName("li");
for (var i = 0; i < items.length; ++i) {
  if(items[i].getAttribute("result") != resultarray[i]){
  correct = false;
  }
}

if(correct){
checkmediumaquamarinefields(true);
}
else
{
checkmediumaquamarinefields(false);
}
}
