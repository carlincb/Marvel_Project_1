// Defined global variables:
var startQuizButton = document.getElementById("startQuizButton");
var submitButton = document.getElementById("submitButton");
var goBackButton = document.getElementById("goBackButton");
var clearHighScores = document.getElementById("clearHighscores");

var mainPage = document.getElementById("mainPage");
var questionContainer = document.getElementById("questionContainer");
var initials = document.getElementById("initials");

// Variables defined for timer and score tracker.
var timerInput = document.getElementById("countdown");
var timeLeft = 60;
var userScore = 0;

// Defined variables for page display after the quiz runs.
var finalScorePage = document.getElementById("finalScore");
var highScorePage = document.getElementById("highscores");
var scoreInput = document.getElementById("score");
var highscoreDiv = document.getElementById("highscoreDiv");

// Variables defined for questions.
var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var question4 = document.getElementById("question4");

// Variables defined for button options for answers and feedback on answers.
var btn1A = document.getElementById("option1A");
var btn1B = document.getElementById("option1B");
var btn1C = document.getElementById("option1C");
var btn1D = document.getElementById("option1D");

var btn2A = document.getElementById("option2A");
var btn2B = document.getElementById("option2B");
var btn2C = document.getElementById("option2C");
var btn2D = document.getElementById("option2D");

var btn3A = document.getElementById("option3A");
var btn3B = document.getElementById("option3B");
var btn3C = document.getElementById("option3C");
var btn3D = document.getElementById("option3D");

var btn4A = document.getElementById("option4A");
var btn4B = document.getElementById("option4B");
var btn4C = document.getElementById("option4C");
var btn4D = document.getElementById("option4D");

// Right or Wrong options variable.
var answerFeedback = document.getElementById("answerFeedback");

// Start Quiz Button Linked.
startQuizButton.addEventListener("click", function(){
    mainPage.style.display = "none";
    questionContainer.style.display = "block";
    question1.style.display = "block";
    displayTime();
});

// Timer function 
function displayTime(){
    timerInput.textContent = timeLeft;
    var timeCount = setInterval (function(){
        timeLeft--;
        timerInput.textContent = timeLeft;
    if(timeLeft<=0){
        quizOver();
        clearInterval(timeCount);
    };
}, 1000);
};

// Question 1 options.
btn1A.addEventListener("click", function(){
    userScore = timeLeft;
    answerFeedback.textContent = "Right!";
    question1.style.display = "none";
    question2.style.display = "block";
});

btn1B.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question1.style.display = "none";
    question2.style.display = "block";

});

btn1C.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question1.style.display = "none";
    question2.style.display = "block";
});

btn1D.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question1.style.display = "none";
    question2.style.display = "block";
});

// Question 2 options.
btn2A.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question2.style.display = "none";
    question3.style.display = "block";
});

btn2B.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question2.style.display = "none";
    question3.style.display = "block";
});

btn2C.addEventListener("click", function(){
    userScore = timeLeft;
    answerFeedback.textContent = "Right!";
    question2.style.display = "none";
    question3.style.display = "block";
});

btn2D.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question2.style.display = "none";
    question3.style.display = "block";
});

// Question 3 options.
btn3A.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question3.style.display = "none";
    question4.style.display = "block";
});

btn3B.addEventListener("click", function(){
    userScore = timeLeft;
    answerFeedback.textContent = "Right!";
    question3.style.display = "none";
    question4.style.display = "block";
});

btn3C.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question3.style.display = "none";
    question4.style.display = "block";
});

btn3D.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question3.style.display = "none";
    question4.style.display = "block";
});

// Question 4 options.
btn4A.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question4.style.display = "none";
    quizOver();
});

btn4B.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question4.style.display = "none";
    quizOver();
});

btn4C.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question4.style.display = "none";
    quizOver();
});

btn4D.addEventListener("click", function(){
    userScore = timeLeft;
    answerFeedback.textContent = "Right!";
    question4.style.display = "none";
    quizOver();
});

// Quiz over function for when user has finished questions or time has run out.
function quizOver(){
    questionContainer.style.display = "none";
    finalScorePage.style.display = "block";
    timerInput.style.display = "none";
};

// Score calculation function.
var endScores = JSON.parse(localStorage.getItem("scores"));
if (endScores) {
  endScores = JSON.parse(localStorage.getItem("scores"));
} else {
  endScores = [];
};

// Function saving scores and initials in local storage when I click "Submit."
submitButton.addEventListener("click", function(){
    var userInitials = initials.value;
    endScores.push({
        initials: userInitials,
        score: userScore,
    });
    localStorage.setItem("scores", JSON.stringify(endScores));
    highScorePage.style.display = "block";
    finalScorePage.style.display = "none";
    endScores.forEach(element => {
        var p=document.createElement("p");
        p.innerText = `Initials: ${element.initials} Score: ${element.score}`;
        highscoreDiv.append(p);
    });
});
// Function saving scores and initials in local storage when I press "enter" instead of click "Submit."
document.querySelector("#initials").addEventListener("keypress", function(event){
    if (event.key==="Enter"){
        event.preventDefault();
        var userInitials = initials.value;
        endScores.push({
            initials: userInitials,
            score: userScore,
        });
        localStorage.setItem("scores", JSON.stringify(endScores));
        highScorePage.style.display = "block";
        finalScorePage.style.display = "none";
        endScores.forEach(element => {
            var p=document.createElement("p");
            p.innerText = `Initials: ${element.initials} Score: ${element.score}`;
            highscoreDiv.append(p);
        });
    };
});

// Function to clear high scores from local storage and page.
clearHighScores.addEventListener("click", function(){
    localStorage.clear();
    highscoreDiv.innerHTML="";
 });

//  Function to return to main page.
goBackButton.addEventListener("click", function(){
    mainPage.style.display = "block";
    highScorePage.style.display = "none";
    location.reload();
});
