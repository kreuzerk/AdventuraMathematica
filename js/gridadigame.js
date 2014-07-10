var gridadi_solutiontable;
var gridadi_correct = false;

function initialise_grid_adi_game(){

//Hide the continuebutton

$("#gridadibutton").hide();

//Code for the creation of the exercise
var number1 = Math.floor(Math.random() * 100) + 1;

var number2 = 100 - 1;

document.getElementById("adi_text_first").innerHTML = number1;

//Remove all the elements from the Grid table
$('#gridaditable1 tr').remove();
$('#gridaditable2 tr').remove();
$('#gridaditable3 tr').remove();



//Code for the creation of the tr's and td's
//=======================================================

for(var i = 1; i<=3; i++){

var table = document.getElementById("gridaditable" + i);

for(var j = 0; j<10; j++){

var tr = document.createElement("tr");

for(var k = 0; k <10; k++){

var td = document.createElement("td");
td.setAttribute("class", "gridaditd");
td.setAttribute("id", i + "_" + (j*10 + k));	//Set an id. This id allows to color the fields later on
td.style.backgroundColor = "white";            
tr.appendChild(td);
}

table.appendChild(tr);
}
}
//=========================================================


//Code that colors the fields
gridadi_solutiontable = Math.floor(Math.random() * 3) + 1;

var different = true;

do{

var randomnumber1 = Math.floor(Math.random() * 100) + 1;
var randomnumber2 = Math.floor(Math.random() * 100) + 1;
var randomnumber3 = Math.floor(Math.random() * 100) + 1;

if(randomnumber1 == number1 || randomnumber2 == number1){
 different = false;
}

}
while(different == false);


//Three for loops that are colorizing each grid

for(var i = 0; i< 100; i++){

if(gridadi_solutiontable == 1){
   if(i == number1){
   document.getElementById("gridaditable1").setAttribute("blues", number1);
   break;
   }
}
else
{
if(i == randomnumber1){
   document.getElementById("gridaditable1").setAttribute("blues", randomnumber1);
   break;
}
}

document.getElementById("1_" + i).style.backgroundColor = "blue";

}


for(var i = 0; i< 100; i++){

if(gridadi_solutiontable == 2){
   if(i == number1){
   document.getElementById("gridaditable2").setAttribute("blues", number1);
   break;
   }
}
else
{
if(i == randomnumber2){
   document.getElementById("gridaditable2").setAttribute("blues", randomnumber2);
   break;
}
}

document.getElementById("2_" + i).style.backgroundColor = "blue";

}


for(var i = 0; i< 100; i++){

if(gridadi_solutiontable == 3){
   if(i == number1){
   document.getElementById("gridaditable3").setAttribute("blues", number1);
   break;
   }
}
else
{
if(i == randomnumber3){
document.getElementById("gridaditable3").setAttribute("blues", randomnumber3);
   break;
}
}

document.getElementById("3_" + i).style.backgroundColor = "blue";

}

}


function gridadi_table_clicked($id, $blues){

document.getElementById("adi_text_second").innerHTML = 100-$blues;



if($id.indexOf(gridadi_solutiontable) > -1){
sound_ok.play();
$( "#" + $id ).effect( "highlight" );
gridadi_correct = true;
}
else{
sound_error.play();
$( "#" + $id ).effect( "shake" );
gridadi_correct = false;
}

$("#gridadibutton").show();

}

function gridadi_continue(){

sound_buttonclicked.play();

//Call the function from the main script
checkgreenyellowfields(gridadi_correct);

}
