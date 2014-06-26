var firstimages = ["1:2_1","2:3","3:4","5:6","7:8","9:10","19:20"];
var selectionimages = ["1:2_2","1:3","1:4","1:6","1:8","1:10","1:20"];

var textfirstimage = ["1/2","2/3","3/4","5/6","7/8","9/10","19/20"];
var textsecondimage = ["1/2","1/3","1/4","1/6","1/8","1/10","1/20"];
var cheeseresulttexts = ["2/2","3/3","4/4","6/6","8/8","10/10","20/20"];

var cheese_solution;
var randomcheese;
var numberoftrys = 0;
var lastdroppedid;
var secondtext;
var secondimage;
var thirdimage;

function initialisecheesegame(){

//Hide the cheesebutton
$("#cheesebutton").hide();


var firstcheese = document.getElementById("firstcheese");
var cheese1 = document.getElementById("cheeseimage1");
var cheese2 = document.getElementById("cheeseimage2");
var cheese3 = document.getElementById("cheeseimage3");
var firsttext = document.getElementById("firsttext");
var cheseresulttext = document.getElementById("resulttext");
secondtext = document.getElementById("secondtext");

secondtext.innerHTML = "";

randomcheese = Math.floor(Math.random() * firstimages.length) + 1;

firstcheese.setAttribute("src", "./images/cheese/" + firstimages[randomcheese-1] + ".png");
firsttext.innerHTML = textfirstimage[randomcheese-1];
cheseresulttext.innerHTML = cheeseresulttexts[randomcheese-1];

//Choose a second image that is different from the solution image
var different = false;

do{

secondimage = Math.floor(Math.random() * selectionimages.length) + 1;

if(secondimage != randomcheese){
  different = true;
}

}while(different == false);

different = false;		//Reset the different variable

//Choose the third image that is different from the solution and the second image
do{

thirdimage = Math.floor(Math.random() * selectionimages.length) + 1;

if(thirdimage != randomcheese && thirdimage != secondimage){
  different = true;
}

}while(different == false);


//===============================================================

//Choose a random spot for the wright cheeese
var randomsolution = Math.floor(Math.random() * 3) + 1;

switch(randomsolution){

case 1:
cheesesolution = "cheeseimage1";
cheese1.setAttribute("src", "./images/cheese/" + selectionimages[randomcheese-1] + ".png");
cheese1.setAttribute("displaytext", textsecondimage[randomcheese-1]);
cheese2.setAttribute("src", "./images/cheese/" + selectionimages[secondimage-1] + ".png");
cheese2.setAttribute("displaytext", textsecondimage[secondimage-1]);
cheese3.setAttribute("src", "./images/cheese/" + selectionimages[thirdimage-1] + ".png");
cheese3.setAttribute("displaytext", textsecondimage[thirdimage-1]);
break;
case 2:
cheesesolution = "cheeseimage2";
cheese2.setAttribute("src", "./images/cheese/" + selectionimages[randomcheese-1] + ".png");
cheese1.setAttribute("src", "./images/cheese/" + selectionimages[secondimage-1] + ".png");
cheese3.setAttribute("src", "./images/cheese/" + selectionimages[thirdimage-1] + ".png");
cheese2.setAttribute("displaytext", textsecondimage[randomcheese-1]);
cheese1.setAttribute("displaytext", textsecondimage[secondimage-1]);
cheese3.setAttribute("displaytext", textsecondimage[thirdimage-1]);
break;
case 3:
cheesesolution = "cheeseimage3";
cheese3.setAttribute("src", "./images/cheese/" + selectionimages[randomcheese-1] + ".png");
cheese2.setAttribute("src", "./images/cheese/" + selectionimages[secondimage-1] + ".png");
cheese1.setAttribute("src", "./images/cheese/" + selectionimages[thirdimage-1] + ".png");
cheese3.setAttribute("displaytext", textsecondimage[randomcheese-1]);
cheese2.setAttribute("displaytext", textsecondimage[secondimage-1]);
cheese1.setAttribute("displaytext", textsecondimage[thirdimage-1]);
break;
 }
}

function dropped($id){

sound_blop.play();		//Play the blop sound if a chees is dropped

$("#cheesebutton").show();


secondtext.innerHTML = document.getElementById($id).getAttribute("displaytext");

numberoftrys++;
lastdroppedid = $id;
}


//Function that is clicked by the continue button
function checkcheese(){

sound_buttonclicked.play();

$("#cheeseimage1").animate({left:0,top:0});
$("#cheeseimage2").animate({left:0,top:0});
$("#cheeseimage3").animate({left:0,top:0});

if(lastdroppedid == cheesesolution)
{
checklavenderfields(numberoftrys)
}
else
{
alert("Nao e correcta");
}
}
