var deliverydiv;
var deliverybutton1;
var deliver;	//Boolean
var bananadelivery_speechbuble;

function getdeliveryelements(){
deliverydiv = document.getElementById("bananadelivery");
deliverybutton1 = document.getElementById("deliverybutton1");
 bananadelivery_speechbuble = document.getElementById("bananadelivery_speechbubble");
}

function initialise_delivery_screen(){

getdeliveryelements();

deliverydiv.style.backgroundImage = imagepath_bananadelivery;
bananadelivery_speechbubble.innerHTML = "Me encantan los plátanos <br /> Me da 50?";
}

function deliverbananas(){

sound_buttonclicked.play();
sound_monkey.play();

if(bananacounter >= 50){

bananadelivery_speechbubble.innerHTML = "Gracias. <br /> Toma este dineiro.";
deliver = true;
}
else{

bananadelivery_speechbubble.innerHTML = "Lo siento. <br /> Tu no tiene suficientes plátanos. <br /> Inténtelo de nuevo más tarde.";
deliver = false;
}

//Hide the secon button
$("#deliverybutton2").hide();

//Change the first button
deliverybutton1.innerHTML = "Ok";
deliverybutton1.setAttribute("onclick", "deliveryokclicked()");

}

/*================================
Function for not delivering bananas
==================================*/

function notdeliverbananas(){

sound_buttonclicked.play();
sound_monkey.play();

getdeliveryelements();


bananadelivery_speechbubble.innerHTML = "Okay. <br /> Nos vemos más tarde.";

//Change the first button
deliverybutton1.innerHTML = "Ok";
deliverybutton1.setAttribute("onclick", "deliveryokclicked()");

//Hide the secon button
$("#deliverybutton2").hide();
}

function deliveryokclicked(){

sound_buttonclicked.play();

delivery_revertchanges();

if(deliver){
checkgoldenfields(true);
}
else{
checkgoldenfields(false);
}
}

function delivery_revertchanges(){
//Revert all the changes
deliverybutton1.innerHTML = "Si";
$("#deliverybutton2").show();
deliverybutton1.setAttribute("onclick", "deliverbananas()");
deliverydiv.style.backgroundImage = imagepath_bananadelivery;
}
