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



if(counter > 5){

cart_y = 80;
cart_x = cart_x - 30;
}
else{
cart_x = cart_x + 30;
}

addelementtolist($number);
createexercise();
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
for(var i = 1; i <= 10; i++){
  var tditem = document.getElementById("item" + i);
  var tdprice = document.getElementById("price" + i);

  tditem.innerHTML = "";
  tdprice.innerHTML = "";
}

actualtotal = 0;
}


//This function is called by the Pagar button
function pagar(){

if(actualtotal = total){
  alert("Korrekt");
}
else{
 alert("Falsch");
}

}


function createexercise(){

//Create the total the child must calculate
for(var i=0; i < 10; i++){
var randomitem = Math.floor(Math.random() * 5) + 1;
total += prices[randomitem-1];
}

var itemtd = document.getElementById("item11");
var pricetd = document.getElementById("price11");

itemtd.innerHTML = "Total";
pricetd.innerHTML = total + " Sol";
}
