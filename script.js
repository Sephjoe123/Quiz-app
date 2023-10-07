const returnBtn = document.querySelector(".return");
const proceedBtn = document.querySelector(".start-game");
const quizContainer = document.getElementById("container");
const startModal = document.querySelector(".start-modal");
const options = Array.from(document.querySelectorAll(".quizbtn"));
const Nextbtn = document.querySelector(".next-button");
const previousBtn = document.querySelector(".previous-btn");
let numCount = 0;

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

  proceedBtn.addEventListener("click", () => {
    if (rulesSection.classList.contains("active")) {
      rulesSection.classList.remove("active");
      quizContainer.style.display = "block";
    }
  });

  previousBtn.addEventListener("click", () => {
    if (numCount <= 0) {
      quizContainer.style.display = "none";
      rulesSection.classList.add("active");
    } else {
    }
  });

  chooseAnswer(previousBtn)
}

function chooseAnswer(previousBtn) {
  const questionText = document.querySelector(".question-text");
  questionText.innerText = Questions[numCount].question;
  for (let i = 0; i < options.length; i++) {
    options[0].innerText = Questions[numCount].options[0];
    options[1].innerText = Questions[numCount].options[1];
    options[2].innerText = Questions[numCount].options[2];
    options[3].innerText = Questions[numCount].options[3];
  }
  UpdateQuizQuestion(questionText,previousBtn);
}

function UpdateQuizQuestion(questionText, previousBtn) {
  Nextbtn.addEventListener("click", () => {
    if (numCount < Questions.length - 1) {
      numCount++;
      questionText.innerText = Questions[numCount].question;
      previousBtn.style.display = "none"
      for (let i = 0; i < options.length; i++) {
        options[0].innerText = Questions[numCount].options[0];
        options[1].innerText = Questions[numCount].options[1];
        options[2].innerText = Questions[numCount].options[2];
        options[3].innerText = Questions[numCount].options[3];
      }
    }
  });
  
}

