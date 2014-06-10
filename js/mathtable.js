var math_table_range = 12;

function initialise_math_table(){

//Reset the input fields
for(var i=1; i<=10; i++){
document.getElementById("multi_table_input_" + i).innerHTML = "";
}

//Initialise the for Headers of each Column
for(var i = 1; i<=4; i++){
var columnheader = document.getElementById("multi_table_col_header" + i);
columnheader.innerHTML = Math.floor(Math.random() * math_table_range) + 1;
}

//Initialise the row "headers"
for(var i = 1; i<=3; i++){
var rowheader = document.getElementById("multi_table_row_header" + i);
rowheader.innerHTML = Math.floor(Math.random() * math_table_range) + 1;
}

//Initialise the first two fields
for(var i = 1; i<= 2; i++){
var result = document.getElementById("multi_table_td_" + i);

var firstnumber = parseInt(document.getElementById("multi_table_col_header" + result.getAttribute("column")).innerHTML);
var secondnumber = parseInt(document.getElementById("multi_table_row_header" + result.getAttribute("row")).innerHTML);

//alert(firstnumber + " " + secondnumber);

result.innerHTML = firstnumber * secondnumber;
} // End for

}


/*=============================================================
Function for controling the inputs
============================================================*/
function control_math_table_inputs(){

var correct = true;

for(var i=1; i<=10; i++){	//10 Because there are ten input elements

var inputelement = document.getElementById("multi_table_input_" + i);

var firstnumber = parseInt(document.getElementById("multi_table_col_header" + inputelement.getAttribute("column")).innerHTML);
var secondnumber = parseInt(document.getElementById("multi_table_row_header" + inputelement.getAttribute("row")).innerHTML);

if(parseInt(inputelement.value) != (firstnumber * secondnumber)){
correct = false;
break;
}

}//End for loop

//Call the Function that is responsible for drawing the bananas 
checksalmonfields(correct);

}


