var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.getElementById("time");
var startButton = document.getElementById("start");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var submitbtn = document.getElementById("submit");
var initialsEl = document.getElementById("initials")
var timerId;
var time = 60;
var currentQuestionIndex = 0;

// function init() {
//   getWins();
//   getlosses();
// }

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
  
  // isWin = false;
  // timerCount = 15;
  // // Prevents start button from being clicked when round is in progress
  // startButton.disabled = true;
  // startTimer()
  // document.getElementById( 'start-button' ).style.display = none;
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
  optionNode.textContent = i + 1 + ". " + option;
  choicesEl.appendChild (optionNode);
}

}
// need a function that handles a click event, for if it is right or wrong, incriment the current question index. quiz end function it clears out the interval and hides the questions, show final score, saving the score get the value get the initials and set it into local storage. click events for each button. need a high scores page that is added to my existing html or add an additional html




function winGame() {
  wordBlank.textContent = "YOU WON!!!🏆 ";
  winCounter++
  startButton.disabled = false;
  setWins()
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  loseCounter++
  startButton.disabled = false;
  setLosses()
}

function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}

// Updates win count on screen and sets win count to client storage
function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}

  // Updates lose count on screen and sets lose count to client storage
  function setLosses() {
    lose.textContent = loseCounter;
    localStorage.setItem("loseCount", loseCounter);
  }

  // These functions are used by init above
function getWins() {
  // Get stored value from client storage, if it exists
  var storedWins = localStorage.getItem("winCount");
  // If stored value doesn't exist, set counter to 0
  if (storedWins === null) {
    winCounter = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    winCounter = storedWins;
  }
  //Render win count to page
  win.textContent = winCounter;
}

//   funciton called by init above
function getlosses() {
  var storedLosses = localStorage.getItem("loseCount");
  if (storedLosses === null) {
    loseCounter = 0;
  } else {
    loseCounter = storedLosses;
  }
  lose.textContent = loseCounter;
}

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
// init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");
  
function resetGame() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}

// Attaches event listener to button
resetButton.addEventListener("click", resetGame);


function questions() {
  isWin = false;
  timerCount = 15;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  startTimer()
  document.getElementById( 'start-button' ).style.display = 'none';
  document.getElementById("queston");
}

var qlist = [
    {
     
    question: "What is Davids favortite color?",
    answer: "Blue",
    options: [
      "Blue",
      "Yellow",
      "Green",
      "Red"
    ]
  },
    {
    
    question: "What is David's favorite food?",
    answer: "Pizza",
    options: [
      "Pizza",
      "Hotdogs",
      "sandwiches",
      "Cake"
    ]
  },
    {
    
    question: "What color is grass?",
    answer: "Green",
    options: [
      "Green",
      "yellow",
      "Blue",
      "Orange"
    ]
  },
    {
    
    question: "Where do cars drive?",
    answer: "On the road",
    options: [
      "In the sky",
      "On the road",
      "In the water",
      "In outer space"
    ]
  },
    {
    
    question: "Which character is a letter?",
    answer: "K",
    options: [
      "?",
      "1",
      "K",
      "+"
    ]
  },
 
  
];