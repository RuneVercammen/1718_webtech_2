
let knop = document.getElementById("knop")
// functie expressie om JSON-request via url uit te voeren
const getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};
//let voornaam = window.prompt("geef uw voornaam in")
//let achternaam = window.prompt("geef uw achternaam in")
knop.addEventListener("click",function(event){
    let voornaam = document.getElementById("voornaam").value;
    let achternaam = document.getElementById("achternaam").value;
    
    
    // get json data
    getJSON('http://api.icndb.com/jokes/random?firstName='+ voornaam + '&lastName='+achternaam +'', function(error, data) {
        
        // show error
        if(error) {
            
            // do something here
            
            return false;
        }   
        console.log(data.value.joke);
        let godverdomme = document.getElementById("godverdomme")
        godverdomme.innerHTML = data.value.joke
        
    });
})



