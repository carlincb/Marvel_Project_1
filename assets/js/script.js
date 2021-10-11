var categoryContainerEl = document.querySelector("#category-container");
var comicContainerEl = document.querySelector("#comic-container");
var mainBodyEls = document.querySelectorAll(".main-content");


var comicsBtn = document.querySelector("#comics-search");
var characterBtn = document.querySelector(".characters-search");
var creatorsBtn = document.querySelector(".creators-search");


$(".comics-search").on("click", function () {
  getComicData();
});
$(".characters-search").on("click", function () {
  getCharacterData();
});
$(".creators-search").on("click", function () {
  getCreatorData();
});

$("#search-container").on("click", ".cardBtn", function (event) {
    event.preventDefault();
    console.log(checked);
});

var publicKey = "9a86508c139659fd39ae10d9e08ad609";
var privateKey = "6c71587e6cb4343819fe479a9d6cb26e66e14af3";
console.log(publicKey);
console.log(privateKey);
var ts = Date.now();
console.log(ts);
var hash = ts + privateKey + publicKey;

var md5Hash = md5(hash);
console.log(md5Hash);

let comicURL =

  "http://gateway.marvel.com/v1/public/comics?" +

  "ts=" +
  ts +
  "&apikey=" +
  publicKey +
  "&hash=" +
  md5Hash;

console.log(comicURL);

let characterURL =
    "http://gateway.marvel.com/v1/public/characters?ts=" +
    ts +
    "&apikey=" +
    publicKey +
    "&hash=" +
    md5Hash;

// look at homework five for creating a dynamically loading page (create a separate js file)
// create a for loop to grab everything that we want

var offset = 0;
localStorage.setItem("offset", offset);

function getComicData(URL) {
  // var offset = 0;
  var url = "http://gateway.marvel.com/v1/public/comics?";
  // localStorage.setItem("offset", offset);
  localStorage.setItem("url", url);
console.log(URL)
  fetch(URL)
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      $('.main-content').empty();
      var comicCreators = [];

      for (let i = 0; i < data.data.results.length; i++) {
        var comics = data.data.results[i];
        var creatorNames = [];
        var comicImg = [];
        var creators = comics.creators.items;
        var img = comics.images;
        console.log("comic #" + i + ": " + creators.length);

        if (creators.length === 0) {
          // do something if there's no creators
        } else {
          // go through all the creators, and do something
          for (let i = 0; i < creators.length; i++) {
            creatorNames.push(creators[i].name);
          }
          for (let i = 0; i < img.length; i++) {
            comicImg.push(img[i].path);
          }
        }
        comicCreators.push({
          id: comics.id,
          title: comics.title,
          creators: creatorNames,
          imgpath: comicImg,
        });
}

function getCharacterData() {

  // var offset = 0;
  // localStorage.setItem("offset", offset);
  fetch(characterURL)
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      $('.main-content').empty();
      var comicCharacters = [];

      for (let i =0; i < data.data.results.length; i++) {
          var characters = data.data.results[i];
      
          comicCharacters.push({
            name: characters.name,
            description: characters.description,
            imgpath: characters.thumbnail.path,
          })};
          for (let k = 0; k < comicCharacters.length; k++) {
            var imgString = comicCharacters[k].imgpath + ".jpg";
            var characterImg = document.createElement('img');
            characterImg.setAttribute('src', imgString);
            characterImg.setAttribute('alt', "Image not avalailable");
            var nameEl = document.createElement('h2');
            nameEl.textContent = "Character Name: " + comicCharacters[k].name;
            // var idEl = document.createElement('h4');
            // idEl.textContent = "Comic ID#: " + comicCreators[k].id;
            var descriptionEl = document.createElement('h4');
            descriptionEl.textContent = "Description: " + comicCharacters[k].description;
            var characterCardEl = document.createElement('div');
            characterCardEl.classList.add('box');
            characterCardEl.append(characterImg, nameEl, descriptionEl);
            comicContainerEl.append(characterCardEl);
            comicContainerEl.classList.add('media-content', 'content');
          };

    
      
    })};

// Need event listener for the next or previous button
var nextBtn = document.querySelector("#next");
var prevBtn = document.querySelector("#previous");

$("#next").on('click', function() {
  var offset = parseInt(localStorage.getItem("offset"));
  offset += 20;
  localStorage.setItem("offset", offset);
  var newUrl =  localStorage.getItem("url") + "offset=" + offset + "&ts=" +
  ts +
  "&apikey=" +
  publicKey +
  "&hash=" +
  md5Hash;
  console.log(newUrl);
  getComicData(newUrl);
});

$("#previous").on('click', function() {
  var offset = parseInt(localStorage.getItem("offset"));
  offset -= 20;
  localStorage.setItem("offset", offset);
  var newUrl =  localStorage.getItem("url") + "offset=" + offset + "&ts=" +
  ts +
  "&apikey=" +
  publicKey +
  "&hash=" +
  md5Hash;
  getComicData(newUrl);
});

const funFactArray = [
    {
        fact: "Fact 1!",
    },
    {
        fact: "Fact 2!",
    },
    {
        fact: "Fact 3!",
    },
    {
        fact: "Fact 4!",
    },
    {
        fact: "Fact 5!",
    },
    {
        fact: "Fact 6!",
    },
    {
        fact: "Fact 7!",
    },
    {
        fact: "Fact 8!",
    },
    {
        fact: "Fact 9!",
    },
    {
        fact: "Fact 10!",
    },
];

function RandomFact() {
    $("fact-container").empty();
    var displayedFact =
        funFactArray[Math.floor(Math.random() * funFactArray.length)].fact;
    console.log(displayedFact);
    var h3El = document.createElement("h3");
    h3El.textContent = displayedFact;
    factContainerEl.appendChild(h3El);
}

function init() {
    RandomFact();
}

init();

