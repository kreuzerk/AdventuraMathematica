var math_table_range = 12;
var mathtable_columnvalues = new Array(4);
var mathtable_rowvalues = new Array(4);


function initialise_math_table(){

//Reset the input fields
for(var i=1; i<=10; i++){
document.getElementById("multi_table_input_" + i).value = "";
}

//Initialise the first td of the table
document.getElementById("mathtable_operator").innerHTML = level_operator;

//Initialise the for Headers of each Column
for(var i = 1; i<=4; i++){

do{
var columnheader = document.getElementById("multi_table_col_header" + i);

var exists = false;

for(var j = 0; j< mathtable_columnvalues.length; j++){
  if(mathtable_columnvalues[i] == columnheader){
  	exists = true;
	break;
  }
}

}
while(exists);

mathtable_columnvalues[i] = columnheader;
columnheader.innerHTML = Math.floor(Math.random() * math_table_range) + 1;
}

//Initialise the row "headers"
for(var i = 1; i<=3; i++){
do{
var rowheader = document.getElementById("multi_table_row_header" + i);
var exists = false;

for(var j=0; j<mathtable_rowvalues.length; j++){
  if(mathtable_rowvalues[j] == rowheader){
  	exists = true;
	break;
  }
}
}
while(exists == true);

rowheader.innerHTML = Math.floor(Math.random() * math_table_range) + 1;
}

//Initialise the first two fields
for(var i = 1; i<= 2; i++){
var result = document.getElementById("multi_table_td_" + i);

var firstnumber = parseInt(document.getElementById("multi_table_col_header" + result.getAttribute("column")).innerHTML);
var secondnumber = parseInt(document.getElementById("multi_table_row_header" + result.getAttribute("row")).innerHTML);

//alert(firstnumber + " " + secondnumber);

result.innerHTML = operators[level_operator](firstnumber, secondnumber);		//The level_operator variable is set in the selectionscreen.js
} // End for

}


/*=============================================================
Function for controling the inputs
============================================================*/
function control_math_table_inputs(){

sound_buttonclicked.play();

var correct = true;

for(var i=1; i<=10; i++){	//10 Because there are ten input elements

var inputelement = document.getElementById("multi_table_input_" + i);

var firstnumber = parseInt(document.getElementById("multi_table_col_header" + inputelement.getAttribute("column")).innerHTML);
var secondnumber = parseInt(document.getElementById("multi_table_row_header" + inputelement.getAttribute("row")).innerHTML);

if(parseInt(inputelement.value) != (operators[level_operator](firstnumber,secondnumber))){		//The level_operator variable is set in the selectionscreen.js
correct = false;
break;
}

}//End for loop

//Call the Function that is responsible for drawing the bananas 
checksalmonfields(correct);

}

function mathtable_inputonclick(){
sound_golfsound.play();
}


