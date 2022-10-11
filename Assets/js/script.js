var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

function init() {
  getWins();
  getlosses();
}

function startGame() {
  isWin = false;
  timerCount = 15;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  startTimer()
  document.getElementById( 'start-button' ).style.display = none;
}

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
    numb: 1,
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
    numb: 2,
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
    numb: 3,
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
    numb: 4,
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
    numb: 5,
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