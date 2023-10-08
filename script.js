const returnBtn = document.querySelector(".return");
const proceedBtn = document.querySelector(".start-game");
const quizContainer = document.getElementById("container");
const startModal = document.querySelector(".start-modal");
const options = Array.from(document.querySelectorAll(".quizbtn"));
const Nextbtn = document.querySelector(".next-button");
const previousBtn = document.querySelector(".previous-btn");
const resultModal = document.querySelector(".result-modal");
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

  StartQuiz(rulesSection)

  previousBtn.addEventListener("click", () => {
    if (numCount <= 0) {
      quizContainer.style.display = "none";
      rulesSection.classList.add("active");
    } else {
    }
  });

  chooseAnswer(previousBtn)
}

function StartQuiz(rulesSection){
  proceedBtn.addEventListener("click", () => {
    if (rulesSection.classList.contains("active")) {
      rulesSection.classList.remove("active");
      quizContainer.style.display = "block";
    }
    else{
      quizContainer.style.display = "block"
    }
  });
  
}

function chooseAnswer(previousBtn) {
  const questionText = document.querySelector(".question-text");
  questionText.innerText = Questions[numCount].question;

  // Set the text of each option button based on the current question
  for (let i = 0; i < options.length; i++) {
    options[i].innerText = Questions[numCount].options[i];
  }

  UpdateQuizQuestion(questionText, previousBtn);
}


function UpdateQuizQuestion(questionText,previousBtn) {

  Nextbtn.addEventListener("click", () => {
    if (numCount < Questions.length - 1) {
      numCount++;
      document.querySelector(".question-count").innerText = numCount + 1;
      questionText.innerText = Questions[numCount].question;
      previousBtn.style.display = "none"
      for (let i = 0; i < options.length; i++) {
        options[i].innerText = Questions[numCount].options[i];
        
      }
    
    validateAnswers(numCount,options[0], options[1],options[2], options[3])
    }

    else if(numCount == 3){
      quizContainer.style.display = "none";
      resultModal.classList.remove("none");

    }
 
  });
  
}
function validateAnswers(num, op1, op2, op3, op4) {
  
  
  // Repeat this logic for op2, op3, and op4 if needed
}



// function showResult(){
//  const restartBtn = document.querySelector(".restart")
//  restartBtn.addEventListener("click",() =>{
//  resultModal.style.display = "none";

//  quizContainer.style.display = "block";
//  UpdateQuizQuestion()
//  })
// }

// showResult()
