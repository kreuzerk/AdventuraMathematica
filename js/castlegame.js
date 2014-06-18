var castlegame_characterposition = 0;

function castlegame_initialise(){

$( ".fireball" ).hide();
$( ".fireball_player1" ).hide();
$( ".fireball_player2" ).hide();
$( ".fireball_player3" ).hide();

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
    $( ".fireball" ).animate({ "left": "+=900px", "top": "-=500px" });	//Reset the fireball to the original position
});
break;

case 0:
$( ".fireball" ).animate({ "left": "-=660px", "top": "+=500px" }, "slow", function(){
    $(".fireball").hide();
    $( ".fireball" ).animate({ "left": "+=660px", "top": "-=500px" });	//Reset the fireball to the original position
});
break;

case 1:
$( ".fireball" ).animate({ "left": "-=420px", "top": "+=500px" }, "slow", function(){
    $(".fireball").hide();
    $( ".fireball" ).animate({ "left": "+=420px", "top": "-=500px" });	//Reset the fireball to the original position
});
break;
}
}


function castlegame_fire(){

switch(castlegame_characterposition){

case -1:
$(".fireball_player1").show();
$( ".fireball_player1" ).animate({ "left": "+=850px", "top": "-=300px" }, "slow", function(){
   $(".fireball_player1").hide();
   $( ".fireball_player1" ).animate({ "left": "-=850px", "top": "+=300px" });	//Reset the fireball to the original position
   $( "#castleimage" ).effect( "pulsate" );
});
break;
case 0:
$(".fireball_player2").show();
$( ".fireball_player2" ).animate({ "left": "+=610px", "top": "-=300px" }, "slow", function(){
   $(".fireball_player2").hide();
   $( ".fireball_player1" ).animate({ "left": "-=610px", "top": "+=300px" });	//Reset the fireball to the original position
   $( "#castleimage" ).effect( "pulsate" );
});
break;
case 1:
$(".fireball_player3").show();
$( ".fireball_player3" ).animate({ "left": "+=370px", "top": "-=300px" }, "slow", function(){
   $(".fireball_player3").hide();
   $( ".fireball_player1" ).animate({ "left": "-=370px", "top": "+=300px" });	//Reset the fireball to the original position
   $( "#castleimage" ).effect( "pulsate" );
});
break;
}


//Effect for the castle



}
