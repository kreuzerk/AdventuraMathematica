

function initialise_grid_adi_game(){

for(var i = 1; i<=3; i++){

var table = document.getElementById("gridaditable" + i);

for(var j = 0; j<10; j++){

var tr = document.createElement("tr");

for(var k = 0; k <10; k++){

var td = document.createElement("td");
td.setAttribute("class", "gridaditd");
tr.appendChild(td);
}

table.appendChild(tr);
}
}

}
