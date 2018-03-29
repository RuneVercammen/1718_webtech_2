console.log("hello world");

let time=window.prompt("voer het aantal seconden in");
time = parseInt(time);

const hour = Math.floor(time/3600);
const minute = Math.floor((time - (hour*3600))/60);
const second = time - (hour*3600) - (minute*60);

let answer= hour + " uur " + minute + " minuten " + second + " seconden ";
document.write("<div>" + time + " seconden is " + answer + "</div>");

