let fruit =  ["appel ", "peer ", "banaan ", "appelsien ", "druif "];
let div = document.getElementById("ffs");
let whatever = function(arrayName) {
    for (let i=0; i<arrayName.length; i++){
        div.innerHTML += arrayName[i];
    }
    }
whatever(fruit)