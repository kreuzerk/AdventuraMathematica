
function drawform1(){

//Drawing the head
formsvg.append("circle")
                        .attr("cx", 300)
                        .attr("cy", 100)
                        .attr("r", 80)
			.attr("fill", "grey");


//Draw the body
formsvg.append("rect")
                            .attr("x", 220)
                            .attr("y", 180)
                            .attr("width", 160)
                            .attr("height", 250)
			    .attr("fill", "grey");

//Draw the left arm
formsvg.append("rect")
                            .attr("x", 120)
                            .attr("y", 180)
                            .attr("width", 100)
                            .attr("height", 50)
			    .attr("fill", "grey");

//Draw the right arm
formsvg.append("rect")
                            .attr("x", 380)
                            .attr("y", 180)
                            .attr("width", 100)
                            .attr("height", 50)
			    .attr("fill", "grey");

//Draw the left food
formsvg.append("rect")
                            .attr("x", 220)
                            .attr("y", 430)
                            .attr("width", 50)
                            .attr("height", 250)
			    .attr("fill", "grey");


//Draw the right food
formsvg.append("rect")
                            .attr("x", 330)
                            .attr("y", 430)
                            .attr("width", 50)
                            .attr("height", 250)
			    .attr("fill", "grey");

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

formquestionssvg.append("rect")
                            .attr("x", 50)
                            .attr("y", 380)
                            .attr("width", 50)
                            .attr("height", 250)
			    .attr("fill", "grey");
}

function colorize($id){


}
