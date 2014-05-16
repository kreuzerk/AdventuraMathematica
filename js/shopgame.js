var cart_x = 130;
var cart_y = 100;
var names = ["Futbol", "Jabon", "Guitarra", "Bola","Soportar"];
var prices = [25, 5, 98, 30, 18];
var actualtotal = 0;
var counter = 1;
var total = 0;

function addelement($src, $number){

svgelement.append("svg:image")
      		.attr("xlink:href", $src)
      		.attr("width", 80)
      		.attr("height", 80).attr("x", cart_x).attr("y", cart_y);

//Make sure that the elments are added properly
if(counter < 5){
cart_x = cart_x + 30;
}


if(counter > 5){

cart_y = 80;
cart_x = cart_x - 30;
}


if(counter > 10){

cart_y = 60;
cart_x = cart_x + 30;
}

if(counter > 15){

cart_y = 40;
cart_x = cart_x - 30;
}

if(counter > 20){
alert("Maximo de 20 elementos");
}

addelementtolist($number);
}

function addelementtolist($number){


var itemtd = document.getElementById("item" + counter);
var pricetd = document.getElementById("price" + counter);
itemtd.innerHTML = names[$number] + " ";
pricetd.innerHTML = prices[$number] +  " Sol";

actualtotal += prices[$number];
counter++;


}


//This function is called by the 'Vaciar' Button


function clearlist(){
for(var i = 1; i <= 20; i++){
  var tditem = document.getElementById("item" + i);
  var tdprice = document.getElementById("price" + i);

  tditem.innerHTML = "";
  tdprice.innerHTML = "";
}


//Clear all images
$("#shopsvg").empty();

//Redraw the cart
svgelement.append("svg:image").attr("id", "cart")
      		.attr("xlink:href", "./images/Shop/cart.png")
      		.attr("width", 450)
      		.attr("height", 250).attr("x", 20).attr("y",50);

//Reset the attributes
actualtotal = 0;
cart_x = 130;
cart_y = 100;
counter = 1;
}


//This function is called by the Pagar button
function pagar(){

if(actualtotal == total){
  correctblue();
}
else{
  wrongblue();
}

}


function createexercise(){


//Initialise the variables with a first value
counter = 1;
cart_x = 130;
cart_y = 100;
actualtotal = 0;
total = 0;


//Create the total the child must calculate
for(var i=0; i < 10; i++){
var randomitem = Math.floor(Math.random() * 5) + 1;
total += prices[randomitem-1];
}


var itemtd = document.getElementById("item21");
var pricetd = document.getElementById("price21");

itemtd.innerHTML = "Total";
pricetd.innerHTML = total + " Sol";
}
