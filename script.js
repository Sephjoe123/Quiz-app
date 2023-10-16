const returnBtn = document.querySelector(".return");
const proceedBtn = document.querySelector(".start-game");
const quizContainer = document.getElementById("container");
const startModal = document.querySelector(".start-modal");
const UserOptions = Array.from(document.getElementsByClassName("quizbtn"));
const Nextbtn = document.querySelector(".next-button");
const previousBtn = document.querySelector(".previous-btn");
const resultModal = document.querySelector(".result-modal");
let questionText = document.querySelector(".question-text");

let scoreCount = 0;
let numCount = 0;
let timerCount = 0;
let countdown = 10

let countdownInterval;

// starts the game and shoes the rules section of he game
function startGame() {
  const startBtn = document.querySelector(".start-btn");
  const rulesSection = document.querySelector(".rules-section");
  startBtn.addEventListener("click", () => {
    if (!rulesSection.classList.contains("active")) {
      rulesSection.classList.add("active");
      startModal.classList.add("none");
    }
    document.querySelector(".question-no").innerText = Questions.length;
  });
  proceed(rulesSection);
}

startGame();

function proceed(rulesSection) {
  returnBtn.addEventListener("click", () => {
    if (rulesSection.classList.contains("active")) {
      rulesSection.classList.remove("active");
      startModal.classList.remove("none");
      startModal.classList.add("active");
    }
  });

  StartQuiz(rulesSection);

  previousBtn.addEventListener("click", () => {
    if (quizContainer.style.display === "block") {
      rulesSection.classList.add("active");
      quizContainer.style.display = "none";
    }
  });

  chooseAnswer(previousBtn);
}

function StartQuiz(rulesSection) {
  proceedBtn.addEventListener("click", () => {
    if (rulesSection.classList.contains("active")) {
      rulesSection.classList.remove("active");
      quizContainer.style.display = "block";
      showQuestion(numCount);
    } else {
      quizContainer.style.display = "block";
    }
    countdown = 10;
    QuizTimer();
  });
}

function chooseAnswer(previousBtn) {
  questionText.innerText = Questions[numCount].question;
  UpdateQuizQuestion(questionText, previousBtn);
}

// Function for changing the question to the next on when a user clicks on the next button
function UpdateQuizQuestion(questionText, previousBtn) {
  Nextbtn.addEventListener("click", () => {
    if (numCount < Questions.length - 1) {
      numCount++;
      countdown = 10 

      if (countdown !== 0) {
        clearInterval(countdownInterval);
      }
      document.querySelector(".question-count").innerText = numCount + 1;
      questionText.innerText = Questions[numCount].question;
      previousBtn.style.display = "none";
    } else {
      updateScore();
    }

    showQuestion(numCount);
    QuizTimer();
  });
}

//  displays the options for each question
function showQuestion(count) {
  let option =
    `<button class="quizbtn">` +
    Questions[count].options[0] +
    `</button>` +
    `<button class="quizbtn">` +
    Questions[count].options[1] +
    `</button>` +
    `<button class="quizbtn">` +
    Questions[count].options[2] +
    `</button>` +
    `<button class="quizbtn">` +
    Questions[count].options[3] +
    `</button>`;

  document.querySelector(".quiz").innerHTML = option;
  validateAnswers();
}

//  checks if the user selected the right option / answer
function validateAnswers() {
  let answer = Questions[numCount].correctAnswer;
  let QuizOption = document.querySelectorAll(".quizbtn");

  for (let i = 0; i < QuizOption.length; i++) {
    let option = QuizOption[i];
    option.addEventListener("click", (e) => {
      clearInterval(countdownInterval);
      let userChoice = e.target;

      if (userChoice.innerText === answer) {
        scoreCount++;
        userChoice.style.backgroundColor = "rgb(25,135,84)";
      } else if (userChoice.innerText !== answer) {
        userChoice.style.backgroundColor = "rgb(237,67,55)";
        userChoice.style.color = "#fff";
      }

      QuizOption.forEach((option) => {
        if (option.innerText === answer) {
          option.style.backgroundColor = "rgb(25,135,84)";
          option.style.color = "#fff";
        }
        option.disabled = true;
      });
    });
  }
}

// shows the score result after all questions have been answered
function updateScore() {
  quizContainer.style.display = "none";
  resultModal.classList.remove("none");
  resultModal.classList.add("active");

  let ScoreValue = document.querySelector(".correct-question");
  ScoreValue.innerText = scoreCount;

  let scorePercentage = document.querySelector(".percentage");
  let scoreNumPercentage = (scoreCount / Questions.length) * 100;
  scorePercentage.innerText = scoreNumPercentage.toFixed(2) + "%";
}

// allocate 10s for each question to be answere
function QuizTimer() {
  let QuizOption = document.querySelectorAll(".quizbtn");
  let timer = document.querySelector(".countdown");
  timer.innerText = countdown

  countdownInterval = setInterval(() => {
    countdown--;

    if (countdown == 0) {
      pauseTimer();
      QuizOption.forEach((item) => {
        if (item.innerText === Questions[numCount].correctAnswer) {
          item.style.backgroundColor = "rgb(25,135,84)";
          item.style.color = "#fff";
          item.disabled = true;
        }
        else if(countdown < 10){
          timerCount + countdown;
          timer.innerText = `0${countdown}:00`
        }
      });
    }
    timer.innerText = `0${countdown}:00`;
  }, 1000);
}

function pauseTimer() {
  clearInterval(countdownInterval);
}

// restart the game by reloading
function restartQuiz() {
  let restartBtn = document.querySelector(".restart");
  restartBtn.addEventListener("click", () => {
    resultModal.style.display = "none";
    quizContainer.style.display = "block";
    scoreCount = 0;
    numCount = 0;

    showQuestion(numCount);
    location.reload();
  });
}

restartQuiz();
