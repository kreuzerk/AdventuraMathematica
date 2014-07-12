var minigameresult_amount;
var minigameresult_correct;
var minigameresult_moneydeliverd;
var minigamesresult_money;


function initialiseminigameresultscreen($amount, $correct){

minigameresult_amount = $amount;
minigameresult_correct = $correct;

minigamesresult_money = false;

document.getElementById("minigameresultdiv_image").setAttribute("src", "./images/bananas.png");

if($correct){

number_correct_answered++;

//Play the banana up sound
sound_bananaup.play();

document.getElementById("minigameresult_header_h1").innerHTML = "Felicitación";

document.getElementById("minigameresult_exercisetext").innerHTML = "Todo lo hace bien";

document.getElementById("maingameresultdiv_bananatext").innerHTML = "+ " + $amount;
document.getElementById("maingameresultdiv_bananatext").style.color = "black";
}
else{

number_wrong_answered++;

sound_bananalost.play(); //Play the lost banana sound

document.getElementById("minigameresult_header_h1").innerHTML = "Triste";

document.getElementById("minigameresult_exercisetext").innerHTML = "Por desgracia, no está debidamente";

document.getElementById("maingameresultdiv_bananatext").innerHTML = "- " + $amount;
document.getElementById("maingameresultdiv_bananatext").style.color = "red";
}

}


function initialiseminigame_money_recived($delivery){

minigamesresult_money = true;
minigameresult_moneydeliverd = $delivery;

document.getElementById("minigameresultdiv_image").setAttribute("src", "./images/money.png");

if($delivery){

//Play the money sound
sound_moneysound.play();

document.getElementById("minigameresult_header_h1").innerHTML = "Felicitación";

document.getElementById("minigameresult_exercisetext").innerHTML = "Usted recibirá un oro";

document.getElementById("maingameresultdiv_bananatext").innerHTML = "+ " + 1;
document.getElementById("maingameresultdiv_bananatext").style.color = "black";
}
else{

sound_bananalost.play(); //Play the lost banana sound

document.getElementById("minigameresultdiv_image").setAttribute("src", "./images/bananas.png");

document.getElementById("minigameresult_header_h1").innerHTML = "Triste";

document.getElementById("minigameresult_exercisetext").innerHTML = "Desafortunadamente, tu no tiene suficientes plátanos";

document.getElementById("maingameresultdiv_bananatext").innerHTML = " + 0 ";
document.getElementById("maingameresultdiv_bananatext").style.color = "red";
}

}

/*==========================================
Function that is responsible for the green fields
============================================*/
function minigameresult_greenfields($amount, $correct){

minigameresult_amount = $amount;
minigameresult_correct = $correct;

document.getElementById("minigameresultdiv_image").setAttribute("src", "./images/bananas.png");

//Play the banana up sound
sound_bananaup.play();

document.getElementById("minigameresult_header_h1").innerHTML = "Felicitación";

document.getElementById("minigameresult_exercisetext").innerHTML = "Campo verde: Tu recibirás 3 plátanos";

document.getElementById("maingameresultdiv_bananatext").innerHTML = "+ 3";
document.getElementById("maingameresultdiv_bananatext").style.color = "black";

}

function minigameresult_redfields($amount, $correct){

minigameresult_amount = $amount;
minigameresult_correct = $correct;


document.getElementById("minigameresultdiv_image").setAttribute("src", "./images/bananas.png");
sound_bananalost.play(); //Play the lost banana sound

document.getElementById("minigameresultdiv_image").setAttribute("src", "./images/bananas.png");

document.getElementById("minigameresult_header_h1").innerHTML = "Triste";

document.getElementById("minigameresult_exercisetext").innerHTML = "Campo Rojo: Desafortunadamente, tu pierde 3 plátanos";

document.getElementById("maingameresultdiv_bananatext").innerHTML = " - 3 ";
document.getElementById("maingameresultdiv_bananatext").style.color = "red";
}



function minigameresult_button_ok_clicked(){

$("#minigameresultdiv").hide();
$("#maingamesvg").show();

if(!minigamesresult_money){
drawimage(minigameresult_amount, minigameresult_correct);	//Draw the bananas on the main screen
}
else{
if(minigameresult_moneydeliverd){
drawmoney(1, true);
}


//Play the sound corresponding to the level
switch(selected_level){

case "level1":
sound_backgroundmusic_level1.play();
break;
case "level2":
sound_level2.play();
break;
case "level3":
sound_level3.play();
break;
}
}

}