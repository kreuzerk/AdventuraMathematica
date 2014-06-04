var corners_data = [90, 45, 180, 200, 220, 10, 20, 50, 60, 75, 90, 15, 25, 90, 180, 45];
//45, 90, 180 occur multiple times because they are more important than oder corners
var used_corner_date = new Array(4); //In this array we will store all the Numbers that are already used

//Important to make sure that each one is only used once

function initialisecirclegame(){

var exists;

for(var i=0; i < used_corner_date.length; i++){
do{

exists = false;

var randomnumber = Math.floor(Math.random() * corners_data.length);

//Second for loop that ensure that each value is only used once
for(var j = 0; j< used_corner_date.length; j++){
	if(used_corner_date[j] == corners_data[randomnumber]){
		exists = true;
		break;	
	}

}//End second for

if(exists == false){
used_corner_date[i] = corners_data[randomnumber];
var kendocircle = document.getElementById("circleh1_" + (i+1));
kendocircle.innerHTML = corners_data[randomnumber] + "°";
}

}while(exists == true);
}//End first for

}//End of the function


/*==============================================================
Function for checking the circlegame
==============================================================*/
function checkcirclegame(){

var everything_correct = true;

for(var i = 0; i< used_corner_date.length; i++){
var value = document.getElementById("kendocircle" +(i+1)).value;

if(value != used_corner_date[i]){
everything_correct = false;
break;
}
} //End for loop

if(everything_correct){
alert("richtig");
}
else{
alert("falsch");
}

}
