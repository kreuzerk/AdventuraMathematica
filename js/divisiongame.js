var divisionrange = 20;
var numberoflis = 7;
var resultarray = new Array(numberoflis);


function initialisedivisiongame(){

for(var i = 1; i<=numberoflis; i++){

var moduloiszero = false;

do{		//We want only division with whole number results

var divisor = Math.floor(Math.random() * divisionrange) + 1;
var divident = Math.floor(Math.random() * divisionrange) + 1;

if(divisor % divident == 0){
var alreadyexists = false;

//Make sure that the result of this devision does not already exists
for(var j = 0; j<resultarray.length; j++){
  if(resultarray[j] == (divisor / divident)){
   	alreadyexists =true;
	break;
  }
}

if(!alreadyexists){
  moduloiszero = true;
}
}

}while(moduloiszero == false);

resultarray[i-1] = divisor / divident;

var li = document.getElementById("divisionli" + i);
li.setAttribute("result", divisor / divident);
li.innerHTML = divisor + " / " + divident;

 }//End for loop
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
alert("correct");
}
else
{
alert("wrong");
}

}
