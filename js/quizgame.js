var quizgame_result;

function initialise_quizgame(){

$("#quizgame_tigeranswer").hide();
$("#quizgame_tuanswer").hide();

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


document.getElementById("quiz_exercise_h1").innerHTML = number1 + " " + level_operator + " " + number2;
quizgame_result =  operators[level_operator](number1,number2);
}


function quizgame_ok_clicked(){

$(".quiz_answerdiv").hide();
window.setTimeout(quizgame_showresults,1000);

}

function quizgame_showresults($number){

var number = document.getElementById("quiz_input").value;

document.getElementById("quizgame_tuanswer_h1").innerHTML = number;


$("#quizgame_tigeranswer").show();
$("#quizgame_tuanswer").show();

}


//===============================================

