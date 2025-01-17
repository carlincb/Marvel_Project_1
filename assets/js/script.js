// Global variables set
var categoryContainerEl = document.querySelector("#category-container");
var comicContainerEl = document.querySelector("#comic-container");
var mainBodyEls = document.querySelectorAll(".main-content");
var jQueryComicContainer = $("#comic-container");
var factContainerEl = document.querySelector("#marvel-facts");

// Variables created to grab cards and nav li tags for click events
var comicsBtn = document.querySelector(".comics-search");
var characterBtn = document.querySelector(".characters-search");
var creatorsBtn = document.querySelector(".creators-search");
var comicSearch = document.getElementById("comic-search")

var homeBtn = document.querySelector("#home-page");
// Variables created for pagination and headers for new pages linked through cards
var pages = document.getElementById("pages");
var h1a = document.getElementById("h1a");
var h1b = document.getElementById("h1b");
var h1c = document.getElementById("h1c");

// Functions created so that user navigates to new pages for each card and titles for the card and pagination appear on the page
$(".comics-search").on("click", function () {
  getComicData(comicURL);
  h1a.style.display = "block";
  h1b.style.display = "none";
  h1c.style.display = "none";
  pages.style.display = "block";
});
$(".characters-search").on("click", function () {
  getCharacterData(characterURL);
  h1b.style.display = "block";
  h1a.style.display = "none";
  h1c.style.display = "none";
  pages.style.display = "block";
});
$(".creators-search").on("click", function () {
  getCreatorData(creatorURL);
  h1c.style.display = "block";
  h1a.style.display = "none";
  h1b.style.display = "none";
  pages.style.display = "block";
});
// Function made so that when "Home" is clicked user returns to main screen
$("#home-page").on("click", function () {
  location.reload();
});
// Creating variables for API Keys for API call
var publicKey = "9a86508c139659fd39ae10d9e08ad609";
var privateKey = "6c71587e6cb4343819fe479a9d6cb26e66e14af3";
console.log(publicKey);
console.log(privateKey);
// Creating time stamp for API call
var ts = Date.now();
console.log(ts);
// Creating hash key for API call
var hash = ts + privateKey + publicKey;
var md5Hash = md5(hash);
console.log(md5Hash);

// Creating urls for our API calls
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


var offset = 0;
localStorage.setItem("offset", offset);

$('#comic-search-btn').on('click', function (event) {
  event.preventDefault()
let searchComicURL =   "https://gateway.marvel.com/v1/public/comics?title="+ comicSearch.value +
"&ts=" +
ts +
"&apikey=" +
publicKey +
"&hash=" +
md5Hash;

fetch(searchComicURL)
.then((response) => response.json())
.then(function(data) {
  console.log(data)
  $(".main-content").hide();
  $("#comic-container").empty();
  var comicCreators = [];
  for (let i = 0; i < data.data.results.length; i++) {
    var comics = data.data.results[i];
    var creatorNames = [];
    var comicImg = [];
    var creators = comics.creators.items;
    var img = comics.images;
    if (creators.length === 0) {
      creatorNames.push("Unavailable");
    } else {
      // go through all the creators, and do something
      for (let i = 0; i < creators.length; i++) {
        creatorNames.push(creators[i].name);
      }
    }
    var altImg = "https://i.annihil.us/u/prod/marvel/i/mg/c/b0/4bc6494ed6eb4";
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
    <div class="box comic-cards">
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
});



// Function grabbing Comic data from API
function getComicData(URL) {
  var url = "https://gateway.marvel.com/v1/public/comics?";
  localStorage.setItem("url", url);
  fetch(URL)
    .then((response) => response.json())
    .then(function (data) {
      $(".main-content").hide();
      $("#comic-container").empty();
      var comicCreators = [];

      for (let i = 0; i < data.data.results.length; i++) {
        var comics = data.data.results[i];
        var creatorNames = [];
        var comicImg = [];
        var creators = comics.creators.items;
        var img = comics.images;
        
        if (creators.length === 0) {
          creatorNames.push("Unavailable");
        } else {
          for (let i = 0; i < creators.length; i++) {
            creatorNames.push(creators[i].name);
          } 
        }
        var altImg = "https://i.annihil.us/u/prod/marvel/i/mg/c/b0/4bc6494ed6eb4";
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
        <div class="box comic-cards">
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
// Function grabbing Character data from API
function getCharacterData(URL) {
  var url = "https://gateway.marvel.com/v1/public/characters?";
  localStorage.setItem("url", url);
  fetch(URL)
    .then((response) => response.json())
    .then(function (data) {
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
        <div class="box comic-cards">
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

// Function grabbing Creator data from API
function getCreatorData(URL) {
  var url = "https://gateway.marvel.com/v1/public/creators?";
  localStorage.setItem("url", url);
  console.log(URL);
  fetch(URL)
    .then((response) => response.json())
    .then(function (data) {
      $(".main-content").hide();
      $("#comic-container").empty();
      var comicCreators = [];

      for (let i = 0; i < data.data.results.length; i++) {
        var creators = data.data.results[i];

        comicCreators.push({
          name: creators.fullName,
          imgpath: creators.thumbnail.path,
          titleURL: creators.urls[0].url,
          series: creators.series.items,
        });
      }
      console.log(comicCreators);

      for (let k = 0; k < comicCreators.length; k++) {
        var imgString = comicCreators[k].imgpath + ".jpg";

        jQueryComicContainer.append(`
        <a href="${comicCreators[k].titleURL}">
        <div class="box comic-cards">
        <div class="media-content content">
        <img src="${imgString}" alt="Image not available"/>
        <h2>${comicCreators[k].name}</h2>
        </div>
        </div>
        </a>
        `);
      }
    });
}

// Variables and functions created to limit number of elements displayed on page and buttons added to navigate pages
var offset = 0;
localStorage.setItem("offset", offset);

var nextBtn = document.querySelector("#next");
var prevBtn = document.querySelector("#previous");

$("#next").on("click", function () {
  window.scrollTo(0,0);
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
  if (localStorage.getItem("url") == "https://gateway.marvel.com/v1/public/comics?") {
    getComicData(newUrl);
  }
  else if (localStorage.getItem("url") == "https://gateway.marvel.com/v1/public/characters?") {
    getCharacterData(newUrl);
  }
  else {
    getCreatorData(newUrl);
  }
});

$("#previous").on("click", function () {
  window.scrollTo(0,0);
  var offset = parseInt(localStorage.getItem("offset"));
  if (offset === 0){
    return;
  }
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

  if (localStorage.getItem("url") == "https://gateway.marvel.com/v1/public/comics?") {
    getComicData(newUrl);
  }
  else if (localStorage.getItem("url") == "https://gateway.marvel.com/v1/public/characters?") {
    getCharacterData(newUrl);
  }
  else {
    getCreatorData(newUrl);
  }

});
// Fun Fact Array created
const funFactArray = [
  {
    fact: "Los Angeles, Boston and New York City all have a Stan Lee Day, all on different dates.",
  },
  {
    fact: "Stan Lee's wife Joan (nee Boocock) was a Geordie - a native of Newcastle upon Tyne.",
  },
  {
    fact: "Jack Kirby worked on animated Popeye cartoons in the mid-1930s.",
  },
  {
    fact: "After leaving Marvel for DC, Jack Kirby created a hero called Mark Moonrider, a villain called Darkseid, and an all-encompassing energy called the Source. He declined to sue the Star Wars creators for plagiarism, saying he only wanted recognition.",
  },
  {
    fact: "While at high school, Spider-Man co-creator Steve Ditko made wooden models of German airplanes to help train World War II aircraft-spotters.",
  },
  {
    fact: "The Black Panther was briefly re-named the Black Leopard, to avoid any political connotations.",
  },
  {
    fact: "The US authorities can't touch Doctor Doom, however dire his deeds may be: as monarch of Latveria, he has diplomatic immunity.",
  },
  {
    fact: "According to Marvel's predecessor, Timely Comics, Adolf Hitler did not commit suicide,  followed by cremation in his bunker - he was set alight by the original Human Torch.",
  },
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
// Marvel Fun Fact Generator Function
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
