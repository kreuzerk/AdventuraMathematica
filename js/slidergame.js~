var sliderexercises = ["1/10", "1/20", "1/4", "1/5", "1/2", "2/4", "3/4", "2/10", "4/10", "5/10", "4/8", "7/7", "4/8", "2/20", "8/20"];

function initialiseslidergame(){



for(var i=1; i<=4; i++){
var randomnumber = Math.floor(Math.random() * sliderexercises.length) + 1;
var h = document.getElementById("sliderh" + i); 
h.innerHTML = sliderexercises[randomnumber-1];

//Reset the slider
var slider = document.getElementById("slider" + i);
slider.value = 0;

}
}

//Function for the slider changes
function onsliderchange($value, $number){

var value = document.getElementById("valor" + $number);

value.innerHTML = "Valor : " + $value; 

}

function controlslidergame(){

var iscorrect = true;


for(var i=1; i<=4; i++){

var h = document.getElementById("sliderh" + i); 

var results = h.innerHTML.split("/");
var result = (parseInt(results[0]) / parseInt(results[1])) *100;

//Get the values from the slider
var slider = document.getElementById("slider" + i);

if(slider.value != result){
  iscorrect = false;
  break;
}
}

if(iscorrect){
checkkhakifields(true);
}
else
{
checkkhakifields(false);
}

}
