var deliverydiv;
var deliverybutton1;
var deliver;	//Boolean

function getdeliveryelements(){
deliverydiv = document.getElementById("bananadelivery");
deliverybutton1 = document.getElementById("deliverybutton1");
}

function initialise_delivery_screen(){

getdeliveryelements();

deliverydiv.style.backgroundImage = imagepath_bananadelivery;

}

function deliverbananas(){


if(bananacounter >= 50){
deliverydiv.style.backgroundImage = imagepath_deliveryok;
deliver = true;
}
else{
deliverydiv.style.backgroundImage = imagepath_deliveryfailure;
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

getdeliveryelements();

deliverydiv.style.backgroundImage = imagepath_nodelivery;

//Change the first button
deliverybutton1.innerHTML = "Ok";
deliverybutton1.setAttribute("onclick", "deliveryokclicked()");

//Hide the secon button
$("#deliverybutton2").hide();
}

function deliveryokclicked(){

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
