var deliverydiv;
var deliverybutton1;
var deliver;	//Boolean

function deliverbananas(){

deliverydiv = document.getElementById("bananadelivery");
deliverybutton1 = document.getElementById("deliverybutton1");

if(bananacounter >= 50){
deliverydiv.style.backgroundImage = 'url(../images/delivery/deliveryok.png)';
deliver = true;
}
else{
deliverydiv.style.backgroundImage = 'url(../images/delivery/deliveryfailure.png)';
deliver = false;
}

//Hide the secon button
$("#deliverybutton2").hide();

//Change the first button
deliverybutton1.innerHTML = "Ok";
deliverybutton1.setAttribute("onclick", "deliveryokclicked()");

}

function notdeliverbananas(){

}

function deliveryokclicked(){

//Revert all the changes
deliverybutton1.innerHTML = "Si";
$("#deliverybutton2").show();
deliverybutton1.setAttribute("onclick", "deliverbananas()");
deliverydiv.style.backgroundImage = 'url(../images/delivery/bananadelivery.png)';

if(deliver){
checkgoldenfields(true);
}
else{
checkgoldenfields(false);
}


}
