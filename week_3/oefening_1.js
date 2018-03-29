let lijst;
let startvalue=parseInt(window.prompt("voer uw startgetal in"))
let endvalue=parseInt(window.prompt("voer uw eindgetal in"))
for(i= startvalue; i<= endvalue; i++){
    if(i % 3 === 0 && i % 5 === 0){
        lijst = "bitterbal <br>";
    }else if(i % 5 === 0){
        lijst = "bal <br>";
    }else if(i % 3 === 0){
        lijst = "bitter <br>";
    }else{lijst = i + "<br>";
    }
    document.getElementById("lijst").innerHTML += lijst;
}