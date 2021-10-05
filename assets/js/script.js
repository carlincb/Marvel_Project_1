var publicKey = "9a86508c139659fd39ae10d9e08ad609";
var privateKey = "6c71587e6cb4343819fe479a9d6cb26e66e14af3";

var currentURL = "https://developer.marvel.com:443/v1/public/characters?apikey=9a86508c139659fd39ae10d9e08ad609";


// create a current timestamp, both as a parameter to calculate your hash
// so we need to just look up how to calculate a timestamp
// then, combine them with the format
fetch(currentURL)
    .then((response) => response.json())
    .then(function (data) {
        console.log(data);

    });

var ts = 1;


var hash = CryptoJS.MD5(ts + privateKey + publicKey); // "29293939846c71587e6cb4343819fe479a9d6cb26e66e14af39a86508c139659fd39ae10d9e08ad609"

library(digest)
hash < - digest(paste0(ts, privateKey, publicKey), algo = "md5")