let checkEvenOrOdd = function () {
    let number = document.getElementById('someNumber').value;
    let rest = number % 2;

if (rest === 0) {
    document.write('elaba, je getal is even')
}
else{
    document.write('nou nou, je getal is oneven')
}
}
document.getElementById('checkInput').addEventListener('click',checkEvenOrOdd);
