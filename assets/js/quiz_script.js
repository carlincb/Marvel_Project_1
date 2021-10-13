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
var timeLeft = 170;
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
var question5 = document.getElementById("question5");
var question7 = document.getElementById("question7");
var question8 = document.getElementById("question8");
var question9 = document.getElementById("question9");
var question10 = document.getElementById("question10");
var question11 = document.getElementById("question11");
var question12 = document.getElementById("question12");
var question13 = document.getElementById("question13");
var question14 = document.getElementById("question14");
var question15 = document.getElementById("question15");
var question16 = document.getElementById("question16");
var question17 = document.getElementById("question17");
var question18 = document.getElementById("question18");
var question19 = document.getElementById("question19");

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

var btn5A = document.getElementById("option5A");
var btn5B = document.getElementById("option5B");
var btn5C = document.getElementById("option5C");
var btn5D = document.getElementById("option5D");

var btn7A = document.getElementById("option7A");
var btn7B = document.getElementById("option7B");
var btn7C = document.getElementById("option7C");
var btn7D = document.getElementById("option7D");

var btn8A = document.getElementById("option8A");
var btn8B = document.getElementById("option8B");
var btn8C = document.getElementById("option8C");
var btn8D = document.getElementById("option8D");

var btn9A = document.getElementById("option9A");
var btn9B = document.getElementById("option9B");
var btn9C = document.getElementById("option9C");
var btn9D = document.getElementById("option9D");

var btn10A = document.getElementById("option10A");
var btn10B = document.getElementById("option10B");
var btn10C = document.getElementById("option10C");
var btn10D = document.getElementById("option10D");

var btn11A = document.getElementById("option11A");
var btn11B = document.getElementById("option11B");
var btn11C = document.getElementById("option11C");
var btn11D = document.getElementById("option11D");

var btn12A = document.getElementById("option12A");
var btn12B = document.getElementById("option12B");
var btn12C = document.getElementById("option12C");
var btn12D = document.getElementById("option12D");

var btn13A = document.getElementById("option13A");
var btn13B = document.getElementById("option13B");
var btn13C = document.getElementById("option13C");
var btn13D = document.getElementById("option13D");

var btn14A = document.getElementById("option14A");
var btn14B = document.getElementById("option14B");
var btn14C = document.getElementById("option14C");
var btn14D = document.getElementById("option14D");

var btn15A = document.getElementById("option15A");
var btn15B = document.getElementById("option15B");
var btn15C = document.getElementById("option15C");
var btn15D = document.getElementById("option15D");

var btn16A = document.getElementById("option16A");
var btn16B = document.getElementById("option16B");
var btn16C = document.getElementById("option16C");
var btn16D = document.getElementById("option16D");

var btn17A = document.getElementById("option17A");
var btn17B = document.getElementById("option17B");
var btn17C = document.getElementById("option17C");
var btn17D = document.getElementById("option17D");

var btn18A = document.getElementById("option18A");
var btn18B = document.getElementById("option18B");
var btn18C = document.getElementById("option18C");
var btn18D = document.getElementById("option18D");

var btn19A = document.getElementById("option19A");
var btn19B = document.getElementById("option19B");
var btn19C = document.getElementById("option19C");
var btn19D = document.getElementById("option19D");

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
    question5.style.display = "block";
});

btn4B.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question4.style.display = "none";
    question5.style.display = "block";
});

btn4C.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question4.style.display = "none";
    question5.style.display = "block";
});

btn4D.addEventListener("click", function(){
    userScore = timeLeft;
    answerFeedback.textContent = "Right!";
    question4.style.display = "none";
    question5.style.display = "block";
});
// Question 5 options.
btn5A.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question5.style.display = "none";
    question7.style.display = "block";
});

btn5D.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question5.style.display = "none";
    question7.style.display = "block";
});

btn5C.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question5.style.display = "none";
    question7.style.display = "block";
});

btn5B.addEventListener("click", function(){
    userScore = timeLeft;
    answerFeedback.textContent = "Right!";
    question5.style.display = "none";
    question7.style.display = "block";
});

// Question 7 options.
btn7A.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question7.style.display = "none";
    question8.style.display = "block";
});

btn7C.addEventListener("click", function(){
    userScore = timeLeft;
    answerFeedback.textContent = "Right!";
    question7.style.display = "none";
    question8.style.display = "block";
});

btn7B.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question7.style.display = "none";
    question8.style.display = "block";
});

btn7D.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question7.style.display = "none";
    question8.style.display = "block";
});

// Question 8 options.
btn8B.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question8.style.display = "none";
    question9.style.display = "block";
});

btn8A.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question8.style.display = "none";
    question9.style.display = "block";
});

btn8C.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question8.style.display = "none";
    question9.style.display = "block";
});

btn8D.addEventListener("click", function(){
    userScore = timeLeft;
    answerFeedback.textContent = "Right!";
    question8.style.display = "none";
    question9.style.display = "block";
});

// Question 9 options.
btn9B.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question9.style.display = "none";
    question10.style.display = "block";
});

btn9A.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question9.style.display = "none";
    question10.style.display = "block";
});

btn9C.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question9.style.display = "none";
    question10.style.display = "block";
});

btn9D.addEventListener("click", function(){
    userScore = timeLeft;
    answerFeedback.textContent = "Right!";
    question9.style.display = "none";
    question10.style.display = "block";
});

// Question 10 options.
btn10B.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question10.style.display = "none";
    question11.style.display = "block";
});

btn10D.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question10.style.display = "none";
    question11.style.display = "block";
});

btn10A.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question10.style.display = "none";
    question11.style.display = "block";
});

btn10C.addEventListener("click", function(){
    userScore = timeLeft;
    answerFeedback.textContent = "Right!";
    question10.style.display = "none";
    question11.style.display = "block";
});

// Question 11 options.
btn11A.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question11.style.display = "none";
    question12.style.display = "block";
});

btn11D.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question11.style.display = "none";
    question12.style.display = "block";
});

btn11C.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question11.style.display = "none";
    question12.style.display = "block";
});

btn11B.addEventListener("click", function(){
    userScore = timeLeft;
    answerFeedback.textContent = "Right!";
    question11.style.display = "none";
    question12.style.display = "block";
});

// Question 12 options.
btn12B.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question12.style.display = "none";
    question13.style.display = "block";
});

btn12D.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question12.style.display = "none";
    question13.style.display = "block";
});

btn12A.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question12.style.display = "none";
    question13.style.display = "block";
});

btn12C.addEventListener("click", function(){
    userScore = timeLeft;
    answerFeedback.textContent = "Right!";
    question12.style.display = "none";
    question13.style.display = "block";
});

// Question 13 options.
btn13A.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question13.style.display = "none";
    question14.style.display = "block";
});

btn13D.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question13.style.display = "none";
    question14.style.display = "block";
});

btn13C.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question13.style.display = "none";
    question14.style.display = "block";
});

btn13B.addEventListener("click", function(){
    userScore = timeLeft;
    answerFeedback.textContent = "Right!";
    question13.style.display = "none";
    question14.style.display = "block";
});

// Question 14 options.
btn14B.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question14.style.display = "none";
    question15.style.display = "block";
});

btn14D.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question14.style.display = "none";
    question15.style.display = "block";
});

btn14C.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question14.style.display = "none";
    question15.style.display = "block";
});

btn14A.addEventListener("click", function(){
    userScore = timeLeft;
    answerFeedback.textContent = "Right!";
    question14.style.display = "none";
    question15.style.display = "block";
});

// Question 15 options.
btn15B.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question15.style.display = "none";
    question16.style.display = "block";
});

btn15A.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question15.style.display = "none";
    question16.style.display = "block";
});

btn15C.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question15.style.display = "none";
    question16.style.display = "block";
});

btn15D.addEventListener("click", function(){
    userScore = timeLeft;
    answerFeedback.textContent = "Right!";
    question15.style.display = "none";
    question16.style.display = "block";
});

// Question 16 options.
btn16A.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question16.style.display = "none";
    question17.style.display = "block";
});

btn16D.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question16.style.display = "none";
    question17.style.display = "block";
});

btn16C.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question16.style.display = "none";
    question17.style.display = "block";
});

btn16B.addEventListener("click", function(){
    userScore = timeLeft;
    answerFeedback.textContent = "Right!";
    question16.style.display = "none";
    question17.style.display = "block";
});

// Question 17 options.
btn17B.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question17.style.display = "none";
    question18.style.display = "block";
});

btn17A.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question17.style.display = "none";
    question18.style.display = "block";
});

btn17C.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question17.style.display = "none";
    question18.style.display = "block";
});

btn17D.addEventListener("click", function(){
    userScore = timeLeft;
    answerFeedback.textContent = "Right!";
    question17.style.display = "none";
    question18.style.display = "block";
});

// Question 18 options.
btn18B.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question18.style.display = "none";
    question19.style.display = "block";
});

btn18D.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question18.style.display = "none";
    question19.style.display = "block";
});

btn18C.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question18.style.display = "none";
    question19.style.display = "block";
});

btn18A.addEventListener("click", function(){
    userScore = timeLeft;
    answerFeedback.textContent = "Right!";
    question18.style.display = "none";
    question19.style.display = "block";
});

// Question 19 options.
btn19B.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question19.style.display = "none";
    quizOver();
});

btn19A.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question19.style.display = "none";
    quizOver();
});

btn19C.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question19.style.display = "none";
    quizOver();
});

btn19D.addEventListener("click", function(){
    userScore = timeLeft;
    answerFeedback.textContent = "Right!";
    question19.style.display = "none";
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
