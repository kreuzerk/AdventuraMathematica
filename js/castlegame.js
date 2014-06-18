var castlegame_characterposition = 0;
var castlegame_result = new Array(3); //Here we store the three results
var castlegame_liveplayer;
var castlegame_livecastle;

function castlegame_initialise(){

$( ".fireball" ).hide();
$( ".fireball_player1" ).hide();
$( ".fireball_player2" ).hide();
$( ".fireball_player3" ).hide();

castlegame_liveplayer = 3;
castlegame_livecastle = 3;

create_castleexercise();

}

function create_castleexercise(){

for(var i = 0; i<3; i++){

do{
var number1 = Math.floor(Math.random() * 20) + 1;
var number2 = Math.floor(Math.random() * 20) + 1;

var ok = true;

if(number1 % number2 != 0)
ok = false;

for(var j=0; j<castlegame_result.length; j++){
if(castlegame_result[j] == operators[level_operator](number1,number2)){
ok = false;
break;
}
}


}
while(!ok);

castlegame_result[i] = operators[level_operator](number1,number2);
document.getElementById("castlegame_choice" + (i+1)).innerHTML = number1 + " " + level_operator + " " + number2;

}

//Set the result to the paper at the top
document.getElementById("paperh1").innerHTML = castlegame_result[Math.floor(Math.random() * 3)];

}//End of method create_castleexercise


function castlegame_controll(){

var position;

switch(castlegame_characterposition){
case -1:
position = 0;
break;

case 0:
position = 1;
break;

case 1:
position = 2;
break;

}

var papervalue = document.getElementById("paperh1").innerHTML;

if(castlegame_result[position] == papervalue){
castlegame_fire();	//Call the method to fire on the castle
}
else
{
castlegame_castle_fire();
}


}


function castlegame_go_left($id){


castlegame_characterposition--;	//Dekrement the castlegame_characterposition

if(castlegame_characterposition == -1 || castlegame_characterposition == 0){
$( ".block" ).animate({ "left": "-=240px" }, "slow" );
}
else{
castlegame_characterposition = -1;	//Provend that the character goes to far
}
}

function castlegame_go_right(){

castlegame_characterposition++; 	//Inkrement the castlegame_characterposition

if(castlegame_characterposition == 1 || castlegame_characterposition == 0){
$( ".block" ).animate({ "left": "+=240px" }, "slow" );
}
else{
castlegame_characterposition = 1;	//Provend that the character goes to far
}
}

function castlegame_castle_fire(){

$( ".fireball" ).show();

//Fire depending on the position of the caracter
switch(castlegame_characterposition){

case -1:
$( ".fireball" ).animate({ "left": "-=900px", "top": "+=500px" }, "slow", function(){
    $(".fireball").hide();
castlegame_liveplayer--;	//Dekrement the life of the player
    $( ".fireball" ).animate({ "left": "+=900px", "top": "-=500px" });	//Reset the fireball to the original position
    $( ".block" ).effect( "pulsate" );
});
break;

case 0:
$( ".fireball" ).animate({ "left": "-=660px", "top": "+=500px" }, "slow", function(){
    $(".fireball").hide();
castlegame_liveplayer--;	//Dekrement the life of the player
    $( ".fireball" ).animate({ "left": "+=660px", "top": "-=500px" });	//Reset the fireball to the original position
    $( ".block" ).effect( "pulsate" );
});
break;

case 1:
$( ".fireball" ).animate({ "left": "-=420px", "top": "+=500px" }, "slow", function(){
    $(".fireball").hide();
castlegame_liveplayer--;	//Dekrement the life of the player
    $( ".fireball" ).animate({ "left": "+=420px", "top": "-=500px" });	//Reset the fireball to the original position
    $( ".block" ).effect( "pulsate" );
});
break;
}


document.getElementById("liveplayer").innerHTML = "Usted: " + castlegame_liveplayer;

if(castlegame_liveplayer == 0){
alert("0");
}
}


function castlegame_fire(){

switch(castlegame_characterposition){

case -1:
$(".fireball_player1").show();
$( ".fireball_player1" ).animate({ "left": "+=850px", "top": "-=300px" }, "slow", function(){
   $(".fireball_player1").hide();
castlegame_livecastle--;
   $( ".fireball_player1" ).animate({ "left": "-=850px", "top": "+=300px" });	//Reset the fireball to the original position
   $( "#castleimage" ).effect( "pulsate" );
});
break;
case 0:
$(".fireball_player2").show();
$( ".fireball_player2" ).animate({ "left": "+=610px", "top": "-=300px" }, "slow", function(){
   $(".fireball_player2").hide();
castlegame_livecastle--;
   $( ".fireball_player1" ).animate({ "left": "-=610px", "top": "+=300px" });	//Reset the fireball to the original position
   $( "#castleimage" ).effect( "pulsate" );
});
break;
case 1:
$(".fireball_player3").show();
$( ".fireball_player3" ).animate({ "left": "+=370px", "top": "-=300px" }, "slow", function(){
   $(".fireball_player3").hide();
castlegame_livecastle--;
   $( ".fireball_player1" ).animate({ "left": "-=370px", "top": "+=300px" });	//Reset the fireball to the original position
   $( "#castleimage" ).effect( "pulsate" );
});
break;
}

//Reduce the lives of the castle
document.getElementById("livecastle").innerHTML = "Castillo: " + castlegame_livecastle;

if(castlegame_livecastle == 0){
alert("0");
}

}
