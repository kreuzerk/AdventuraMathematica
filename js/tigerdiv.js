var tiger_quizgame_result;


function initialise_tiger_div(){

document.getElementById("tigerdiv").style.backgroundImage = imagepath_tiger;

//Reset the attributes
document.getElementById("tigerdiv_speechbubble").innerHTML = "HaHaHaHa!!! <br /> Usted está jugando contra mí. <br/> El primer jugador en ganar seis proyectos de ley contestó correctamente.";
document.getElementById("tigerdiv_okbutton").setAttribute("onclick","tiger_okclicked()");
}

function tiger_okclicked(){
  $("#tigerdiv").hide();
  quizgame_reset_points();
  initialise_quizgame();
  $("#bossquiz").show();
}

function quizgame_finished($result){	//-1 = Tiger wins, 0 = draw, 1 = Player wins

switch($result){

case -1: // Tiger wins
document.getElementById("tigerdiv_speechbubble").innerHTML = "Haha. Yo soy el maestro de Matemáticas. Dame 30 bananas";
break;

case 0:	// Draw game
document.getElementById("tigerdiv_speechbubble").innerHTML = "Haha. Estamos igualmente fuerte. Es por eso que sólo tengo 10 plátanos. hahaha";
break;

case 1:  //Player wins
document.getElementById("tigerdiv_speechbubble").innerHTML = "Ohhh. Eres mejor que yo, así que voy a llevar la basura cualquier bananas. Voy a entrenar. </br> Nos vemos pronto.";
break;
}

tiger_quizgame_result = $result;
document.getElementById("tigerdiv_okbutton").setAttribute("onclick","tiger_finish()");

$("#bossquiz").hide();
$("#tigerdiv").show();

}

function tiger_finish(){
checkblackfields(tiger_quizgame_result);
}
