var castlegame_characterposition = 0;
var castlegame_result = new Array(3); //Here we store the three results
var castlegame_liveplayer;
var castlegame_livecastle;

function castlegame_resetlives(){
castlegame_liveplayer = 3;
castlegame_livecastle = 3;
}

function castlegame_initialise(){

document.getElementById("castlegame_maincaracter").setAttribute("src", filename);

$( ".fireball" ).hide();
$( ".fireball_player1" ).hide();
$( ".fireball_player2" ).hide();
$( ".fireball_player3" ).hide();

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
sound_woosh.play();
$( ".block" ).animate({ "left": "-=240px" }, "slow" );
}
else{
castlegame_characterposition = -1;	//Provend that the character goes to far
}
}

function castlegame_go_right(){

castlegame_characterposition++; 	//Inkrement the castlegame_characterposition

if(castlegame_characterposition == 1 || castlegame_characterposition == 0){
sound_woosh.play();
$( ".block" ).animate({ "left": "+=240px" }, "slow" );
}
else{
castlegame_characterposition = 1;	//Provend that the character goes to far
}
}

function castlegame_castle_fire(){

sound_gunshoot.play();
$( ".fireball" ).show();

var left;

//Fire depending on the position of the caracter
switch(castlegame_characterposition){

case -1:
left = "900";
break;
case 0:
left = "660";
break;
case 1:
left = "420";
break;
}

$( ".fireball" ).animate({ "left": "-=" + left + "px", "top": "+=500px" }, "slow", function(){
    $(".fireball").hide();
castlegame_liveplayer--;	//Dekrement the life of the player
document.getElementById("liveplayer").innerHTML = "Usted: " + castlegame_liveplayer;
    $( ".fireball" ).animate({ "left": "+=" + left + "px", "top": "-=500px" });	//Reset the fireball to the original position
    sound_bomb.play();
    $( ".block" ).effect( "pulsate" );
if(castlegame_liveplayer == 0){
checksilver(false);
}
else{
castlegame_initialise();
}
});


}


function castlegame_fire(){

var left;
var id;

sound_gunshoot.play();

switch(castlegame_characterposition){
case -1:
left = "850";
id="fireball_player1";
break;
case 0:
left = "610";
id="fireball_player2";
break;
case 1:
left = "370";
id="fireball_player3";
break;
}

$("." + id).show();
$( "." + id ).animate({ "left": "+=" + left + "px", "top": "-=300px" }, "slow", function(){
   $("." + id).hide();
castlegame_livecastle--;
document.getElementById("livecastle").innerHTML = "Castillo: " + castlegame_livecastle;
   $( "." + id ).animate({ "left": "-=" + left + "px", "top": "+=300px" });	//Reset the fireball to the original position
   sound_bomb.play();
   $( "#castleimage" ).effect( "pulsate" );

if(castlegame_livecastle == 0){
checksilver(true);
}
else{
castlegame_initialise();
}
});

}
