var quizgame_result;
var quizgame_tigerpoints;
var quizgame_tupoints;

function quizgame_reset_points(){
//Set the points at the beginning of the game to zero
quizgame_tigerpoints = 0;
quizgame_tupoints = 0;
}

function initialise_quizgame(){

$("#quizgame_tigeranswer").hide();
$("#quizgame_tuanswer").hide();

//Show the input field and the ok button
$(".quiz_answerdiv").show();
document.getElementById("quiz_input").value = "";

quizgame_createexercise();
}


//==============
//Function that is responsible for creating the exercise
//============

function quizgame_createexercise(){

do{
var number1 = Math.floor(Math.random() * 20) + 1;
var number2 = Math.floor(Math.random() * 20) + 1;
}
while(number1 % number2 != 0);

document.getElementById("quiz_exercise_responsa_correcta").innerHTML = "Resolver esta tarea";
document.getElementById("quiz_exercise_h1").innerHTML = number1 + " " + level_operator + " " + number2;
quizgame_result =  operators[level_operator](number1,number2);
}


function quizgame_ok_clicked(){

$(".quiz_answerdiv").hide();
window.setTimeout(quizgame_showresults,1000);

}

function quizgame_showresults($number){

var number = document.getElementById("quiz_input").value;
var tigernumber = tiger_is_calculating();

document.getElementById("quizgame_tuanswer_h1").innerHTML = number;
document.getElementById("quizgame_tigeranswer_h1").innerHTML = tigernumber;

document.getElementById("quiz_exercise_responsa_correcta").innerHTML = "";
document.getElementById("quiz_exercise_h1").innerHTML = "";

$("#quizgame_tigeranswer").show();
$("#quizgame_tuanswer").show();


window.setTimeout(quizgame_display_correct_answer,2000);

}


//===============================================
//Function that represents the intelligence of the tiger
//===============================================

function tiger_is_calculating(){

/**
 * Returns a random number between min (inclusive) and max (exclusive)
*/

var max = quizgame_result + 4;
var min = quizgame_result - 4;

for(var i = 0; i<5; i++){
var number = Math.floor(Math.random() * (max - min + 1)) + min;

if(number == quizgame_result){
break;
}

}

return number;

}


//Function that displays the correct answer
//=====================================
function quizgame_display_correct_answer(){

document.getElementById("quiz_exercise_responsa_correcta").innerHTML = "La respuesta correcta es";
document.getElementById("quiz_exercise_h1").innerHTML = quizgame_result;

//Display the number of received points inside of the bubble
var tigeranswer = document.getElementById("quizgame_tigeranswer_h1").innerHTML;


if(tigeranswer == quizgame_result){

document.getElementById("quizgame_tigeranswer_h1").innerHTML = "+ 1";
quizgame_tigerpoints++;
document.getElementById("quizgame_tiger_pointdisplay").innerHTML = "Tigre: " + quizgame_tigerpoints;
}
else{
document.getElementById("quizgame_tigeranswer_h1").innerHTML = "Mal";
}

var tuanswer = document.getElementById("quizgame_tuanswer_h1").innerHTML;

if(tuanswer == quizgame_result){
document.getElementById("quizgame_tuanswer_h1").innerHTML = "+ 1";
quizgame_tupoints++;
document.getElementById("quizgame_tu_pointsdisplay").innerHTML = "Tu: " + quizgame_tupoints;
}
else{
document.getElementById("quizgame_tuanswer_h1").innerHTML = "Mal";
}

//Reinitialise the quizgame
if(quizgame_tigerpoints < 6 && quizgame_tupoints < 6){
window.setTimeout(initialise_quizgame,3000);
}
else
{
alert("Window disapears");
}

}






