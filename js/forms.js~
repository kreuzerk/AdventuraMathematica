var picturenames = ["baseball.png","basketball.png","billiardball.png",
"book.png","chocolate.png","football.png","geotriangle.png","gift.png","musictriangle.png",
"rectangle.png","redball.png","square.png","television.png","triangle.png","triangle2.png"];

function createformsgame(){

var x = 40;
var y = -100;

//Draw 20 images to the screen
for(var i = 0; i < 20; i++){

var number = diceresult = Math.floor(Math.random() * picturenames.length) + 1;

if(i%4 == 0){ //If true == End of the row
y = y + 140;
x = 40;
}
else{
x = x + 140;
}

formsvg.append("svg:image")
      .attr("xlink:href", "./images/Forms/" + picturenames[number])
      .attr("width", 100)
      .attr("height", 100).attr("x", x).attr("y",y);
}

}//End of the method
