

function bossgame_go_left($id){
$( ".block" ).animate({ "left": "-=500px" }, "slow" );
}

function bossgame_go_right(){
$( ".block" ).animate({ "left": "+=500px" }, "slow" );
}

function testfireballmovement(){
$( ".fireball" ).animate({ "left": "+=500px", "top": "+=500px" }, "slow", function(){
   $(".fireball").hide();
});
}