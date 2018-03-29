console.log("hello")
let getal=  parseInt(window.prompt("vul uw getal op 50 in"))
console.log(getal)
if(getal>50){document.write("gelieve een getal kleiner dan of gelijk aan 50 in te voeren")}
else if(getal>=25){document.write("proficiat")}
else if(getal<25 && getal>0){document.write("helaas")}
else if(getal<0){document.write("gelieve een getal boven nul in te voeren ")}
else{document.write("gelieve een getal in te voeren")}