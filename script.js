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


function startGame(numCount) {
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

startGame()
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
    if(quizContainer.style.display = "block"){
      rulesSection.classList.add("active")
      quizContainer.style.display = "none"
    }
  });

  chooseAnswer(previousBtn);
}

function StartQuiz(rulesSection) {
  proceedBtn.addEventListener("click", () => {
    if (rulesSection.classList.contains("active")) {
      console.log(numCount)
      rulesSection.classList.remove("active");
      quizContainer.style.display = "block";
      showQuestion(numCount)
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
    if (numCount < Questions.length - 1) {
      numCount++;
      document.querySelector(".question-count").innerText = numCount + 1;
      questionText.innerText = Questions[numCount].question;
      previousBtn.style.display = "none";
    
    }
  else if(Questions.length == 1){
    numCount = 0;
  }
    console.log(numCount)
    showQuestion(numCount)

  });
}

function showQuestion (count){
let option =`<div class = "quizbtn">` + Questions[count].options[0]  + `</div>` +
`<div class = "quizbtn">` + Questions[count].options[1]  + `</div>` +
`<div class = "quizbtn">` + Questions[count].options[2]  + `</div>` +
`<div class = "quizbtn">` + Questions[count].options[3]  + `</div>` 

 document.querySelector(".quiz").innerHTML = option;
 validateAnswers(option)
}

function validateAnswers(option) {
const QuizOption = document.querySelectorAll(".quizbtn")
for(let i = 0; i < QuizOption.length; i++){
  QuizOption[i].addEventListener("click",(e) =>{
    let answer = e.target;
    if(answer.innerText == Questions[numCount].correctAnswer){
      answer.style.backgroundColor = "green"
    }
  })
}
}
