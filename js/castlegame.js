var castlegame_characterposition = 0;

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

function testfireballmovement(){
$( ".fireball" ).animate({ "left": "+=500px", "top": "+=500px" }, "slow", function(){
   $(".fireball").hide();
});
}


function castlegame_fire(){

switch(castlegame_characterposition){

case -1:
$( ".fireball_player1" ).animate({ "left": "+=850px", "top": "-=300px" }, "slow", function(){
   $(".fireball_player1").hide();
});
break;
case 0:
$( ".fireball_player2" ).animate({ "left": "+=610px", "top": "-=300px" }, "slow", function(){
   $(".fireball_player2").hide();
});
break;
case 1:
$( ".fireball_player3" ).animate({ "left": "+=370px", "top": "-=300px" }, "slow", function(){
   $(".fireball_player3").hide();
});
break;
}


//Effect for the castle
//$( "#" + $id ).effect( "shake" );


}
