var categoryContainerEl = document.querySelector("#category-container");
var comicContainerEl = document.querySelector("#comic-container");
var mainBodyEls = document.querySelectorAll(".main-content");
var jQueryComicContainer = $("#comic-container");

var factContainerEl = document.querySelector("#marvel-facts");


var comicsBtn = document.querySelector(".comics-search");
var characterBtn = document.querySelector(".characters-search");
var creatorsBtn = document.querySelector(".creators-search");

var pages = document.getElementById("pages");
var h1a = document.getElementById("h1a");
var h1b = document.getElementById("h1b");
var h1c = document.getElementById("h1c");

$(".comics-search").on("click", function () {
  getComicData(comicURL);
  h1a.style.display = "block";
  pages.style.display = "block";
});
$(".characters-search").on("click", function () {
  getCharacterData(characterURL);
  h1b.style.display = "block";
  pages.style.display = "block";
});
$(".creators-search").on("click", function () {
  getCreatorData(creatorURL);
  h1c.style.display = "block";
  pages.style.display = "block";
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
  "https://gateway.marvel.com/v1/public/comics?" +
  "ts=" +
  ts +
  "&apikey=" +
  publicKey +
  "&hash=" +
  md5Hash;
console.log(comicURL);

let characterURL =
  "https://gateway.marvel.com/v1/public/characters?ts=" + ts + "&apikey=" + publicKey + "&hash=" + md5Hash;


let creatorURL =
  "https://gateway.marvel.com/v1/public/creators?ts=" + ts + "&apikey=" + publicKey + "&hash=" + md5Hash;
// look at homework five for creating a dynamically loading page (create a separate js file)
// create a for loop to grab everything that we want

var offset = 0;
localStorage.setItem("offset", offset);

function getComicData(URL) {
  var url = "http://gateway.marvel.com/v1/public/comics?";
  localStorage.setItem("url", url);
  // console.log(URL);
  fetch(URL)
    .then((response) => response.json())
    .then(function (data) {
      // console.log(data);
      $(".main-content").hide();
      $("#comic-container").empty();
      var comicCreators = [];

      for (let i = 0; i < data.data.results.length; i++) {
        var comics = data.data.results[i];
        var creatorNames = [];
        var comicImg = [];
        var creators = comics.creators.items;
        var img = comics.images;
        // console.log("comic #" + i + ": " + creators.length);
        if (creators.length === 0) {
          creatorNames.push("Unavailable");
        } else {
          // go through all the creators, and do something
          for (let i = 0; i < creators.length; i++) {
            creatorNames.push(creators[i].name);
          }
        }
        var altImg = "http://i.annihil.us/u/prod/marvel/i/mg/c/b0/4bc6494ed6eb4";
        if (img.length === 0) {
          comicImg.push(altImg);
        }
        for (let i = 0; i < img.length; i++) {
          console.log(img[i].path);
          if (img[i].path) {
            comicImg.push(img[i].path);
          }
          else {
            comicImg.push(altImg);
          }
          console.log(comicImg);
        }
        var titleURL = comics.urls[0].url;
        comicCreators.push({
          id: comics.id,
          title: comics.title,
          creators: creatorNames,
          imgpath: comicImg,
          titleURL: comics.urls[0].url,
        });
      }
      for (let k = 0; k < comicCreators.length; k++) {
        var imgString = comicCreators[k].imgpath[0] + ".jpg";

        var creatorNames = comicCreators[k].creators;
        jQueryComicContainer.append(`

        <a href="${comicCreators[k].titleURL}">
        <div class="box">
        <div class="media-content content">
        <img src="${imgString}" alt="Image not available"/>
        <h2>Comic Title: ${comicCreators[k].title}</h2>
        <h4 class>Comic ID#: ${comicCreators[k].id}</h4>
        <h4 class>Creator(s): ${creatorNames}</h4>
        </div>
        </div>
        </a>
        `);
      }
    });
}

function getCharacterData(URL) {
  var url = "http://gateway.marvel.com/v1/public/characters?";
  localStorage.setItem("url", url);
  fetch(URL)
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      $(".main-content").hide();
      $("#comic-container").empty();
      var comicCharacters = [];

      for (let i = 0; i < data.data.results.length; i++) {
        var characters = data.data.results[i];

        comicCharacters.push({
          name: characters.name,
          description: characters.description,
          imgpath: characters.thumbnail.path,
          titleURL: characters.urls[0].url,
        });
      }
      for (let k = 0; k < comicCharacters.length; k++) {
        var imgString = comicCharacters[k].imgpath + ".jpg";
        var description = comicCharacters[k].description;
        jQueryComicContainer.append(`
        <a href="${comicCharacters[k].titleURL}">
        <div class="box">
        <div class="media-content content">
        <img src="${imgString}" alt="Image not available"/>
        <h2>Character Name: ${comicCharacters[k].name}</h2>
        <h4 class>Description: ${description ? description : "Unavailable"}</h4>
        </div>
        </div>
        </a>
        `);
      }
    });
};

function getCreatorData(URL) {
  var url = "https://gateway.marvel.com/v1/public/creators?";
  localStorage.setItem("url", url);
  console.log(URL);
  fetch(URL)
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      $(".main-content").hide();
      $("#comic-container").empty();
      var comicCreators = [];

      for (let i = 0; i < data.data.results.length; i++) {
        var creators = data.data.results[i];

        comicCreators.push({
          name: creators.fullName,
          imgpath: creators.thumbnail.path,
          titleURL: creators.urls[0].url,

        });
        // storyName: creators.series.items,
      }
      console.log(comicCreators);

      for (let k = 0; k < comicCreators.length; k++) {
        var imgString = comicCreators[k].imgpath + ".jpg";
        // var storyName = comicCreators[k].storyName;

        jQueryComicContainer.append(`
        <a href="${comicCreators[k].titleURL}">
        <div class="box">
        <div class="media-content content">
        <img src="${imgString}" alt="Image not available"/>
        <h4>${comicCreators[k].name}</h2>


        </div>
        </div>
        </a>
        `);
      }
    });
}
// <h3>${storyName}</h3>
// <h2 class>Description: ${description ? description : "Unavailable"}</h4>
// var description = comicCreators[k].description;

getCreatorData();
// Need event listener for the next or previous button

var nextBtn = document.querySelector("#next");
var prevBtn = document.querySelector("#previous");

$("#next").on("click", function () {
  var offset = parseInt(localStorage.getItem("offset"));
  offset += 20;
  localStorage.setItem("offset", offset);
  var newUrl =
    localStorage.getItem("url") +
    "offset=" +
    offset +
    "&ts=" +
    ts +
    "&apikey=" +
    publicKey +
    "&hash=" +
    md5Hash;
  if (localStorage.getItem("url") == "http://gateway.marvel.com/v1/public/comics?") {
    getComicData(newUrl);
  }
  else if (localStorage.getItem("url") == "http://gateway.marvel.com/v1/public/characters?") {
    getCharacterData(newUrl);
  }
  else {
    getCreatorData(newUrl);
  }
});

$("#previous").on("click", function () {
  var offset = parseInt(localStorage.getItem("offset"));
  offset -= 20;
  localStorage.setItem("offset", offset);
  var newUrl =
    localStorage.getItem("url") +
    "offset=" +
    offset +
    "&ts=" +
    ts +
    "&apikey=" +
    publicKey +
    "&hash=" +
    md5Hash;
  if (localStorage.getItem("url") == "http://gateway.marvel.com/v1/public/comics?") {
    getComicData(newUrl);
  }
  else if (localStorage.getItem("url") == "http://gateway.marvel.com/v1/public/characters?") {
    getCharacterData(newUrl);
  }
  else {
    getCreatorData(newUrl);
  }

});

const funFactArray = [
  {
    fact: "In the Norse Myths Thor is not blond at all but red headed with red eyes!",
  },
  {
    fact: "The theme tune of the 1967 cartoon show Spider-Man has since become the web-slinger’s official motif including a fully orchestrated version for the MCU movies.",
  },
  {
    fact: "Wolverine’s codename ‘Weapon X’ really means ‘Weapon 10’ and ‘Weapon 1’ is none other than… Captain America!",
  },
  {
    fact: 'Article 5 of the 1954 Comics Code required that: "In every instance good shall triumph over evil and the criminal punished for his misdeeds”.',
  },
  {
    fact: "The original leader of Alpha Flight, Canada’s team of superheroes, is Guardian.",
  },
  {
    fact: "In 1975 Paul McCartney composed a Marvel based song for his band Wings entitled ‘Magneto and Titanium Man’.",
  },
  {
    fact: "Until Fantastic Four #284 founding member of the team Susan Richards (nee Storm) was known not as the Invisible Woman but the Invisible Girl.",
  },
  {
    fact: "Thor’s hammer Mjolnir  is made out of the mysterious ancient metal Uru.",
  },
  {
    fact: 'The real name of Iron Man’s secretary "Pepper Potts" is Virginia.',
  },
  {
    fact: "In the original comics Thanos was killed by Adam Warlock.",
  },
  {
    fact: "The British superhero team Excalibur was led by Brian Braddock aka Captain Britain.",
  },
  {
    fact: "Daredevil's long lost mother, Maggie, had in fact become a nun. ",
  },
  {
    fact: "The hero MoonKnight is the avatar of the Egyptian moon god Khonshu.",
  },
];

function RandomFact() {
  $("#marvel-facts").empty();
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

$(document).ready(init());
