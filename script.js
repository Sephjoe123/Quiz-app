const returnBtn = document.querySelector(".return");
const proceedBtn = document.querySelector(".start-game");
const quizContainer = document.getElementById("container");
const startModal = document.querySelector(".start-modal");
const UserOptions = Array.from(document.getElementsByClassName("quizbtn"));
const Nextbtn = document.querySelector(".next-button");
const previousBtn = document.querySelector(".previous-btn");
const resultModal = document.querySelector(".result-modal");
let numCount = 0;
let scoreCount = 0;

function startGame() {
  const startBtn = document.querySelector(".start-btn");
  const rulesSection = document.querySelector(".rules-section");
  startBtn.addEventListener("click", () => {
    if (!rulesSection.classList.contains("active")) {
      rulesSection.classList.add("active");
      startModal.classList.add("none");
    }
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
    if ((quizContainer.style.display === "block")) {
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
  });
}

function chooseAnswer(previousBtn) {
  const questionText = document.querySelector(".question-text");
  questionText.innerText = Questions[numCount].question;
  UpdateQuizQuestion(questionText, previousBtn);
}

function UpdateQuizQuestion(questionText, previousBtn) {
  Nextbtn.addEventListener("click", () => {
    if (numCount < Questions.length - 1 ) {
      numCount++;
      document.querySelector(".question-count").innerText = numCount + 1;
      questionText.innerText = Questions[numCount].question;
      previousBtn.style.display = "none";
    } 
    else{
      updateScore()
    }
    showQuestion(numCount);
  
  });
}

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

function validateAnswers() {
  let answer = Questions[numCount].correctAnswer;
  const QuizOption = document.querySelectorAll(".quizbtn");

  for (let i = 0; i < QuizOption.length; i++) {
    let option = QuizOption[i];
    option.addEventListener("click", (e) => {
      let userChoice = e.target;

      if (userChoice.innerText === answer) {
        scoreCount++
        userChoice.style.backgroundColor = "rgb(25,135,84)";
        console.log(scoreCount)
      } else if (userChoice.innerText !== answer) {
        userChoice.style.backgroundColor = "rgb(237,67,55)";
        userChoice.style.color = "#fff"
      }

      
      QuizOption.forEach((option) => {
        if (option.innerText === answer) {
          option.style.backgroundColor = "rgb(25,135,84)";
          option.style.color = "#fff"
        }
        option.disabled = true;
      });
    });
  }
}

function updateScore(){
  
quizContainer.style.display = "none";
resultModal.classList.remove("none");
resultModal.classList.add("active");

let ScoreValue = document.querySelector(".correct-question");
ScoreValue.innerText = scoreCount;
console.log(ScoreValue)

}
