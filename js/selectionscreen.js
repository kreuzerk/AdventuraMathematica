
var selectedcharacter = null;

function characterclicked($id){

if(selectedcharacter != null){
  selectedcharacter.style.backgroundColor="white";
}

selectedcharacter = document.getElementById($id);
selectedcharacter.style.backgroundColor='lightskyblue';

}

//Function that is called by the button
function characterselectioncontinue(){

if(selectedcharacter == null){
$( "#startscreendialog" ).dialog( "open" );
}
else{
$("#caracterselection").hide();

//Adding an image
svgContainer.append("svg:image")
      .attr("xlink:href", selectedcharacter.getAttribute("src")).attr("id", "Lion")
      .attr("width", 100)
      .attr("height", 100).attr("x", 0).attr("y",680);

setfilename(selectedcharacter.getAttribute("src"));
$("#maingamesvg").show();
}

}
