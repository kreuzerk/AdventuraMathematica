var divisionrange = 20;
var numberoflis = 7;
var solutionarray = new Array(numberoflis);

function initialisedivisiongame(){


for(var i = 1; i<=numberoflis; i++){

var moduloiszero = false;

do{		//We want only division with whole number results

var divisor = Math.floor(Math.random() * divisionrange) + 1;
var divident = Math.floor(Math.random() * divisionrange) + 1;

if(divisor % divident == 0){
moduloiszero = true;
}


}while(moduloiszero == false);

solutionarray[i-1] = divisor / divident;
var li = document.getElementById("divisionli" + i);
li.innerHTML = divisor + " / " + divident;

 }//End for loop
}

//Function for controlling the results
function controldivisiongame(){

//Itearte through the Li elements
var ul = document.getElementById("sortable");
var items = ul.getElementsByTagName("li");
for (var i = 0; i < items.length; ++i) {
  alert(items[i].innerHTML);
}

}

