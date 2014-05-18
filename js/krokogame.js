
function createkrokogame(){

//Using multiplications inside 12x12. For reasons see the documentation

var multiplier1 = Math.floor(Math.random() * 12) + 1;
var fishes1 = Math.floor(Math.random() * 12) + 1;
var multiplier2 = Math.floor(Math.random() * 12) + 1;
var fishes2 = Math.floor(Math.random() * 12) + 1;

//Change the text of the multipliers
var multipliertext1 = document.getElementById("multiplier1");
var multipliertext2 = document.getElementById("multiplier2");

multipliertext1.textContent = multiplier1 + " x";
multipliertext2.textContent = "x " + multiplier2;

//Create the variables for the image position
var x_fish = 180;
var y_fish = -80;

//Draw the fishes for the first water hole
for(var i=0; i<fishes1; i++){

if(i%2 == 0){
x_fish = 180;
y_fish = y_fish+90;
}
else{
x_fish = 290;
}


kroksvg.append("svg:image")
      .attr("xlink:href", "./images/Krokogame/Fish.png").attr("id", "fish1" + i)
      .attr("width", 80)
      .attr("height", 80).attr("x", x_fish).attr("y",y_fish);
}

x_fish = 830;
y_fish = -80;

//Draw the fishes for the second water hole
for(var i=0; i<fishes2; i++){

if(i%2 == 0){
x_fish = 830;
y_fish = y_fish+90;
}
else{
x_fish = 940;
}


kroksvg.append("svg:image")
      .attr("xlink:href", "./images/Krokogame/Fish.png").attr("id", "fish2" + i)
      .attr("width", 80)
      .attr("height", 80).attr("x", x_fish).attr("y",y_fish);
}

}
