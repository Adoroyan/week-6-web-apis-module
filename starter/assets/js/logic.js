// Selects element by class
var timeSpan = document.getElementById("time");
var startButton = document.getElementById("start");

var startScreen = document.getElementById("start-screen");
var endScreen = document.getElementById("end-screen");
var feedback = document.getElementById("feedback");

var questionDiv = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var answerChoices = document.getElementById("choices");


// var secondsLeft = 75;
var secondsLeft = 5;
var currentQuestion = 0;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeSpan.textContent = secondsLeft;
    console.log(timeSpan.textContent);

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to stop quiz
      stopQuiz();
    }

  }, 1000);
}

// Function to update time to 0 and stop quiz
function  stopQuiz() {
  timeSpan.textContent = "0";

}

function displayNextQuestion()
{
  question = questions[currentQuestion];
  answers = question.answers.lenght;
  questionTitle.textContent = question.text;
   console.log(question.answers);
   var index = 1;
   question.answers.forEach (function(element){
    console.log(element);
    var button = document.createElement("button");
    button.textContent = index + ". " + element;
    button.id = element;
    answerChoices.appendChild(button);
    index++;
   });
}

function startQuiz(event)
{
  event.preventDefault();
  setTime();
  //hide startscreen
  if (startScreen.className === "start")
  {
    startScreen.className = "hide";
  }
  //show questions
  if (questionDiv.className === "hide")
  {
    questionDiv.className = "start";
  }
  displayNextQuestion();
}


startButton.addEventListener("click", startQuiz);
var allQuestions = questions;
