
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