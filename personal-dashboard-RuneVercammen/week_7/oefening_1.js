// declaratie van de overview
const parkingOverview = document.getElementById('parking-overview');

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
let voornaam = window.prompt("geef uw voornaam in")
let achternaam = window.prompt("geef uw achternaam in")

// get json data
getJSON('http://api.icndb.com/jokes/random?firstName='+ voornaam + '&lastName='+achternaam +'', function(error, data) {
    
    // show error
    if(error) {
        
        // do something here

        return false;
    }

    // loop through all parking places
    for(let i = 0; i < data.length; i++) {

        // current parking object
        let parking = data[i];

        // do magic here
    }
    console.log(data);
    console.log(data.value);
    console.log(data.value.joke);
    document.write(data.value.joke);
});





