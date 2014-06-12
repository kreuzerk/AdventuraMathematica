var numberrange;
var memorygame_exercises = new Array(8);
var memorygame_results = new Array(8);
var memorygame_display_array = new Array(16);
var memorygame_result_array = new Array(16);

//Variables to store the element that has been clicked before
var memorygame_firstclicked = null;
var memorygame_firstclicked_id;
var memorygame_secondclicked_id = null;
var memorygame_previous_correct;
var previous_correct = false;
var memorygame_found_counter = 0;

function initialise_memory_game(){

if(level_operator == "+" || level_operator == "-"){
numberrange = 50;
}
else{
numberrange = 10;
}

for(var i = 0; i<8; i++){

var numberisok = true;

do{		//Because of the division we only want numbers that have no rest on a division
var number1 = Math.floor(Math.random() * numberrange) + 1;;
var number2 = Math.floor(Math.random() * numberrange) + 1;;

for(var j = 0; j<memorygame_exercises; j++){		//Garante that the number is unique
if(memorygame_exercises[j] == number1 + " " + level_operator + " " + number2){
numberisok = false;
}
else{
numberisok = true;
}
}//End for loop


if(number1 % number2 != 0){
numberisok = false;
}
else{
numberisok = true;
}
}
while(!numberisok);

memorygame_exercises[i] = number1 + " " + level_operator + " " + number2;
memorygame_results[i] = operators[level_operator](number1, number2);
}//End for loop

initialise_display_result_array();

}

//Function that initialises and creates the memorgame_display_array
//and the memorygame_result_array
//================================================================================
function initialise_display_result_array(){

//Fill the memorygame_display_array
for(var i = 0; i<memorygame_display_array.length; i++){

if(i <= 7){
memorygame_display_array[i] = memorygame_exercises[i];
}
else{
memorygame_display_array[i] = memorygame_results[i-8];
}
}//End for loop

//Fill the memorygame_result_array
for(var i = 0; i<2; i++){

for(var j = 0; j<8; j++){
memorygame_result_array[(i*8)+j] = memorygame_results[j];
}//End first for

} //End second for

////==================Test alert to se the content of the array

var string1;
var string2;

for(var i = 0; i< memorygame_display_array.length; i++){
string1 += " " + memorygame_display_array[i];
}

for(var i = 0; i< memorygame_result_array.length; i++){
string2 += " " + memorygame_result_array[i];
}

randomize_memorygame_arrays();

}

//Function that randomizes the memory_display and the memory_result_array
function randomize_memorygame_arrays(){

for(var i = 0; i<50; i++){

var randomposition1 = Math.floor(Math.random() * memorygame_display_array.length);
var randomposition2 = Math.floor(Math.random() * memorygame_display_array.length);

//Create temporary variable and then switch the positions
var temp; 

temp = memorygame_display_array[randomposition1];
memorygame_display_array[randomposition1] = memorygame_display_array[randomposition2];
memorygame_display_array[randomposition2] = temp;

//Also switch the result array accordingly to the other array
temp = memorygame_result_array[randomposition1];
memorygame_result_array[randomposition1] = memorygame_result_array[randomposition2];
memorygame_result_array[randomposition2] = temp;
}

}

function memorycard_clicked($order, $id){


$( "#" + $id ).hide();

$( "#" + $id ).show( "slide");

document.getElementById($id).style.backgroundImage = 'url(./images/memorygame/memorycard_backside.png)';
document.getElementById($id).innerHTML = memorygame_display_array[$order-1];



//Check if the first and the secon were clicked
if(memorygame_firstclicked != null && memorygame_secondclicked_id != null){

if(previous_correct == false){
document.getElementById(memorygame_firstclicked_id).innerHTML = "";
document.getElementById(memorygame_secondclicked_id).innerHTML = "";

//Reset the images to the front card_side
document.getElementById(memorygame_firstclicked_id).style.backgroundImage = 'url(./images/memorygame/memorycard_frontside.png)';
document.getElementById(memorygame_secondclicked_id).style.backgroundImage = 'url(./images/memorygame/memorycard_frontside.png)';

document.getElementById(memorygame_firstclicked_id).setAttribute("onclick", "memorycard_clicked($(this).attr('order'), $(this).attr('id'))");
document.getElementById(memorygame_secondclicked_id).setAttribute("onclick", "memorycard_clicked($(this).attr('order'), $(this).attr('id'))");

}
memorygame_firstclicked = null; 	//Reset the first clicked element to null
memorygame_secondclicked_id = null;     //Reset the second element to null

}


//Needs to be before the second if statement otherwise it does not work
if(memorygame_firstclicked != null){

//This if is executed if the code is correct
if(memorygame_result_array[memorygame_firstclicked-1] == memorygame_result_array[$order-1]){
memorygame_found_counter++;

if(memorygame_found_counter < 8){
document.getElementById(memorygame_firstclicked_id).style.backgroundImage = 'url(./images/memorygame/Imageok.png)';
document.getElementById($id).style.backgroundImage = 'url(./images/memorygame/Imageok.png)';
document.getElementById(memorygame_firstclicked_id).setAttribute("onclick", "");
document.getElementById($id).setAttribute("onclick", "");

previous_correct = true;
}
else
{
alert("Gratulation");
}

}
else
{
previous_correct = false;
}
memorygame_secondclicked_id = $id;

}
else{
memorygame_firstclicked = $order;
memorygame_firstclicked_id = $id;
document.getElementById($id).setAttribute("onclick", "");
}

}
