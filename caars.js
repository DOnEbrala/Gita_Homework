"use strict";

// import cars from './CArs.json' assert { type: 'json' };

var myInit = {method: 'GET',
              headers: {
                    'Content-Type': 'application/json'
              },
              mode: 'cors',
              cache: 'default'};

let myRequest = new Request("./CArs.json", myInit);


fetch(myRequest)
    .then(function(resp) {
       return resp.json();
})
.then (function(cars){
    console.log(cars);
});