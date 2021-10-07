categoryContainerEl = document.querySelector('#category-container');

$('#search-container').on('click', '.cardBtn', function(event) {
      event.preventDefault();
      console.log(checked);
});

var publicKey = "9a86508c139659fd39ae10d9e08ad609";
var privateKey = "6c71587e6cb4343819fe479a9d6cb26e66e14af3";
console.log(publicKey);
console.log(privateKey);
var ts = Date.now();
console.log(ts);
var hash = (ts + privateKey + publicKey);

var md5Hash = md5(hash);
console.log(md5Hash);

let currentURL = "http://gateway.marvel.com/v1/public/comics?ts=" + ts + "&apikey=" + publicKey + "&hash=" + md5Hash;
console.log(currentURL);

// look at homework five for creating a dynamically loading page (create a separate js file)
// create a for loop to grab everything that we want

function getData() {

  fetch(currentURL)
      .then((response) => response.json())
      .then(function (data) {
        console.log(data);
        // var creator = data.data.results[0].creators.items[0].name;
          // console.log(creator);
          var comicCreators = [];

          for (var i=0; i < data.data.results.length; i++) {

          var comics = data.data.results[i];
          var creatorNames = [];
          var creators = comics.creators.items;
          
          console.log("comic #" + i + ": " + creators.length);
      

          if (creators.length === 0) {
            // do something if there's no creators
          } else {

            // go through all the creators, and do something
            for (let i =0; i< creators.length; i++) {
              creatorNames.push(creators[i].name);
            }
          }

          // comicCreators[comics.id] = {
          //   title: comics.title,
          //   creators: creatorNames,
          // };
          comicCreators.push(
            {id: comics.id, title: comics.title, creators: creatorNames}
          )
        }

        console.log("-------creator -------------")
        console.log(comicCreators);
    })
  };  

  // function getCreator(input) {
  //   var data = input;
  //   console.log(data);
  //   for (var i=0; i < data.length; i++) {
  //     var creator = data.data.results[i].creators.items[0].name;
  //     console.log(creator);
  //   }
  // };
// href on an anchor tag for the links in the directory


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

var factPlaceholder = document.getElementById("cat-fact");
var showFact = document.getElementById("show-fact");

/* Facts from this API: https://fact.birb.pw/api/v1/cat */

var CatFacts = ["The ancient Egyptians were the first to tame the cat (in about 3000 BC), and used them to control pests.",
               "Cats share 95.6% of their DNA with tigers.",
               "Cats are asleep for 70% of their lives.",
               "Cat kidneys are super efficient, they can rehydrate by drinking seawater.",
               "Kittens who are taken along on short, trouble-free car trips to town tend to make good passengers when they get older. They get used to the sounds and motions of traveling and make less connection between the car and the visits to the vet."]

var factNumber;

function randomFact(){
  return CatFacts[factNumber];
}

showFact.addEventListener('click', function(){
  factNumber = Math.floor(Math.random()*5);
  factPlaceholder.textContent = randomFact();
});
