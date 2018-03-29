let percentage = parseInt(window.prompt("geef uw percentage in"));
let resultaat = function () {
if (percentage > 50 && percentage < 68) { 
document.getElementById("resultaat").innerHTML = "voldoende"}

else if (percentage > 68 && percentage < 77) {
    document.getElementById("resultaat").innerHTML = "onderscheiding"}
   
else if (percentage > 77 && percentage < 85) {
    document.getElementById("resultaat").innerHTML = "grote onderscheiding"}

else if (percentage > 85 && percentage < 90) { 
    document.getElementById("resultaat").innerHTML = "grootste onderscheiding"}
    
else if (percentage > 90 && percentage <101) {
    document.getElementById("resultaat").innerHTML = "ideal"}    
};

