var publicKey = "9a86508c139659fd39ae10d9e08ad609";
var privateKey = "6c71587e6cb4343819fe479a9d6cb26e66e14af3";
console.log(publicKey);
console.log(privateKey);
var ts = Date.now();
console.log(ts);
var hash = (ts + privateKey + publicKey);

var md5Hash = md5(hash);
console.log(md5Hash);
var tsURL = JSON.stringify(ts);

// create a current timestamp, both as a parameter to calculate your hash
// so we need to just look up how to calculate a timestamp
// then, combine them with the format

let currentURL = "http://gateway.marvel.com/v1/public/comics?ts=" + tsURL + "&apikey=" + publicKey + "&hash=" + md5Hash;
console.log(currentURL);

fetch(currentURL)
    .then((response) => response.json())
    .then(function (data) {
        console.log(data);
    });

  // Function and array for random fact

  const funFactArray = [
    {
      fact : "Fact 1!"
    },
    {
      fact : "Fact 2!"
    },
    {
      fact : "Fact 3!"
    },
    {
      fact : "Fact 4!"
    },
    {
      fact : "Fact 5!"
    },
    {
      fact : "Fact 6!"
    },
    {
      fact : "Fact 7!"
    },
    {
      fact : "Fact 8!"
    },
    {
      fact : "Fact 9!"
    },
    {
      fact : "Fact 10!"
    },
  ]

  function RandomFact () {
      $('fact-container').empty();
      var displayedFact = funFactArray[Math.floor(Math.random() * funFactArray.length)].fact;
      console.log(displayedFact);
      var h3El = document.createElement('h3');
      h3El.textContent = displayedFact;
      factContainerEl.appendChild(h3El);
  };

  function init () {
    RandomFact();
  };

  init();