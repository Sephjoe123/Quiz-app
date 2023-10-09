const returnBtn = document.querySelector(".return");
const proceedBtn = document.querySelector(".start-game");
const quizContainer = document.getElementById("container");
const startModal = document.querySelector(".start-modal");
const UserOptions = Array.from(document.getElementsByClassName("quizbtn"));
const Nextbtn = document.querySelector(".next-button");
const previousBtn = document.querySelector(".previous-btn");
const resultModal = document.querySelector(".result-modal");
let numCount = 0;
let Quecount = 0;

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
    if (numCount <= 0) {
      quizContainer.style.display = "none";
      rulesSection.classList.add("active");
    } else {
    }
  });

  chooseAnswer(previousBtn);
}

function StartQuiz(rulesSection) {
  proceedBtn.addEventListener("click", () => {
    if (rulesSection.classList.contains("active")) {
      rulesSection.classList.remove("active");
      quizContainer.style.display = "block";
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

function chooseAnswer(previousBtn) {
  const questionText = document.querySelector(".question-text");
  questionText.innerText = Questions[numCount].question;
  UpdateQuizQuestion(questionText, previousBtn);
}

function UpdateQuizQuestion(questionText, previousBtn) {
  Nextbtn.addEventListener("click", () => {
    if (numCount < Questions.length - 1) {
      numCount++;
      document.querySelector(".question-count").innerText = numCount + 1;
      questionText.innerText = Questions[numCount].question;
      previousBtn.style.display = "none";
    }
  });
}
function validateAnswers(numCount, QuizOptions) {
 
}

function test(){
  UserOptions.forEach(item =>{
    item.addEventListener("click", () =>{
      console.log(Questions[numCount].options)
    })

  })
}

test()
