var colors = ["yellow", "green", "blue", "red", "orange"];


function drawforms(){

alert("Hier");

var numberrect = Math.floor(Math.random() * 10) + 1;
var numbercircle = Math.floor(Math.random() * 10) + 1;
var numberelipses = Math.floor(Math.random() * 10) + 1;

//Drawing the rects
for(var i = 0; i < numberrect; i++){

var x = Math.floor(Math.random() * 520) + 1;
var y = Math.floor(Math.random() * 750) + 1;

var rectanglewidth = Math.floor(Math.random() * 80) + 20;
var rectangleheight = Math.floor(Math.random() * 80) + 20;

formsvg.append("rect")
                            .attr("x", x).attr("id", "rects" + i).attr("onclick", "colorize($(this).attr('id'))")
                            .attr("y", y)
                            .attr("width", rectanglewidth)
                            .attr("height", rectangleheight)
			    .attr("fill", "grey");
}


//Drawing a circle
for(var i = 0; i < numbercircle; i++){

var x = Math.floor(Math.random() * 520) + 1;
var y = Math.floor(Math.random() * 750) + 1;

var circleradius = Math.floor(Math.random() * 80) + 20;

formsvg.append("circle")
                        .attr("cx", x).attr("id", "circle" + i).attr("onclick", "colorize($(this).attr('id'))")
                        .attr("cy", y)
                        .attr("r", circleradius)
			.attr("fill", "grey");

}

//Drawing an elipse
for(var i = 0; i < numberelipses; i++){

var elipse_x = Math.floor(Math.random() * 520) + 1;
var elipse_y = Math.floor(Math.random() * 750) + 1;

var elipsewidth = Math.floor(Math.random() * 80) + 20;
var elipseheight = Math.floor(Math.random() * 80) + 20;

var circle = svgContainer.append("ellipse").attr("id","ellipse" + i).attr("onclick", "colorize($(this).attr('id'))")
                         .attr("cx", x)
                         .attr("cy", y)
                         .attr("rx", elipsewidth)
                         .attr("ry", elipseheight);

}


form1_next();
}

function form1_next(){



formquestionssvg.append("text")
      .attr("x", 50)
      .attr("y", 300)
      .text("Rectángulo")
      .attr("font-family", "Chalkboard")
      .attr("font-size", "50px")
      .attr("fill", "black");


}



function colorize($id){

var color = Math.floor(Math.random() * colors.length) + 1;
var element = document.getElementById($id);

element.setAttribute("fill", colors[color]);

}

