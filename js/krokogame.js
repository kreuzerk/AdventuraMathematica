
function createkrokogame(){

kroksvg.append("rect")
                            .attr("x", 150)
                            .attr("y", 10)
                            .attr("width", 250)
                            .attr("height", 550)
			    .attr("fill", "lightblue");

		kroksvg.append("rect")
                            .attr("x", 800)
                            .attr("y", 10)
                            .attr("width", 250)
                            .attr("height", 550)
			    .attr("fill", "lightblue");

		//Adding the Text for the multiplikations
		kroksvg.append("text").attr("id", "multiplier1")
      			.attr("x", 20)
      			.attr("y", 300)
      			.text("1 x")
      			.attr("font-family", "Chalkboard")
      			.attr("font-size", "50px")
      			.attr("fill", "black");

		kroksvg.append("text").attr("id", "multiplier2")
      			.attr("x", 1080)
      			.attr("y", 300)
      			.text("1 x")
      			.attr("font-family", "Chalkboard")
      			.attr("font-size", "50px")
      			.attr("fill", "black");



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

} //End of CreateKrokogamefunction


function drawcroco($sign){

switch ($sign){

case ">":
kroksvg.append("svg:image")
      .attr("xlink:href", "./images/Krokogame/crocoleft.png").attr("id", "crocoleft")
      .attr("width", 300)
      .attr("height", 200).attr("x", 450).attr("y",200);
break;
case "<":
kroksvg.append("svg:image")
      .attr("xlink:href", "./images/Krokogame/crocoright.png").attr("id", "crocoleft")
      .attr("width", 300)
      .attr("height", 200).attr("x", 450).attr("y",200);
break;
case "=":
kroksvg.append("svg:image")
      .attr("xlink:href", "./images/Krokogame/crocoleft.png").attr("id", "crocoleft")
      .attr("width", 300)
      .attr("height", 200).attr("x", 450).attr("y",100);

kroksvg.append("svg:image")
      .attr("xlink:href", "./images/Krokogame/crocoright.png").attr("id", "crocoleft")
      .attr("width", 300)
      .attr("height", 200).attr("x", 450).attr("y",300);
break;
 }
}
