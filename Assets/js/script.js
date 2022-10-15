var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var quiz_body = document.getElementById("questions")
var timerElement = document.getElementById("time");
var startButton = document.getElementById("start");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var submitbtn = document.getElementById("submit");
var initialsEl = document.getElementById("initials")
var timerId;
var time = 6;
var currentQuestionIndex = 0;
var button_a;
var button_b;
var button_c;
var button_d;
// var final_question_index = qlist.length() - 1;
// var randomQuestionIndex = (Math.floor(Math.random() * final_question_index))
var timeLeft = 100;
var timerInterval;
var score = 0;
var correct; 

// questions must be at top otherwise it wont work
var qlist = [
  {
  question: "What is Davids favortite color?",
  Answer: "Blue",
  options: [
    "Blue",
    "Yellow",
    "Green",
    "Red"
  ]
},
  {
  question: "What is David's favorite food?",
  Answer: "Pizza",
  options: [
    "Pizza",
    "Hotdogs",
    "sandwiches",
    "Cake"
  ]
},
  {
  question: "What color is grass?",
  Answer: "Green",
  options: [
    "Green",
    "yellow",
    "Blue",
    "Orange"
  ]
},
  {
  question: "Where do cars drive?",
  Answer: "On the road",
  options: [
    "In the sky",
    "On the road",
    "In the water",
    "In outer space"
  ]
},
  {
  question: "Which character is a letter?",
  Answer: "K",
  options: [
    "?",
    "1",
    "K",
    "+"
  ]
},

];


choicesEl.addEventListener("click", function(event){
  answer_check(event.target.textContent);
});

function startGame() {
  var startscreenEl = document.getElementById("start-screen")
  // hides start screen
  startscreenEl.setAttribute("class", "hide");
  // removes hide class from questions
  questionsEl.removeAttribute("class");
  // setinterval is used to create  imers, used with miliseconds
  timerId = setInterval (countdown, 1000);
  // uses var time 60
  timerElement.textContent = time;
  getQuestion ();
  
}

function countdown (){
  time--;
  timerElement.textContent=time;
  if (time<= 0){
    quizEnd ();
  }
}

function getQuestion(){
  // will give us first question object from qlist
var currentQuestion = qlist [currentQuestionIndex];
var titleEl = document.getElementById("question-title");
// puts "question" into html element
titleEl.textContent = currentQuestion.question;
// clears out choices from previous questions
choicesEl.innerHTML = "";
for (var i = 0; i < currentQuestion.options.length; i++){
  var option = currentQuestion.options[i];
  var optionNode = document.createElement("button");
  // gives button a class of option
  optionNode.setAttribute("class", "option");
  // value of button will now be linked to the option itself
  optionNode.setAttribute("value", option);
  optionNode.id = "button_" + i;
  optionNode.textContent = option;
  choicesEl.appendChild (optionNode);
}
}

// need a function that handles a click event, for if it is right or wrong, increment the current question index. quiz end function it clears out the interval and hides the questions, show final score, saving the score get the value get the initials and set it into local storage. click events for each button. need a high scores page that is added to my existing html or add an additional html

function quizEnd(){
  var finalScore = document.getElementById("final-score");
  finalScore.textContent = score;
  var end_screen = document.getElementById("end-screen");
  // hides start screen
  questionsEl.setAttribute("class", "hide");
  timerElement.setAttribute("class", "hide");
  clearInterval(timerId);
  // removes hide class from questions
  end_screen.removeAttribute("class");
  // setHighScore();
  getHighScore();
  
}


function setHighScore(){
  localStorage.setItem("savedHighScore",  score + "-" + initialsEl.value);
}

function getHighScore(){
  var highScore= document.getElementById("high-score");
  highScore.textContent = localStorage.getItem("savedHighScore");
}

function submittedScore(){
  setHighScore();
  getHighScore();
  alert("Score Submitted");
}

submitbtn.addEventListener("click", submittedScore);

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);


function answer_check(answer){
  correct = qlist[currentQuestionIndex].Answer;

  if (answer === correct){
    score++;
    alert("Correct");
  }
  else {
    alert("incorrect");
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < qlist.length){
    
    getQuestion();
  }
  else
  quizEnd ();
}














